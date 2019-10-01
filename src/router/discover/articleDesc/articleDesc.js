export default {
    path: '/discover/article/articleDesc',
    name: 'articleDesc',
    component: () => import(/* webpackChunkName: "articleDesc" */ '../../../views/discover/article/articleDesc/index.vue'),
    meta: {
        footShow: false
    }
}
