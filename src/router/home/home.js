import Home from '../../views/home/index.vue'
import recommend from '../../views/home/recommend/index.vue'
export default {
    path: '/home',
    name: 'home',
    redirect: '/home/recommend',
    component: Home,
    children: [
        {
            path: 'recommend',
            name: 'recommend',
            component: recommend,
            meta: {
                footShow: true
            },
        },
        {
            path: 'brand',
            name: 'brand',
            component: () => import(/* webpackChunkName: "brand" */ '../../views/home/brand/index.vue'),
            meta: {
                footShow: true
            },
        },
    ]
}