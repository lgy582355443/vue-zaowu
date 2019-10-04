<template>
    <div class="about-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link class="back" :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
            </div>
            <div class="avatar">
                <img src="@/assets/imgs/about/logo.png" alt="">
            </div>
            <span class="text">造物1.1.01</span>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <ul>
                <li class="li-item item1">
                    <span>隐私声明</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>官方网站</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>版本更新</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>分享app</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'About',
    data() {
        return {

        }
    },
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.about-main {
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    // 头部
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 190px;
        background-color: $topBarColor;
        .header-bar{
            display: flex;
            width: 100%;
            margin: 10px 0 0 20px;   
        }
        .avatar {
            margin-top: 15px;
            width: 106px;
            height: 106px;
            .back {
                img {
                    width: 16px;
                    height: 16px;
                }
            }
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .text {
            margin-top: 11px;
            color: #fff;
            font-size: 13px;
        }
    }
    // 内容部分
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        ul {
            span {
                display: block;
                width: 69px;
                height: 22px;
                line-height: 22px;
                text-align: center;
                color: $baseColor;
                font-size: 16px;
            }
            img {
                width: 16px;
                height: 17px;
                margin-left: 254px;
            }
            .li-item {
                display: flex;
                align-items: center;
                margin: 19.5px 0;
                &.item1 {
                    margin-top: 32px;
                }
            }
            .li-line {
                width: 335px;
                height: 1px;
                background-color: #ebebeb;
            }
        }
    }
}
</style>