<template>
    <div class="userArticle-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="collection-title">文章</span>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <div class="wrapper" ref="wrapper">
                <ul class="content">
                    <li class="li-item item">
                        <div class="articleImg">
                            <img src="@/assets/imgs/userArticle/article-img1.png" alt="">
                        </div>
                        <div class=desc>
                            <p class="name">莲花吊灯</p>
                            <p class="num">1426人收藏</p>
                            <p>一把有温度的好椅子是...</p>
                        </div>
                    </li>
                    <li class="li-item">
                        <div class="articleImg">
                            <img src="@/assets/imgs/userArticle/article-img2.png" alt="">
                        </div>
                        <div class=desc>
                            <p class="name">莲花吊灯</p>
                            <p class="num">1426人收藏</p>
                            <p>一把有温度的好椅子是...</p>
                        </div>
                    </li>
                    <li class="li-item item">
                        <div class="articleImg">
                            <img src="@/assets/imgs/userArticle/article-img3.png" alt="">
                        </div>
                        <div class=desc>
                            <p class="name">莲花吊灯</p>
                            <p class="num">1426人收藏</p>
                            <p>一把有温度的好椅子是...</p>
                        </div>
                    </li>
                    <li class="li-item">
                        <div class="articleImg">
                            <img src="@/assets/imgs/userArticle/article-img4.png" alt="">
                        </div>
                        <div class=desc>
                            <p class="name">莲花吊灯</p>
                            <p class="num">1426人收藏</p>
                            <p>一把有温度的好椅子是...</p>
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
    name: 'UserArticle',

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
.userArticle-main {
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
            height: calc(100% - 104px);
            display: flex;
            justify-content: center;
            .content {
                width: 335px;
                .li-item {
                    display: inline-block;
                    width: 158px;
                    height: 208px;
                    margin-top: 24px;
                    box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
                    border-radius: 5px;
                    background-color: #fff;
                    &.item {
                        margin-right: 19px;
                    }
                    .articleImg {
                        width: 158px;
                        height: 119px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .desc {
                        width: 130px;
                        height: 67px;
                        text-align: left;
                        margin: 14px 0 0 18px;
                        color: #b1b1b1;
                        .name {
                            color: $baseColor;
                        }
                        .num {
                            margin: 3px 0 14px 0;
                        }
                    }
                }
            }
        }
    }
}
</style>