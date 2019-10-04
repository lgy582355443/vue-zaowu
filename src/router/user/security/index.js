
export default {
    path: '/security',
    name: 'security',
    component: () => import(/* webpackChunkName: "security" */ '@/views/user/security/index.vue'),
    meta: {
        footShow: false
    }
}