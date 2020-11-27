import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import EmptyLayout from '@/components/emptyLayout'
import Index from '@/views/Home'
import MyPage from '@/views/MyPage'
/*以下是活動*/
import EventsList from '@/views/EventsList'
/*會員登入相關*/
import Login from '@/views/auth/Login'
import ForgetPwd from '@/views/auth/ForgetPwd'

/* 個人中心相關頁面 */
import BusinessCard from '@/views/MyPage/businessCard/index.vue'
import Message from '@/views/MyPage/message/index.vue'
import News from '@/views/MyPage/news/index.vue'
import PrivacyPolicy from '@/views/MyPage/privacyPolicy/index.vue'
import PrivacySettings from '@/views/MyPage/privacySettings/index.vue'
import Problems from '@/views/MyPage/problems/index.vue'
import QrCode from '@/views/MyPage/qrCode/index.vue'
import ResetPassword from '@/views/MyPage/resetPassword/index.vue'
Vue.use(VueRouter)

let routes = [{
        path: '*',
        component: () =>
            import ( /* webpackChunkName: "EventsList" */ "@/views/EventsList")
    },
    //登入
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    //忘記密碼
    {
        path: '/forget-pwd',
        name: 'ForgetPwd',
        component: ForgetPwd
    },
    //內頁加這
    {
        path: '/',
        component: MainPage,
        children: [
            { path: '/', name: 'Home', component: Index, meta: { title: '首頁' } },
            { path: 'eventsList', name: 'EventsList', component: EventsList, meta: { title: '主題活動列表頁' } },
            { path: 'my-page', name: 'MyPage', component: MyPage, meta: { title: '個人中心' } },

        ]
    },
    {
        path: '/my-page',
        component: EmptyLayout,
        children: [
            { path: 'business-card', name: 'BusinessCard', component: BusinessCard },
            { path: 'message', name: 'Message', component: Message },
            { path: 'news', name: 'News', component: News },
            { path: 'privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
            { path: 'privacy-settings', name: 'PrivacySettings', component: PrivacySettings },
            { path: 'problems', name: 'Problems', component: Problems },
            { path: 'qr-code', name: 'QrCode', component: QrCode },
            { path: 'reset-password', name: 'ResetPassword', component: ResetPassword }
        ]
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router