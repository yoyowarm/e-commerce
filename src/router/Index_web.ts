import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import EmptyLayout from '@/components/EmptyLayout.vue'


Vue.use(VueRouter)
        
const routes: Array<RouteConfig> = [
  {path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "Login" */ "@/views/auth/Login.vue")}, //登入
  {path: '/forget-pwd', name: 'ForgetPwd', component: () => import(/* webpackChunkName: "ForgetPwd" */ "@/views/auth/ForgetPwd.vue")}, //忘記密碼
  {
    path: '/home',
    component: EmptyLayout,
    children: [
      { path: '', name: 'Home', component: () => import(/* webpackChunkName: "Home" */ "@/views/home/Index.vue"), meta: { title: '首頁' }}
    ]
  },
  {
    path: '/',
    component: MainPage,
    children: [
        { path: 'gift', name: 'Gift', component: () => import(/* webpackChunkName: "Gift" */ "@/views/gift/Index.vue"), meta: { title: '禮物盒' } },
        { path: 'scan', name: 'Scan', component: () => import(/* webpackChunkName: "Scan" */ "@/views/scan/Index.vue"), meta: { title: '掃碼' } },
        { path: 'store', name: 'Store', component: () => import(/* webpackChunkName: "Store" */ "@/views/store/Index.vue"), meta: { title: '店家' } },
        { path: 'more', name: 'More', component: () => import(/* webpackChunkName: "More" */ "@/views/more/Index.vue"), meta: { title: '個人中心' } },
    ]
  },
  {
    path: '/more',
    name: 'more',
    component: () => import(/* webpackChunkName: "More" */ "@/views/more/Index.vue"),
    children: [
        { path: 'business-card', name: 'BusinessCard', component: () => import(/* webpackChunkName: "BusinessCard" */ "@/views/more/businessCard/Index.vue"), meta: { title: '我的名片' } },
        { path: 'privacy-policy', name: 'PrivacyPolicy', component: () => import(/* webpackChunkName: "PrivacyPolicy" */ "@/views/more/privacyPolicy/Index.vue"), meta: { title: '隱私權條款' } },
        { path: 'setting', name: 'Setting', component: () => import(/* webpackChunkName: "Setting" */ "@/views/more/setting/Index.vue"), meta: { title: 'APP設定' } },
        { path: 'qr-code', name: 'QrCode', component: () => import(/* webpackChunkName: "QrCode" */ "@/views/more/qrCode/Index.vue"), meta: { title: 'QR通訊錄' } },
        { path: 'edit-qr-code', name: 'EditQrCode', component: () => import(/* webpackChunkName: "EditQrCode" */ "@/views/more/qrCode/edit.vue")},
        { path: 'reset-password', name: 'ResetPassword', component: () => import(/* webpackChunkName: "ResetPassword" */ "@/views/more/resetPassword/Index.vue"), meta: { title: '變更密碼' } },
        { path: 'service', name: 'Service', component: () => import(/* webpackChunkName: "Service" */ "@/views/more/service/Index.vue"), meta: { title: '客服中心' } },
        { path: 'history', name: 'History', component: () => import(/* webpackChunkName: "History" */ "@/views/more/history/Index.vue"), meta: { title: '紀錄類' } },
        { path: 'my-comment', name: 'MyComment', component: () => import(/* webpackChunkName: "MyComment" */ "@/views/more/myComment/Index.vue"), meta: { title: '我的評論' } },
        { path: 'edit-profile', name: 'EditProfile', component: () => import(/* webpackChunkName: "EditProfile" */ "@/views/more/editProfile/Index.vue"), meta: { title: '編輯個人資料' } },
        { path: 'profile', name: 'Profile', component: () => import(/* webpackChunkName: "Profile" */ "@/views/more/profile/Index.vue"), meta: { title: '編輯個人資料' } }
        // { path: 'problems', name: 'Problems', component: () => import(/* webpackChunkName: "Problems" */ "./views/more/problems/Index.vue"), meta: { title: '常見問題' } },
        // { path: 'message', name: 'Message', component: () => import(/* webpackChunkName: "Message" */ "./views/more/message/Index.vue"), meta: { title: '我要留言' } },
        // { path: 'news', name: 'News', component: () => import(/* webpackChunkName: "News" */ "./views/more/news/Index.vue"), meta: { title: '最新消息' } },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
