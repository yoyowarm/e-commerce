import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

import Home from '@/views/home/index.vue'
import Gift from '@/views/gift/index.vue'
import Scan from '@/views/scan/index.vue'
import Store from '@/views/store/index.vue'
import More from '@/views/more/index.vue'

/*主題活動*/
// import EventsList from '@/views/EventsList'

/*會員登入相關*/
import Login from '@/views/auth/Login.vue'
import ForgetPwd from '@/views/auth/ForgetPwd.vue'

/* 個人中心相關頁面 */
import EmptyLayout from '@/components/emptyLayout.vue'
import BusinessCard from '@/views/more/businessCard/index.vue'
import PrivacyPolicy from '@/views/more/privacyPolicy/index.vue'
import Setting from '@/views/more/setting/index.vue'
import QrCode from '@/views/more/qrCode/index.vue'
import ResetPassword from '@/views/more/resetPassword/index.vue'
import Service from '@/views/more/service/index.vue'
import History from '@/views/more/history/index.vue'
import MyComment from '@/views/more/myComment/index.vue'
import EditProfile from '@/views/more/editProfile/index.vue'
import Profile from '@/views/more/profile/index.vue'
// import Message from '@/views/more/message/index.vue'
// import News from '@/views/more/news/index.vue'
// import Problems from '@/views/more/problems/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/login', name: 'Login', component: Login}, //登入
  {path: '/forget-pwd', name: 'ForgetPwd', component: ForgetPwd}, //忘記密碼

  {
    path: '/',
    component: MainPage,
    children: [
        { path: 'home', name: 'Home', component: Home, meta: { title: '首頁' } },
        { path: 'gift', name: 'Gift', component: Gift, meta: { title: '禮物盒' } },
        { path: 'scan', name: 'Scan', component: Scan, meta: { title: '掃碼' } },
        { path: 'store', name: 'store', component: Store, meta: { title: '店家' } },
        { path: 'more', name: 'More', component: More, meta: { title: '個人中心' } },
    ]
  },
  {
    path: '/more',
    component: EmptyLayout,
    children: [
        { path: 'business-card', name: 'BusinessCard', component: BusinessCard, meta: { title: '我的名片' } },
        { path: 'privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy, meta: { title: '隱私權條款' } },
        { path: 'setting', name: 'Setting', component: Setting, meta: { title: 'APP設定' } },
        { path: 'qr-code', name: 'QrCode', component: QrCode, meta: { title: 'QR通訊錄' } },
        { path: 'reset-password', name: 'ResetPassword', component: ResetPassword, meta: { title: '變更密碼' } },
        { path: 'service', name: 'Service', component: Service, meta: { title: '客服中心' } },
        { path: 'history', name: 'History', component: History, meta: { title: '紀錄類' } },
        { path: 'my-comment', name: 'MyComment', component: MyComment, meta: { title: '我的評論' } },
        { path: 'edit-profile', name: 'EditProfile', component: EditProfile, meta: { title: '編輯個人資料' } },
        { path: 'profile', name: 'Profile', component: Profile, meta: { title: '編輯個人資料' } }
        // { path: 'problems', name: 'Problems', component: Problems, meta: { title: '常見問題' } },
        // { path: 'message', name: 'Message', component: Message, meta: { title: '我要留言' } },
        // { path: 'news', name: 'News', component: News, meta: { title: '最新消息' } },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
