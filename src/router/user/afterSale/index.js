export default {
    path: '/afterSale',
    name: 'afterSale',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/afterSale/index.vue'),
    meta: {
        footShow: false
    },

}
