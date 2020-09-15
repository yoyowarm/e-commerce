import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children: [
      {path: '', name: 'Home', component: () => import( /* webpackChunkName: "Home" */ "@/views/Home"), meta: {title: '首頁'}},

    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
