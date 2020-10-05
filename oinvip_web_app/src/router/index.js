import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'EventsList',
    component: () => import(/* webpackChunkName: "EventsList" */ "@/views/EventsList")
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {path: 'home', name: 'Home', component: () => import( /* webpackChunkName: "activity/Home" */ "@/views/activity/Home"), meta: {title: '首頁'}},
      {path: 'map', name: 'Map', component: () => import( /* webpackChunkName: "activity/Map" */ "@/views/activity/Map"), meta: {title: '友善地圖'}},
      {path: 'store', name: 'Store', component: () => import( /* webpackChunkName: "activity/Store" */ "@/views/activity/Store"), meta: {title: '參與店家'}},
      {path: 'news', name: 'News', component: () => import( /* webpackChunkName: "activity/News" */ "@/views/activity/News"), meta: {title: '活動公告'}},
      {path: 'news-detail', name: 'NewsDetail', component: () => import( /* webpackChunkName: "activity/NewsDetail" */ "@/views/activity/NewsDetail"), meta: {title: '活動公告詳細'}},
      {path: 'coupon', name: 'Coupon', component: () => import( /* webpackChunkName: "activity/Coupon" */ "@/views/activity/Coupon"), meta: {title: '優惠領取'}},
      {path: 'traffic', name: 'Traffic', component: () => import( /* webpackChunkName: "activity/Traffic" */ "@/views/activity/Traffic"), meta: {title: '交通資訊'}},
      {path: 'code', name: 'RecommendCode', component: () => import( /* webpackChunkName: "activity/RecommendCode" */ "@/views/activity/RecommendCode"), meta: {title: '我的推薦碼'}},
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
