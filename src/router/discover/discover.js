export default {
    path: '/discover',
    name: 'discover',
    redirect: '/discover/article',
    component: () => import(/* webpackChunkName: "discover" */ '../../views/discover/index.vue'),
    children: [
        {
            path: 'article',
            name: 'article',
            component: () => import(/* webpackChunkName: "article" */ '../../views/discover/article/index.vue'),
            meta: {
                footShow: true
            },
        },
        {
            path: 'goods',
            name: 'goods',
            component: () => import(/* webpackChunkName: "goods" */ '../../views/discover/goods/index.vue'),
            meta: {
                footShow: true
            },
        },
    ]
}