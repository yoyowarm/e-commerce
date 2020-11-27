import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// ===================================== 外部套件 =====================================
//---- Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//---- ElementUI
import ElementUI from 'element-ui';
import '@/assets/element_style/theme/index.css'

Vue.use(ElementUI);

import '@/less/style_admin.less'

import Http from './util/http'

Http.install = function (Vue) {
    Vue.prototype.$http = Http;
};
Vue.use(Http);

import Auth from './util/auth'

Auth.install = function (Vue) {
    Vue.prototype.$auth = Auth;
};
Vue.use(Auth);

import Public from './util/public'

Public.install = function (Vue) {
    Vue.prototype.$public = Public;
};
Vue.use(Public);

// document.addEventListener('deviceready', function () {

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')

// }, false);