export default {
    path: '/orderList',
    name: 'orderList',
    redirect: '/orderList/total',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/user/orderList/index.vue'),
    meta: {
        footShow: false
    },
    children: [
        {
            path: 'total',
            name: 'total',
            component: () => import(/* webpackChunkName: "total" */ '@/views/user/orderList/total/index.vue'),

        },

        {
            path: 'payment',
            name: 'payment',
            component: () => import(/* webpackChunkName: "payment" */ '@/views/user/orderList/payment/index.vue'),

        },
        {
            path: 'paid',
            name: 'paid',
            component: () => import(/* webpackChunkName: "paid" */ '@/views/user/orderList/paid/index.vue'),

        },
        {
            path: 'finished',
            name: 'finished',
            component: () => import(/* webpackChunkName: "finished" */ '@/views/user/orderList/finished/index.vue'),

        },

    ]
}