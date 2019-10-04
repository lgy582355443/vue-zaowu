export default {
    path: '/classify/car',
    name: 'car',
    component: () => import(/* webpackChunkName: "car" */ '../../views/classify/car/index.vue'),
    meta: {
        footShow: false
    },
}