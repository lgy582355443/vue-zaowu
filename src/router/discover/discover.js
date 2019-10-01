export default {
    path: '/discover',
    name: 'discover',
    redirect: '/discover/article',
    component: () => import(/* webpackChunkName: "discover" */ '../../views/discover/index.vue'),
    children: [
        {
            path: 'article',
            name: 'article',
            redirect: '/discover/article/light',
            component: () => import(/* webpackChunkName: "article" */ '../../views/discover/article/index.vue'),
            meta: {
                footShow: true
            },
            children: [
                {
                    path: 'light',
                    name: 'light',
                    component: () => import(/* webpackChunkName: "light" */ '../../views/discover/article/light/index.vue'),
                    meta: {
                        footShow: true
                    },
                },
                {
                    path: 'wardrobe',
                    name: 'wardrobe',
                    component: () => import(/* webpackChunkName: "wardrobe" */ '../../views/discover/article/wardrobe/index.vue'),
                    meta: {
                        footShow: true
                    },
                },
                {
                    path: 'chair',
                    name: 'chair',
                    component: () => import(/* webpackChunkName: "chair" */ '../../views/discover/article/chair/index.vue'),
                    meta: {
                        footShow: true
                    },
                },
                {
                    path: 'decoration',
                    name: 'decoration',
                    component: () => import(/* webpackChunkName: "decoration" */ '../../views/discover/article/decoration/index.vue'),
                    meta: {
                        footShow: true
                    },
                },
            ]
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