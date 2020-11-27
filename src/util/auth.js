/* eslint-disable semi,no-trailing-spaces,indent,quotes,space-infix-ops,comma-dangle,padded-blocks,no-unused-vars,eol-last,semi-spacing */

let admin_token = window.localStorage.getItem('admin_token');
let store_token = window.localStorage.getItem('store_token');
let admin_role_token = window.localStorage.getItem('admin_role_token');
let store_token_list = window.localStorage.getItem('store_token_list');
let number = window.localStorage.getItem('account');
let loginEventType = window.localStorage.getItem('loginEventType');
let waitingCallBookmark = window.localStorage.getItem('waiting_call_bookmark');
let waitingCallPageMode = window.localStorage.getItem('waiting_call_pageMode');
let user_token = window.localStorage.getItem('user_token');

export default {
    isAdminLogin() {
        return admin_token !== null && admin_token !== '';
    },
    setAdminToken(t) {
        window.localStorage.setItem('admin_token', t + '');
        admin_token = t;
    },
    getAdminToken() {
        return admin_token;
    },
    isUserLogin() {
        return user_token !== null && user_token !== '' && user_token !== undefined && user_token !== 'undefined';
    },
    setUserToken(t) {
        window.localStorage.setItem('user_token', t + '');
        user_token = t;
    },
    getUsersToken() {
        if (this.isUserLogin()) {
            return user_token;
        } else {
            let u = navigator.userAgent.toLowerCase();
            let isApple = /iphone|ipad|ipod|ios/i.test(u);
            let isAndroid = /android/i.test(u);

            window.getUserToken = this.getUserToken//設全域function給iOS呼叫

            //判斷目前是何種載具
            if (isApple) {
                window.webkit.messageHandlers.ToApp.postMessage("login");//若toke沒有值，沒有則出現登入頁
            }else if(isAndroid) {
                window.jsCallAndroid.jsNoToken();//若toke沒有值，沒有則出現登入頁
            }

            return user_token;
        }
    },
    getUserToken: function (token) {
        window.localStorage.setItem('user_token', token + '');
        user_token = token;
    },
    setNumber(t) {
        window.localStorage.setItem('account', t + '');
        number = t;
    },
    getNumber() {
        return number;
    },
    isStoreToken() {
        return store_token !== null && store_token !== '';
    },
    setLoginEventType(t) {
        window.localStorage.setItem('loginEventType', t + '');
        loginEventType = t;
    },
    getLoginEventType() {
        return loginEventType;
    },

    setStoreToken(t) {
        window.localStorage.setItem('store_token', t + '');
        store_token = t;
    },
    getStoreToken() {
        return store_token;
    },

    clearToken() {
        admin_token = '';
        window.localStorage.removeItem('admin_token');
        store_token = '';
        window.localStorage.removeItem('store_token');

        number = '';
        window.localStorage.removeItem('number');
        loginEventType = '';
        window.localStorage.removeItem('loginEventType');
    },

    setStoreTokenList(list) {
        window.localStorage.setItem('store_token_list', list);
        store_token_list = list;
    },
    getStoreTokenList() {
        return store_token_list;
    },
    setWaitingCallBookmark(bookMark) {
        window.localStorage.setItem('waiting_call_bookmark', bookMark);
        waitingCallBookmark = bookMark;
    },
    getWaitingCallBookmark() {
        return waitingCallBookmark;
    },
    setwaitingCallPageMode(pageMode) {
        window.localStorage.setItem('waiting_call_pageMode', pageMode);
        waitingCallPageMode = pageMode;
    },
    getWaitingCallPageMode() {
        return waitingCallPageMode;
    },
}
