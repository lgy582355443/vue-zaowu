export default {
    path: '/classify',
    name: 'classify',
    component: () => import(/* webpackChunkName: "classify" */ '../../views/classify/index.vue'),
    meta: {
        footShow: true
    },
}

