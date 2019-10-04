<template>
    <div class="brand-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="brand-title">卡包</span>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <div class="wrapper" ref="wrapper">
                <ul class="content">
                    <li class="li-item">
                        <div class="userCard-img">
                            <img src="@/assets/imgs/brand/brand-img1.png" alt="">
                        </div>
                        <div class="userCard">
                            <div class="price">
                                <span class="unit">¥</span>
                                <span class="num">50</span>
                                <span class="info">满500减</span>
                            </div>
                            <p class="shop">店铺优惠券</p>
                            <p class="date">2019.5.1-2019.6.18</p>
                        </div>
                        <div class="use">去使用</div>
                    </li>
                    <li class="li-item">
                        <div class="userCard-img">
                            <img src="@/assets/imgs/userCard/userCard-img1.png" alt="">
                        </div>
                        <div class="userCard">
                            <div class="price">
                                <span class="unit">¥</span>
                                <span class="num">50</span>
                                <span class="info">满500减</span>
                            </div>
                            <p class="shop">店铺优惠券</p>
                            <p class="date">2019.5.1-2019.6.18</p>
                        </div>
                        <div class="use">去使用</div>
                    </li>
                    <li class="li-item">
                        <div class="userCard-img">
                            <img src="@/assets/imgs/userCard/userCard-img2.png" alt="">
                        </div>
                        <div class="userCard">
                            <div class="price">
                                <span class="unit">¥</span>
                                <span class="num">50</span>
                                <span class="info">满500减</span>
                            </div>
                            <p class="shop">店铺优惠券</p>
                            <p class="date">2019.5.1-2019.6.18</p>
                        </div>
                        <div class="use">去使用</div>
                    </li>
                    <li class="li-item">
                        <div class="userCard-img">
                            <img src="@/assets/imgs/userCard/userCard-img3.png" alt="">
                        </div>
                        <div class="userCard">
                            <div class="price">
                                <span class="unit">¥</span>
                                <span class="num">50</span>
                                <span class="info">满500减</span>
                            </div>
                            <p class="shop">店铺优惠券</p>
                            <p class="date">2019.5.1-2019.6.18</p>
                        </div>
                        <div class="use">去使用</div>
                    </li>
                    <li class="li-item">
                        <div class="userCard-img">
                            <img src="@/assets/imgs/userCard/userCard-img4.png" alt="">
                        </div>
                        <div class="userCard">
                            <div class="price">
                                <span class="unit">¥</span>
                                <span class="num">50</span>
                                <span class="info">满500减</span>
                            </div>
                            <p class="shop">店铺优惠券</p>
                            <p class="date">2019.5.1-2019.6.18</p>
                        </div>
                        <div class="use">去使用</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template> 

<script>
import BScroll from '@better-scroll/core';
export default {
    name: 'Brand',

    data() {
        return {

        }
    },
    computed: {

    },
    mounted() {
        this.$nextTick(() => {
            this.$scroll = new BScroll(this.$refs.wrapper, {
                click: true
            });
        });
    }
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.brand-main {
    height: 100%;
    overflow: hidden;
    background-color: $baseColor;
    // 头部
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60px;
        background-color: $topBarColor;
        .header-bar {
            display: flex;
            width: 100%;
            height: 100%;
            margin-top: 10px;
            .brand-title {
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
    }
    // 内容部分
    .container {
        display: flex;
        flex-direction: column;
        background-color: $baseBgColor;
        margin-top: -20px;
        width: 100%;
        height: 100%;
        border-radius: 20px 20px;
        overflow: hidden;
        .wrapper {
            height: calc(100% - 104px);
            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                .li-item {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 336px;
                    height: 104px;
                    margin-top: 20px;
                    border-radius: 12px;
                    background: no-repeat center / 105% 110%
                        url("../../../assets/imgs/icons/userCard.png");
                    .userCard-img {
                        width: 68px;
                        height: 68px;
                        margin: -5px 0 0 20px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .userCard {
                        text-align: left;
                        width: 138px;
                        height: 46px;
                        margin: 0 22px 0 20px;
                        font-size: 10px;
                        color: $littleBaseColor;
                        .price {
                            color: #000000;
                            .num {
                                font-size: 16px;
                            }
                            .info {
                                font-size: 12px;
                            }
                        }
                        .shop {
                            margin: 6px 0 4px 0;
                        }
                    }
                    .use {
                        font-size: 13px;
                        margin-right: 18px;
                        color: $topBarColor;
                    }
                }
            }
        }
    }
}
</style>