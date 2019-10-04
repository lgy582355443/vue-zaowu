export default {
    path: '/collection',
    name: 'collection',
    // redirect: '/afterSale/barter',
    component: () => import(/* webpackChunkName: "collection" */ '@/views/user/collection/index.vue'),
    meta: {
        footShow: false
    },

}
