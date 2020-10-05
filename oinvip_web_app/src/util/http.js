import crypto from "../util/crypto"
import auth from "../util/auth"
import Vue from 'vue'
import router from '../router'

export default {
    csrfToken: process.env.VUE_APP_CSRF_TOKEN,
    FileHost: process.env.VUE_APP_FILE_HOST + '/api',
    initCsrfToken() {
        let req = new XMLHttpRequest();
        req.open('GET', document.location, false);
        req.send(null);
        let headers = req.getAllResponseHeaders().split('\n');
        headers.forEach(function (item) {
            if (item.indexOf('x-csrf-token') !== -1) {
                this.csrfToken = item.substring(item.indexOf(":") + 1);
                return false;
            }
        });
    },
    fetchWithAuthEncrypt() {  /* 需要驗證的api都必須呼叫此方法含加密 */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0];
        const parameter = crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[2];
        this.send(action, parameter, '/auth', funcSuccess);
    },
    fetchWithAuth() {  /* 需要驗證的api都必須呼叫此方法 */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0];
        const parameter = JSON.stringify(args[1]);
        const funcSuccess = args[2];
        this.send(action, parameter, '/auth', funcSuccess);
    },
    fetchWithEncrypt() { /* 整個參數json 轉成 string 再進行加密 */
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0];
        const parameter = crypto.encryptText(JSON.stringify(args[1]));
        const funcSuccess = args[2];
        this.send(action, parameter,'', funcSuccess);
    },
    fetch() {
        const args = Array.prototype.slice.call(arguments);
        const action = args[0][0];
        const parameter = JSON.stringify(args[1]);
        const funcSuccess = args[2];
        this.send(action, parameter,'', funcSuccess);
    },
    async send(action, parameter,authPath, funcSuccess) {
        await fetch(process.env.VUE_APP_API_HOST  +authPath, {
        // await fetch("http://192.168.50.96:9112" + "/admin-api" + authPath, {
            body: JSON.stringify({
                'action': action,
                'parameters': parameter,
            }),
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Csrf-Token': this.csrfToken === '' || typeof csrfToken === 'undefined' ? process.env.VUE_APP_CSRF_TOKEN : this.csrfToken,
                'Auth-Token': authPath === '/auth' ? auth.getAdminToken() : '',
                // 'appName': authPath === '/auth' ? auth.getStoreToken() : ''
                'appName': 'com.lifelink.oin'
            }),
            method: 'POST'
        }).then(response => {
            return response.text();
        }).then(text => {
            // JSON Hijacking while(1);
            let json = JSON.parse(text.replace('while(1);', ''));
            if (!json.status && json.message === "logout") {
                Vue.prototype.$auth.clearToken();
                router.push({path: '/'});
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
    //按下確定後在＋
    this.$http.fetchUpload`${{
        "file":  imageAry,
        "folder":  "/test"
    }}
                    ${json => {
        console.log(json)
    }}`;

 ex: only file
     this.logoImage = file;
    //按下確定後在＋
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
        if (file[0] === undefined){
            data.append("file", file);
        }else {
            file.forEach(function(val) {
                data.append("file", val);
            })
        }

        data.append("folder", folder);
        data.append("apiKey", "41e1ac4a1ad16b11275cd9121b572225");
        await fetch(this.FileHost, {
            body:data,
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
                router.push({path: '/'});
                return;
            }
            funcSuccess(json);
        }).catch(err=>{
            if(funcFail){
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







