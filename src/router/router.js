import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'
import classify from './classify/classify'
import discover from './discover/discover'
import user from './user/user'
import search from './home/search/search'
import login from './login/login'
import register from './login/register/register'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    classify,
    discover,
    user,
    search,
    register,
    login,
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
