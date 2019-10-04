<template>
    <div class="orderList-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="orderList-title">订单列表</span>
            </div>
            <!-- 头部导航 -->
            <div class="nav">
                <router-link class="nav-item item1" :to="{ name : 'total' }" tag="div">全部</router-link>
                <router-link class="nav-item" :to="{ name:'payment'}" tag="div">待付款</router-link>
                <router-link class="nav-item" :to="{ name :'paid'}" tag="div">已付款</router-link>
                <router-link class="nav-item" :to="{ name : 'finished'}" tag="div">已完成</router-link>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <!-- <transition :name="slide"> -->
                <router-view></router-view>
            <!-- </transition> -->
        </div>
    </div>
</template> 

<script>
export default {
    name: 'OrderList',
    data() {
        return {

        }
    },
    computed: {

    },
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.orderList-main {
    height: 100%;
    overflow: hidden;
    background-color: $baseColor;
    // 头部
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80px;
        background-color: $topBarColor;
        .header-bar {
            display: flex;
            width: 100%;
            height: 36px;
            margin-top: 10px;
            .orderList-title {
                width: 73px;
                height: 24px;
                margin: 1px 0 0 110px;
                font-size: 17px;
                color: #fff;
            }
            img {
                width: 19px;
                height: 19px;
                margin-left: 21px;
            }
        }
        // 头部导航
        .nav {
            display: flex;
            justify-content: space-evenly;
            .nav-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 49px;
                height: 21px;
                color: #fff;
                font-size: 15px;
                &.router-link-active {
                    &::after {
                        content: "";
                        display: block;
                        width: 50px;
                        height: 2px;
                        margin-top: 4px;
                        border-radius: 5px 5px 0 0;
                        background-color: #fff;
                    }
                    &.item1::after {
                        width: 31px;
                    }
                }
            }
        }
    }
    // 内容部分
    .container {
        display: flex;
        justify-content: center;
        background-color: $baseBgColor;
        margin-top: -10px;
        width: 100%;
        height: 100%;
        border-radius: 20px 20px;
        overflow: hidden;
    }
}
</style>