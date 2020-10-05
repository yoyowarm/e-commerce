import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// ===================================== 外部套件 =====================================
//---- Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//---- ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import '@/less/style_admin.less'

import Http from './util/http'

Http.install = function (Vue) {
  Vue.prototype.$http = Http;
};
Vue.use(Http);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
