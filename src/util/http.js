import crypto from "../util/crypto"
import auth from "../util/auth"
import sqlite from "../util/sqlite"
import Vue from 'vue'
import router from '../router'

export default {
    csrfToken: process.env.VUE_APP_CSRF_TOKEN,
    FileHost: process.env.VUE_APP_FILE_HOST + '/api',
    notSaveArray: ['SignIn'],
    initCsrfToken() {
        let req = new XMLHttpRequest();
        req.open('GET', document.location, false);
        req.send(null);
        let headers = req.getAllResponseHeaders().split('\n');
        headers.forEach(function(item) {
            if (item.indexOf('x-csrf-token') !== -1) {
                this.csrfToken = item.substring(item.indexOf(":") + 1);
                return false;
            }
        });
    },
    getOS() {
        // eslint-disable-next-line no-prototype-builtins
        if (window.hasOwnProperty("cordova")) {
            // eslint-disable-next-line no-console
            console.log('getOS() => window.hasOwnProperty(cordova) = true');
        }

        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        // eslint-disable-next-line no-console
        console.log('getOS => os = ' + os);
        return os;
    },
    post(action, parameter, authPath, funcSuccess) {
        // eslint-disable-next-line no-prototype-builtins
        if (window.hasOwnProperty("cordova")) {
            sqlite.query('select json from offline_data where action like ?', [action], function(resultSet) {
                let jsonStr = resultSet.rows.item(0).json;
                let json = JSON.parse(jsonStr);
                funcSuccess(json);
            });
        } else {
            this.send(action, parameter, authPath, funcSuccess);
        }
    },
    postWithAuthEncrypt() { /* ???????????????api????????????????????????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? crypto.encryptText(JSON.stringify(args[2])) : crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.post(action, parameter, '/auth', funcSuccess);
    },
    postWithAuth() { /* ???????????????api???????????????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? JSON.stringify(args[2]) : JSON.stringify(args[1]);
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.post(action, parameter, '/auth', funcSuccess);
    },
    postWithEncrypt() { /* ????????????json ?????? string ??????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? crypto.encryptText(JSON.stringify(args[2])) : crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.post(action, parameter, '', funcSuccess);
    },
    fetchWithAuthEncrypt() { /* ???????????????api????????????????????????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? crypto.encryptText(JSON.stringify(args[2])) : crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.send(action, parameter, '/auth', funcSuccess);
    },
    fetchWithAuth() { /* ???????????????api???????????????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? JSON.stringify(args[2]) : JSON.stringify(args[1]);
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.send(action, parameter, '/auth', funcSuccess);
    },
    fetchWithEncrypt() { /* ????????????json ?????? string ??????????????? */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? crypto.encryptText(JSON.stringify(args[2])) : crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.send(action, parameter, '', funcSuccess);
    },
    fetch() {
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0] === '' ? args[1] : args[0][0];
        const parameter = args[0][0] === '' ? JSON.stringify(args[2]) : JSON.stringify(args[1]);
        const funcSuccess = args[0][0] === '' ? args[3] : args[2];
        this.send(action, parameter, '', funcSuccess);
    },
    async send(action, parameter, authPath, funcSuccess) {
        const paramJsonStr = JSON.stringify({
            'action': action,
            'parameters': parameter,
        });

        await fetch(process.env.VUE_APP_API_HOST + authPath, {
            body: paramJsonStr,
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Csrf-Token': this.csrfToken === '' || typeof csrfToken === 'undefined' ? process.env.VUE_APP_CSRF_TOKEN : this.csrfToken,
                'Auth-Token': authPath === '/auth' ? auth.getAdminToken() : '',
                'Store-Token': authPath === '/auth' ? auth.getStoreToken() : ''
            }),
            method: 'POST'
        }).then(response => {
            return response.text();
        }).catch(() => {
            if (this.notSaveArray.indexOf(action) === -1 && this.method === 'post') {
                sqlite.insert("insert into upload_data(action, json) values (?, ?)", [action, paramJsonStr])
            }
        }).then(text => {
            // JSON Hijacking while(1);
            let jsonStr = text.replace('while(1);', '');
            let json = JSON.parse(jsonStr);

            // sqlite.insert("insert into offline_data(action, json) values (?, ?)", [action, paramJsonStr])
            // if(this.notSaveArray.indexOf(action) === -1 && method === ''){
            //     sqlite.insert("insert delete api(action, json) values (?, ?)", [action, jsonStr])
            //     sqlite.insert("insert into api(action, json) values (?, ?)", [action, jsonStr])
            // }

            if (!json.status && json.message === "logout") {
                Vue.prototype.$auth.clearToken();
                router.push({ path: '/' });
                return;
            }
            funcSuccess(json);
        });
    },

    /*
 ex: array file
    let imageAry = [];
    imageAry.push(this.logoImage);
    imageAry.push(this.logoImage);
    //?????????????????????
    this.$http.fetchUpload`${{
        "file":  imageAry,
        "folder":  "/test"
    }}
                    ${json => {
        console.log(json)
    }}`;

 ex: only file
     this.logoImage = file;
    //?????????????????????
    this.$http.fetchUpload`${{
        "file":   this.logoImage,
        "folder":  "/test"
    }}
    ${json => {
        console.log(json)
    }}`;
    */

    async uploadSend(file, folder, funcSuccess, funcFail) {
        let data = new FormData();
        if (file[0] === undefined) {
            data.append("file", file);
        } else {
            file.forEach(function(val) {
                data.append("file", val);
            })
        }

        data.append("folder", folder);
        data.append("apiKey", "41e1ac4a1ad16b11275cd9121b572225");
        await fetch(this.FileHost, {
            body: data,
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
            }),
            method: 'POST',

        }).then(response => {
            return response.text();
        }).then(text => {
            // JSON Hijacking while(1);
            let json = JSON.parse(text.replace('while(1);', ''));
            if (!json.status && json.message === "logout") {
                Vue.prototype.$auth.clearToken();
                router.push({ path: '/' });
                return;
            }
            funcSuccess(json);
        }).catch(err => {
            if (funcFail) {
                funcFail(err);
            }
        });
    },
    async fetchUpload() {
        this.url = '';
        const args = Array.prototype.slice.call(arguments);
        const parameter = args[1];
        const funcSuccess = args[2];
        const funcFail = args[3];
        await this.uploadSend(parameter.file, parameter.folder, funcSuccess, funcFail);
    }
}