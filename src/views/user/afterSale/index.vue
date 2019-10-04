<template>
    <div class="afterSale-main">
        <!-- 头部 -->
        <div class="header">
            <div class="header-bar">
                <router-link :to="{ name : 'user' }" tag="div">
                    <img src="@/assets/imgs/icons/arr-L.png" alt="">
                </router-link>
                <span class="afterSale-title">申请售后</span>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="container">
            <p class="title">服务类型</p>
            <div class="nav">
                <div class="nav-item">换货</div>
                <div class="nav-item">退货</div>
                <div class="nav-item">仅退款</div>
            </div>
            <!-- 商品详情 -->
            <div class="products">
                <div class="productInfo">
                    <div class="products-header">
                        <div class="orderNum">订单编号: 1727384727</div>
                    </div>
                    <div class="productDetails">
                        <div class="productImg">
                            <img src="@/assets/imgs/total/list.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="top">
                                <span class="name">布袋香薰机</span>
                                <span class="price"> ¥392</span>
                            </div>
                            <div class="mid">
                                <span class="num"> 编号: 114534</span>
                                <span class="nums">×1</span>
                            </div>
                            <p class="size">规格: 948×472mm</p>
                            <span class="total">合计: ¥3902</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="title p">问题描述</p>
            <!-- 问题描述 -->
            <div class="desc">
                <textarea class="text" name="" id="" cols="" rows="10">
                    请输入您的评价信息
                </textarea>
            </div>
            <div class="submit">提交 </div>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'AfterSale',

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
.afterSale-main {
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
            .afterSale-title {
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
        .title {
            text-align: left;
            height: 22px;
            font-size: 16px;
            color: $baseColor;
            margin: 10px 0 0 21px;
            &.p {
                margin-top: 16px;
            }
        }
        .nav {
            display: flex;
            width: 100%;
            height: 25px;
            margin: 10px 0 0 21px;
            .nav-item {
                width: 65px;
                height: 25px;
                color: #fff;
                line-height: 25px;
                text-align: center;
                margin-right: 16px;
                background: $topBarColor;
                border-radius: 5px;
            }
        }
        // 商品详情
        .products {
            display: flex;
            justify-content: center;
            width: 336px;
            height: 167px;
            background-color: #fff;
            box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
            border-radius: 12px;
            margin: 16px 20px 0 20px;
            .productInfo {
                width: 300px;
                height: 150px;
                margin-top: 7px;
                .products-header {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    font-size: 12px;
                    line-height: 17px;
                    color: $baseColor;
                    .orderNum {
                        width: 140px;
                        height: 17px;
                        margin-top: 4px;
                    }
                }
                .productDetails {
                    display: flex;
                    margin-top: 14px;
                    .productImg {
                        width: 81px;
                        height: 81px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    // 商品详细信息
                    .infos {
                        display: flex;
                        flex-direction: column;
                        width: 205px;
                        height: 63px;
                        color: #8d8d8d;
                        font-size: 11px;
                        margin-left: 14px;
                        .top {
                            display: flex;
                            justify-content: space-between;
                            font-size: 13px;
                            color: $baseColor;
                            .price {
                                color: #8d8d8d;
                            }
                        }
                        .mid {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 6px;
                        }
                        .size {
                            text-align: left;
                            margin-top: 6px;
                        }
                        .total {
                            margin-top: 28px;
                            font-size: 13px;
                            color: #3e3e3e;
                            text-align: right;
                        }
                    }
                }
            }
        }
        //问题描述
        .desc {
            width: 336px;
            height: 167px;
            margin: 16px 20px 0 20px;
            .text {
                border: none;
                box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                border-radius: 12px;
                width: 100%;
                height: 100%;
            }
        }
        // 提交
        .submit {
            width: 286px;
            height: 47px;
            color: #fff;
            font-size: 15px;
            line-height: 47px;
            background-color: $topBarColor;
            border-radius: 7px;
            margin: 45px 53.5px 0 53.5px;
        }
    }
}
</style>