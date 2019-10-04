import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'
import classify from './classify/classify'
import discover from './discover/discover'
import user from './user/index'
import search from './home/search/search'
import login from './login/login'
import register from './login/register/register'
import about from './user/about'
import security from './user/security/'
import orderList from './user/orderList'
import afterSale from './user/afterSale'
import collection from './user/collection'
import userArticle from './user/userArticle'
import userBrand from './user/userBrand/'
import reciveAddress from './user/reciveAddress'
import userCard from './user/userCard'
import articleDesc from './discover/articleDesc/articleDesc'
import goodsDetail from './discover/goodsDetail/goodsDetail';
import reative from './reative/reative'
import details from './class-details/class-details'
import car from './car/car'
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
    about,
    security,
    orderList,
    afterSale,
    collection,
    userArticle,
    userBrand,
    reciveAddress,
    userCard,
    articleDesc,
    goodsDetail,
    reative,
    details,
    car,
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
