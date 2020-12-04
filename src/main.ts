import Vue from 'vue'
import App from './App.vue'
import router from './router/Index'
import store from './store/Index'
import Auth from './util/Auth'
import ElementUI from 'element-ui';
import '@/assets/element_style/theme/index.css'
import '@/less/style_admin.less'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$auth = Auth.Instance;

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
  }
}

// document.addEventListener('deviceready', function () {
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// }, false);