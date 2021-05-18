import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import start from './start';
import '@/assets/element_style/theme/index.css'
import '@/less/style_admin.less'
import 'bootstrap/dist/css/bootstrap.css'
import Auth from './util/auth'
import Http from './util/http'
import Crypto from './util/crypto'
import Websocket from './util/websocket'
import Sqlite from './util/sqlite'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$auth = Auth;
Vue.prototype.$http = Http;
Vue.prototype.$crypto = Crypto;
Vue.prototype.$socket = Websocket;
Vue.prototype.$sqlite = Sqlite;

start.mountVue(store, router, App, Sqlite);