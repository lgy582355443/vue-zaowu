<template>
    <div class="payment-main">
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li class="li-item">
                    <div class="productInfo">
                        <div class="header">
                            <div class="orderNum">订单编号: 1727384727</div>
                            <div class="orderPay">待付款</div>
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
                                <span class="total">合计: ¥392</span>
                            </div>
                        </div>
                        <div class="btm">
                            <div class="button lookUp">查看物流</div>
                            <div class="button confirm">确认收货</div>
                        </div>
                    </div>
                </li>
                <li class="li-item">
                    <div class="productInfo">
                        <div class="header">
                            <div class="orderNum">订单编号: 1727384727</div>
                            <div class="orderPay">待付款</div>
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
                                <span class="total">合计: ¥392</span>
                            </div>
                        </div>
                        <div class="btm">
                            <div class="button lookUp">查看物流</div>
                            <div class="button confirm">确认收货</div>
                        </div>
                    </div>
                </li>
                <li class="li-item">
                    <div class="productInfo">
                        <div class="header">
                            <div class="orderNum">订单编号: 1727384727</div>
                            <div class="orderPay">待付款</div>
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
                                <span class="total">合计: ¥392</span>
                            </div>
                        </div>
                        <div class="btm">
                            <div class="button lookUp">查看物流</div>
                            <div class="button confirm">确认收货</div>
                        </div>
                    </div>
                </li>
                <li class="li-item">
                    <div class="productInfo">
                        <div class="header">
                            <div class="orderNum">订单编号: 1727384727</div>
                            <div class="orderPay">待付款</div>
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
                                <span class="total">合计: ¥392</span>
                            </div>
                        </div>
                        <div class="btm">
                            <div class="button lookUp">查看物流</div>
                            <div class="button confirm">确认收货</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template> 

<script>
import BScroll from "@better-scroll/core"
export default {
    name: 'Payment',
    components: {
    },
    data() {
        return {

        }
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
.payment-main {
    .wrapper {
        // width: 100%;
        height: calc(100% - 120px);
        .content {
            padding-bottom: 60px;
            .li-item {
                display: flex;
                justify-content: center;
                width: 336px;
                height: 167px;
                background-color: #fff;
                box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
                border-radius: 12px;
                margin-top: 20px;
                .productInfo {
                    width: 300px;
                    height: 150px;
                    margin-top: 7px;
                    .header {
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
                        .orderPay {
                            width: 39px;
                            height: 17px;
                            margin-top: -4px;
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
                                margin-top: 10px;
                                text-align: right;
                            }
                        }
                    }
                    .btm {
                        display: flex;
                        justify-content: flex-end;
                        .button {
                            width: 68px;
                            height: 25px;
                            line-height: 25px;
                            opacity: 0.25;
                            border: 1px solid #6c6c6c;
                            border-radius: 5px;
                            &.lookUp {
                                margin-right: 16px;
                            }
                            &.confirm {
                                border-color: #2d4f43;
                                color: #2d4f43;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>