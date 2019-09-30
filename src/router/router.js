import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'
import classify from './classify/classify'
import discover from './discover/discover'
import user from './user/user'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    classify,
    discover,
    user,
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
