<template>
    <div class="security-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <img src="@/assets/imgs/icons/arr-L.png" alt="" @click="$router.go(-1)">
                <span class="security-title">账户与安全</span>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <ul>
                <li class="li-item">
                    <span>Z号</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>个人资料</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>绑定手机号</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>微信账号</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>QQ账号</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>支付绑定</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
                <li class="li-item">
                    <span>设置登录密码</span>
                    <img src="@/assets/imgs/about/arr-R.png" alt="">
                </li>
                <li class="li-line"></li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'Security',
    data() {
        return {

        }
    },
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.security-main {
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
            .security-title {
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
        justify-content: center;
        background-color: #fff;
        margin-top: -20px;
        width: 100%;
        height: 100%;
        border-radius: 20px 20px;
        ul {
            span {
                display: block;
                width: 103px;
                height: 22px;
                line-height: 22px;
                text-align: left;
                color: $baseColor;
                font-size: 16px;
            }
            img {
                width: 16px;
                height: 17px;
                margin-left: 220px;
            }
            .li-item {
                display: flex;
                align-items: center;
                margin: 19.5px 0;
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