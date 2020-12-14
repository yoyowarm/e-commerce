import Vue from 'vue'
import App from './App.vue'
import router from './router/Index'
import store from './store/Index'
import Auth from './util/Auth'
import ElementUI from 'element-ui';
import {mountVue} from './start';
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

// declare module 'cordova-plugin-camera' {
//   export class CameraPopoverOptions 
// }

mountVue(router, store, App);