import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../views/home/Home.vue"
import Category from "../views/category/Category.vue"
import Shopcart from "../views/shopcart/Shopcart.vue"
import Profile from "../views/profile/Profile.vue"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})
