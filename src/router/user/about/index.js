export default {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/user/about/index.vue'),
    meta: {
        footShow: false
    }
}