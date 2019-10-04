export default {
    path: '/userBrand',
    name: 'userBrand',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/userBrand/index.vue'),
    meta: {
        footShow: false
    },

}
