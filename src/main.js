import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Crypto from './util/crypto'
import Http from './util/http'
import Auth from './util/auth'

const app = createApp(App);
app.config.globalProperties.http = Http;
app.config.globalProperties.crypto = Crypto;
app.config.globalProperties.auth = Auth;

app.use(Crypto).
    use(Http).
    use(Auth).
    use(store).
    use(router).
    mount('#app');