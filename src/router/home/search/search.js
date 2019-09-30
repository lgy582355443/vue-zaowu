export default {
    path: '/home/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../../../views/home/search/index.vue'),
    meta: {
        footShow: false
    }
}