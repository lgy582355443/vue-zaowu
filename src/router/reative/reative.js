export default{
        path: '/classify/reative',
        name: 'Reative',
        component: () => import(/* webpackChunkName: "classify" */ '../../views/classify/reative/index.vue'),
        meta: {
            footShow: false
    },
    redirect:"/classify/reative/news",
    children: [
        {
            path: 'news',
            name: 'news',
            component: () => import(/* webpackChunkName: "news" */ '../../views/classify/reative/news/index.vue'),
            meta: {
                footShow: false
            },
        },
        {
            path: 'price',
            name: 'price',
            component: () => import(/* webpackChunkName: "price" */ '../../views/classify/reative/price/index.vue'),
            meta: {
                footShow: false
            },
        },
        {
            path: 'sales',
            name: 'sales',
            component: () => import(/* webpackChunkName: "sales" */ '../../views/classify/reative/sales/index.vue'),
            meta: {
                footShow: false
            },
        },
        {
            path: 'screen',
            name: 'screen',
            component: () => import(/* webpackChunkName: "screen" */ '../../views/classify/reative/screen/index.vue'),
            meta: {
                footShow: false
            },
        },
    ]
}