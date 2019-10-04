export default {
    path: '/reciveAddress',
    name: 'reciveAddress',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/reciveAddress/index.vue'),
    meta: {
        footShow: false
    },

}
