import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import EmptyLayout from '@/components/EmptyLayout.vue'

import Home from '@/views/home/Index.vue'
import Gift from '@/views/gift/Index.vue'
import Scan from '@/views/scan/Index.vue'
import Store from '@/views/store/Index.vue'
import More from '@/views/more/Index.vue'
import BrandWall from '@/views/home/BrandWall.vue'
import Visit from '@/views/home/Visit.vue'
import MyStore from '@/views/home/MyStore.vue'
import CommentPage from '@/views/home/CommentPage.vue'
import ArticlePage from '@/views/home/Article.vue'
import BrandPage from '@/views/home/BrandPage.vue'

/*主題活動*/
// import EventsList from '@/views/EventsList'

/*禮物相關頁面*/
import Branches from '@/views/gift/Branch.vue'
import TransferCoupon from '@/views/gift/transferCoupon.vue'
import CouponPage from '@/views/gift/CouponPage.vue'
import IssueDate from '@/views/gift/IssueDate.vue'
import StoreMap from '@/views/gift/StoreMap.vue'

/*會員登入相關*/
import Login from '@/views/auth/Login.vue'
import ForgetPwd from '@/views/auth/ForgetPwd.vue'
import PhoneVerify from '@/views/auth/PhoneVerify.vue'
import Registered from '@/views/auth/Registered.vue'
import SetPwd from '@/views/auth/SetPwd.vue'

/* 個人中心相關頁面 */
import PageLayout from '@/views/PageLayout.vue'
import BusinessCard from '@/views/more/businessCard/Index.vue'
import PrivacyPolicy from '@/views/more/privacyPolicy/Index.vue'
import Setting from '@/views/more/setting/Index.vue'
import QrCode from '@/views/more/qrCode/Index.vue'
import ResetPassword from '@/views/more/resetPassword/Index.vue'
import Service from '@/views/more/service/Index.vue'
import History from '@/views/more/history/Index.vue'
import MyComment from '@/views/more/myComment/Index.vue'
import EditProfile from '@/views/more/editProfile/Index.vue'
import Profile from '@/views/more/profile/Index.vue'
import EditQrCode from '@/views/more/qrCode/edit.vue'
// import Message from '@/views/more/message/index.vue'
// import News from '@/views/more/news/index.vue'
// import Problems from '@/views/more/problems/index.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/login', name: 'Login', component: Login }, //登入
    { path: '/forget-pwd', name: 'ForgetPwd', component: ForgetPwd }, //忘記密碼
    { path: '/phone-verify', name: 'PhoneVerify', component: PhoneVerify }, //手機驗證
    { path: '/registered', name: 'Registered', component: Registered }, //註冊頁
    { path: '/set-pwd', name: 'SetPwd', component: SetPwd }, //設定密碼
    {
        path: '/home',
        component: EmptyLayout,
        children: [
            { path: '', name: 'Home', component: Home, meta: { title: '首頁' } }
        ]
    },
    {
        path: '/home',
        component: PageLayout,
        children: [
            { path: 'brand-wall', name: 'BrandWall', component: BrandWall, meta: { title: '品牌牆' } },
            { path: 'visit', name: 'Visit', component: Visit, meta: { title: '快來串門子' } },
            { path: 'my-store', name: 'MyStore', component: MyStore, meta: { title: '我的店家' } },
            { path: 'comment-page/:id', name: 'CommentPage', component: CommentPage, meta: { title: '評論頁' } },
            { path: 'article', name: 'ArticlePage', component: ArticlePage, meta: { title: '' } },
            { path: 'brand', name: 'BrandPage', component: BrandPage }
        ]
    },
    {
        path: '*',
        component: MainPage,
        children: [
            { path: 'gift', name: 'Gift', component: Gift, meta: { title: '禮物盒' } },
            { path: 'scan', name: 'Scan', component: Scan, meta: { title: '掃碼' } },
            { path: 'store', name: 'store', component: Store, meta: { title: '店家' } },
            { path: 'more', name: 'More', component: More, meta: { title: '個人中心' } }
        ]
    },
    {
        path: '/more',
        component: PageLayout,
        children: [
            { path: 'business-card', name: 'BusinessCard', component: BusinessCard, meta: { title: '我的名片' } },
            { path: 'privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy, meta: { title: '隱私權條款' } },
            { path: 'setting', name: 'Setting', component: Setting, meta: { title: 'APP設定' } },
            { path: 'qr-code', name: 'QrCode', component: QrCode, meta: { title: 'QR通訊錄' } },
            { path: 'edit-qr-code', name: 'EditQrCode', component: EditQrCode },
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
    },
    {
        path: '/gift',
        component: PageLayout,
        children: [
            { path: 'all-branches', name: 'Branches', component: Branches },
            { path: 'transfer-coupon', name: 'TransferCoupon', component: TransferCoupon, meta: { title: '優惠轉贈' } },
            { path: 'issue-date', name: 'IssueDate', component: IssueDate, meta: { title: '發放日期' } },
            { path: 'coupon-page', name: 'CouponPage', component: CouponPage, meta: { title: '' } },
            { path: 'store-map', name: 'StoreMap', component: StoreMap }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router