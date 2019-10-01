export default {
    path: '/discover/goods/goodsDetail',
    name: 'goodsDetail',
    component: () => import(/* webpackChunkName: "goodsDetail" */ '../../../views/discover/goods/goodsDetail/index.vue'),
    meta: {
        footShow: false
    }
}