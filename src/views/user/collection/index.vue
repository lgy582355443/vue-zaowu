<template>
    <div class="collection-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="collection-title">收藏</span>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <div class="wrapper" ref="wrapper">
                <ul class="content">
                    <li class="li-item item">
                        <div class="collection-img">
                            <img src="@/assets/imgs/collect/img1.png" alt="">
                        </div>
                        <div class="collectionInfo">
                            <p class="name">头层牛皮沙发</p>
                            <p class="num">编号: 1145434</p>
                            <p class="num">规格: 长430×宽522×高848mm</p>
                            <div class="collect">
                                <p>收藏:2241</p>
                                <p class="price">¥2470</p>
                            </div>
                        </div>
                    </li>
                    <li class="li-item item">
                        <div class="collection-img">
                            <img src="@/assets/imgs/collect/img2.png" alt="">
                        </div>
                        <div class="collectionInfo">
                            <p class="name">头层牛皮沙发</p>
                            <p class="num">编号: 1145434</p>
                            <p class="num">规格: 长430×宽522×高848mm</p>
                            <div class="collect">
                                <p>收藏:2241</p>
                                <p class="price">¥2470</p>
                            </div>
                        </div>
                    </li>
                    <li class="li-item item">
                        <div class="collection-img">
                            <img src="@/assets/imgs/collect/img3.png" alt="">
                        </div>
                        <div class="collectionInfo">
                            <p class="name">头层牛皮沙发</p>
                            <p class="num">编号: 1145434</p>
                            <p class="num">规格: 长430×宽522×高848mm</p>
                            <div class="collect">
                                <p>收藏:2241</p>
                                <p class="price">¥2470</p>
                            </div>
                        </div>
                    </li>
                    <li class="li-item item">
                        <div class="collection-img">
                            <img src="@/assets/imgs/collect/img4.png" alt="">
                        </div>
                        <div class="collectionInfo">
                            <p class="name">头层牛皮沙发</p>
                            <p class="num">编号: 1145434</p>
                            <p class="num">规格: 长430×宽522×高848mm</p>
                            <div class="collect">
                                <p>收藏:2241</p>
                                <p class="price">¥2470</p>
                            </div>
                        </div>
                    </li>
                    <li class="li-item item">
                        <div class="collection-img">
                            <img src="@/assets/imgs/collect/img4.png" alt="">
                        </div>
                        <div class="collectionInfo">
                            <p class="name">头层牛皮沙发</p>
                            <p class="num">编号: 1145434</p>
                            <p class="num">规格: 长430×宽522×高848mm</p>
                            <div class="collect">
                                <p>收藏:2241</p>
                                <p class="price">¥2470</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template> 

<script>
import BScroll from '@better-scroll/core';
export default {
    name: 'Collection',

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
.collection-main {
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
            .collection-title {
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
            height: calc(100% - 80px);
            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                .li-item {
                    display: flex;
                    width: 336px;
                    height: 104px;
                    margin-top: 20px;
                    border-radius: 12px;
                    background-color: #fff;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                    &.item {
                        margin-top: 32px;
                    }
                    .collection-img {
                        width: 70px;
                        height: 70px;
                        margin: 17px 33px 0 27px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .collectionInfo {
                        text-align: left;
                        height: 59px;
                        width: 188px;
                        margin-top: 17px;
                        color: $baseColor;
                        .name {
                            font-size: 13px;
                        }
                        .num {
                            margin-top: 2px;
                            font-size: 11px;
                            color: #8d8d8d;
                        }
                        .collect {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 4px;
                            font-size: 12px;
                            .price {
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>