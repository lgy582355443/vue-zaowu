<template>
    <div class="brand-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="brand-title">收货地址</span>
                <img class="add" src="@/assets/imgs/icons/address-add.png" alt="">
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <div class="wrapper" ref="wrapper">
                <ul class="content">
                    <li class="li-item">
                        <div class="lastName">勿</div>
                        <div class="userInfo">
                            <p class="name">勿二君</p>
                            <p class="address">地址:湖南省长沙市镇北街</p>
                            <p>联系方式:12354785569</p>
                        </div>
                        <div class="line"></div>
                        <div class="edit">编辑</div>
                    </li>
                    <li class="li-item">
                        <div class="lastName">叶</div>
                        <div class="userInfo">
                            <p class="name">叶小飞</p>
                            <p class="address">地址:湖南省长沙市镇北街</p>
                            <p>联系方式:12354785569</p>
                        </div>
                        <div class="line"></div>
                        <div class="edit">编辑</div>
                    </li>
                    <li class="li-item">
                        <div class="lastName">韩</div>
                        <div class="userInfo">
                            <p class="name">韩二君</p>
                            <p class="address">地址:湖南省长沙市镇北街</p>
                            <p>联系方式:12354785569</p>
                        </div>
                        <div class="line"></div>
                        <div class="edit">编辑</div>
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
            .add {
                width: 22.6px;
                height: 22.6px;
                margin-left: 103px;
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
                    align-items: center;
                    justify-content: space-evenly;
                    width: 336px;
                    height: 104px;
                    margin-top: 20px;
                    border-radius: 12px;
                    background-color: #fff;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                    .lastName {
                        width: 41px;
                        height: 41px;
                        color: #fff;
                        line-height: 41px;
                        font-size: 18px;
                        margin: 0 13px 0 20px;
                        background: $topBarColor;
                        border-radius: 20.4px;
                    }
                    .userInfo {
                        width: 195px;
                        text-align: left;
                        color: #8d8d8d;
                        font-size: 11px;
                        .name {
                            font-size: 13px;
                            color: $baseColor;
                        }
                        .address {
                            margin: 2px 0 2px 0;
                        }
                    }
                    .line {
                        width: 1px;
                        height: 17px;
                        opacity: 0.35;
                        background-color: #979797;
                    }
                    .edit {
                        font-size: 13px;
                        margin: 0 20px 0 12px;
                        color: $littleBaseColor;
                    }
                }
            }
        }
    }
}
</style>