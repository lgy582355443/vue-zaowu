export default {
    path: '/userArticle',
    name: 'userArticle',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/userArticle/index.vue'),
    meta: {
        footShow: false
    },

}
