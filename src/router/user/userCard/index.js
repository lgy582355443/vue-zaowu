export default {
    path: '/userCard',
    name: 'userCard',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/userCard/index.vue'),
    meta: {
        footShow: false
    },

}
