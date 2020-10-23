import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'

import Home from '@/views/activity/Home'
import Map from '@/views/activity/Map'
import Store from '@/views/activity/Store'
import StoreDetail from '@/views/activity/StoreDetail'
import CouponDetail from '@/views/activity/CouponDetail'
import News from '@/views/activity/News'
import NewsDetail from '@/views/activity/NewsDetail'
import Coupon from '@/views/activity/Coupon'
import Traffic from '@/views/activity/Traffic'
import RecommendCode from '@/views/activity/RecommendCode'
Vue.use(VueRouter)

let routes = [
  {
    path: '*',
    name: 'EventsList',
    component: () => import(/* webpackChunkName: "EventsList" */ "@/views/EventsList")
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {path: 'home', name: 'Home', component: Home, meta: {title: '首頁'}},
      {path: 'map', name: 'Map', component: Map, meta: {title: '友善地圖'}},
      {path: 'store', name: 'Store', component: Store, meta: {title: '參與店家'}},
      {path: 'store-detail', name: 'StoreDetail', component: StoreDetail, meta: {title: '店家詳細'}},
      {path: 'coupon-store', name: 'CouponDetail', component: CouponDetail, meta: {title: '我要搶卷'}},
      {path: 'news', name: 'News', component: News, meta: {title: '活動公告'}},
      {path: 'news-detail', name: 'NewsDetail', component: NewsDetail, meta: {title: '活動公告詳細'}},
      {path: 'coupon', name: 'Coupon', component: Coupon, meta: {title: '優惠領取'}},
      {path: 'traffic', name: 'Traffic', component: Traffic, meta: {title: '交通資訊'}},
      {path: 'code', name: 'RecommendCode', component: RecommendCode, meta: {title: '我的推薦碼'}},
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
