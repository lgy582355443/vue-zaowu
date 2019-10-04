export default {
    path: '/classify/class-details',
    name: 'classDetails',
    component: () => import(/* webpackChunkName: "details" */ '../../views/classify/class-details/index.vue'),
    meta: {
        footShow: false
    },
}