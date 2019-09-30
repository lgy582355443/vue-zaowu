export default {
    path: '/login/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../../../views/login/register/index.vue'),
    meta: {
        footShow: false
    }
}