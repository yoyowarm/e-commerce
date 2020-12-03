import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './util/auth'
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);


Vue.prototype.$auth = Auth.Instance;

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
