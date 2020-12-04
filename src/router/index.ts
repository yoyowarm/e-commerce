import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

// import EmptyLayout from '@/components/emptyLayout'
import Home from '@/views/home/index.vue'
import Gifts from '@/views/gifts/index.vue'
import ScanCode from '@/views/scanCode/index.vue'
import Nearby from '@/views/nearby/index.vue'
import More from '@/views/more/index.vue'

/*主題活動*/
// import EventsList from '@/views/EventsList'

/*會員登入相關*/
import Login from '@/views/auth/Login.vue'
import ForgetPwd from '@/views/auth/ForgetPwd.vue'

/* 個人中心相關頁面 */
// import BusinessCard from '@/views/MyPage/businessCard/index.vue'
// import PrivacyPolicy from '@/views/MyPage/privacyPolicy/index.vue'
// import Settings from '@/views/MyPage/settings/index.vue'
// import QrCode from '@/views/MyPage/qrCode/index.vue'
// import ResetPassword from '@/views/MyPage/resetPassword/index.vue'
// import Service from '@/views/MyPage/service/index.vue'
// import History from '@/views/MyPage/history/index.vue'
// import MyComment from '@/views/MyPage/myComment/index.vue'
// import EditProfile from '@/views/MyPage/editProfile/index.vue'
// import Profile from '@/views/MyPage/profile/index.vue'
// import Message from '@/views/MyPage/message/index.vue'
// import News from '@/views/MyPage/news/index.vue'
// import Problems from '@/views/MyPage/problems/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/login', name: 'Login', component: Login}, //登入
  {path: '/forget-pwd', name: 'ForgetPwd', component: ForgetPwd}, //忘記密碼

  {
    path: '/',
    component: MainPage,
    children: [
        { path: '/', name: 'Home', component: Home, meta: { title: '首頁' } },
        { path: 'gifts', name: 'Gifts', component: Gifts, meta: { title: '禮物' } },
        { path: 'scan-code', name: 'ScanCode', component: ScanCode, meta: { title: '掃碼' } },
        { path: 'nearby', name: 'Nearby', component: Nearby, meta: { title: '附近' } },
        { path: 'more', name: 'More', component: More, meta: { title: '個人中心' } },
    ]
  },
  // {
  //   path: '/my-page',
  //   component: EmptyLayout,
  //   children: [
  //       { path: 'business-card', name: 'BusinessCard', component: BusinessCard, meta: { title: '我的名片' } },
  //       { path: 'privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy, meta: { title: '隱私權條款' } },
  //       { path: 'settings', name: 'Settings', component: Settings, meta: { title: 'APP設定' } },
  //       { path: 'qr-code', name: 'QrCode', component: QrCode, meta: { title: 'QR通訊錄' } },
  //       { path: 'reset-password', name: 'ResetPassword', component: ResetPassword, meta: { title: '變更密碼' } },
  //       { path: 'service', name: 'Service', component: Service, meta: { title: '客服中心' } },
  //       { path: 'history', name: 'History', component: History, meta: { title: '紀錄類' } },
  //       { path: 'my-comment', name: 'MyComment', component: MyComment, meta: { title: '我的評論' } },
  //       { path: 'edit-profile', name: 'EditProfile', component: EditProfile, meta: { title: '編輯個人資料' } },
  //       { path: 'profile', name: 'Profile', component: Profile, meta: { title: '編輯個人資料' } }
  //       // { path: 'problems', name: 'Problems', component: Problems, meta: { title: '常見問題' } },
  //       // { path: 'message', name: 'Message', component: Message, meta: { title: '我要留言' } },
  //       // { path: 'news', name: 'News', component: News, meta: { title: '最新消息' } },
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
