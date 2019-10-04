<template>
    <div class="user-main">
        <!-- 头部 -->
        <div class="header">
            <!-- 头像 -->
            <div class="avatar">
                <img src="@/assets/imgs/user/avatar.png" alt="">
            </div>
            <!-- 问候 -->
            <div class="greeting">
                <p class="top">hi~</p>
                <p>你还没有登录呢</p>
            </div>
            <!-- 设置 -->
            <div class="setting">
                <img class="img" src="@/assets/imgs/user/setting.png" alt="">
            </div>
        </div>
        <!-- 登录按钮 -->
        <div class="login-button">
            <div class="login">
                <router-link class="button register" :to="{ name:'register'}" tag="span">注册</router-link>
                <router-link class="button login" :to="{ name:'login'}" tag="span">登录</router-link>
            </div>
        </div>
        <!-- 订单 -->
        <div class="order-list">
            <router-link class="my-order" :to="{name:'orderList'}" tag="div">
                <div class="text">我的订单</div>
                <img src="@/assets/imgs/user/arr-R.png" alt="">
            </router-link>
            <div class="line"></div>
            <!-- 订单图标 -->
            <div class="info">
                <router-link class="info-img" :to="{ name:'payment' }" tag="div">
                    <img src="@/assets/imgs/user/pay.png" alt="">
                    <span class="text">待付款</span>
                </router-link>
                <router-link class="info-img" :to="{ name:'paid' }" tag="div">
                    <img src="@/assets/imgs/user/receipt.png" alt="">
                    <span class="text">待收货</span>
                </router-link>
                <router-link class="info-img" :to="{ name:'finished' }" tag="div">
                    <img src="@/assets/imgs/user/finished.png" alt="">
                    <span class="text">已完成</span>
                </router-link>
                <router-link class="info-img" :to="{ name:'afterSale' }" tag="div">
                    <img src="@/assets/imgs/user/sale.png" alt="">
                    <span class="text">售后</span>
                </router-link>
            </div>
        </div>
        <!-- 详情部分 -->
        <div class="container">
            <!-- 图标 -->
            <div class="info-item">
                <ul>
                    <router-link class="li-item" :to="{ name:'collection'}" tag="li">
                        <img src="@/assets/imgs/user/collect.png" alt="">
                        <span>收藏</span>
                    </router-link>
                    <li class="li-line"></li>
                    <router-link class="li-item" :to="{ name:'userBrand' }" tag="li">
                        <img src="@/assets/imgs/user/tag.png" alt="">
                        <span>品牌</span>
                    </router-link>
                    <li class="li-line"></li>
                    <router-link class="li-item" :to="{ name:'userArticle' }" tag="li">
                        <img src="@/assets/imgs/user/title.png" alt="">
                        <span>文章</span>
                    </router-link>
                </ul>
            </div>
            <div class="info-item">
                <ul>
                    <router-link class="li-item" :to="{ name:'reciveAddress' }" tag="li">
                        <img src="@/assets/imgs/user/address.png" alt="">
                        <span>地址</span>
                    </router-link>
                    <li class="li-line"></li>
                    <router-link class="li-item" :to="{ name:'userCard'}" tag="li">
                        <img src="@/assets/imgs/user/card.png" alt="">
                        <span>卡包</span>
                    </router-link>
                    <li class="li-line"></li>
                    <li class="li-item">
                        <img src="@/assets/imgs/user/service.png" alt="">
                        <span>客服</span>
                    </li>
                </ul>
            </div>
            <div class="info-item">
                <ul>
                    <router-link class="li-item" :to="{name:'security'}" tag="li">
                        <img src="@/assets/imgs/user/safe.png" alt="">
                        <span>安全</span>
                    </router-link>
                    <li class="li-line"></li>
                    </li>
                    <router-link class="li-item" :to="{name:'about'}" tag="li">
                        <img src="@/assets/imgs/user/about.png" alt="">
                        <span>关于</span>
                    </router-link>
                    <li class="li-item">
                    </li>
                    <li class="li-line line-last"></li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "User",
    components: {
    },
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common/common.scss";
.user-main {
    overflow: hidden;
    // 头部
    .header {
        display: flex;
        width: 100%;
        height: 104px;
        // margin-top: 3px;
        margin-top: 10px;
        // 头像
        .avatar {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            margin-left: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        // 问候
        .greeting {
            text-align: left;
            width: 105px;
            height: 40px;
            color: #3d4c46;
            font-size: 14px;
            margin: 21px 0 0 16px;
            .top {
                margin-bottom: 6px;
            }
        }
        // 设置
        .setting {
            width: 25px;
            height: 25px;
            margin: 0 20px 0 114px;
            .img {
                width: 100%;
                height: 100%;
            }
        }
    }
    // 注册登录按钮
    .login-button {
        .login {
            .button {
                display: inline-block;
                width: 98px;
                height: 36px;
                font-size: 15px;
                line-height: 38px;
                color: #ffffff;
                border: 1px solid #3d4c46;
                border-radius: 5px;
                &.login {
                    margin-left: 30px;
                    background-color: #3d4c46;
                }
                &.register {
                    color: #3d4c46;
                }
            }
        }
    }
    // 订单页面
    .order-list {
        width: 335px;
        height: 104px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        margin: 26px 20px 0 20px;
        box-shadow: 0 8px 12px 0 rgba(122, 98, 75, 0.04);
        border-radius: 5px;
        background-color: #fff;
        // 我的订单
        .my-order {
            display: flex;
            margin-top: 10px;
            justify-content: center;
            &.img {
                width: 7.6px;
                height: 13px;
            }
            .text {
                width: 56px;
                height: 18px;
                font-size: 13px;
                line-height: 18px;
                margin-right: 214px;
                color: $baseColor;
            }
        }
        .line {
            width: 282px;
            height: 1px;
            margin: 8px 0 12px 0;
            background-color: #ddd;
        }
        .info {
            display: flex;
            // margin-top: 26px;
            justify-content: space-between;
            .info-img {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 42px;
                height: 45.5px;
                margin: 0 21px;
                img {
                    width: 20px;
                    height: 18px;
                }
            }
            .text {
                color: $baseColor;

                margin-top: 7px;
            }
        }
    }
    //详情部分
    .container {
        width: 335px;
        height: 260px;
        margin: 25px 20px;
        box-shadow: 0 8px 12px 0 rgba(122, 98, 75, 0.04);
        border-radius: 5px;
        background-color: #fff;
        .info-item {
            ul {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }
            .li-item {
                margin-top: 22.5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 28px;
                height: 56.5px;
                img {
                    width: 24px;
                    height: 24px;
                }
                span {
                    margin-top: 11px;
                }
            }
            .li-line {
                width: 1px;
                height: 18px;
                background-color: #d5d5d5;
                &.line-last {
                    opacity: 0;
                }
            }
        }
    }
}
</style>