<template>
  <div class="goodsDetail-main">
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <div class="topImg">
          <div class="header">
            <div @click="$router.go(-1)" class="gobick"></div>
            <div class="share"></div>
          </div>
          <div class="heart"></div>
        </div>
        <div class="container">
          <div class="top-box">
            <div class="t-left">
              <div class="goodsName">切割式床头柜</div>
              <div class="en-text">by Adrianne Ho</div>
              <div class="color">
                <div class="dot d1"></div>
                <div class="dot d2"></div>
                <div class="dot d3"></div>
              </div>
            </div>
            <div class="price">¥560</div>
          </div>
          <div class="center-box">
            <div class="detail-text text1">轻北欧风个性与舒适并存，干净简洁的切合拼合外观，时尚简约。切割外观，置于居室增添一抹亮丽风景。</div>
          </div>
        </div>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "GoodsDetail",
  components: {
    baselayer
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.goodsDetail-main {
  height: 100%;
  background-color: #fff;
  .topImg {
    position: relative;
    width: 100%;
    height: 480px;
    border-radius: 0 0 0 60px;
    background: url("../../../../assets/imgs/discover-goods/x1.png") no-repeat
      center / cover;
    .header {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 40px;
      .gobick {
        float: left;
        width: 30px;
        height: 40px;
        padding-left: 20px;
        background: url("../../../../assets/imgs/icons/zuo.png") no-repeat
          center / 25px;
      }
      .share {
        float: right;
        width: 30px;
        height: 40px;
        padding-left: 20px;
        background: url("../../../../assets/imgs/icons/zf.png") no-repeat center /
          25px;
      }
    }
    .heart {
      position: absolute;
      right: 40px;
      bottom: -25px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #354e44 url("../../../../assets/imgs/icons/car.png") no-repeat
        center / 25px;
    }
  }
  .container {
    margin-top: 50px;
    padding: 0 30px;
    .top-box {
      width: 100%;
      height: 60px;
      text-align: left;
      .t-left {
        float: left;
        .goodsName {
          width: 150px;
          font-size: 18px;
          font-weight: bold;
          color: #3e3e3e;
          font-family: PingFangSC-Semibold;
        }
        .en-text {
          width: 150px;
          margin: 5px 0;
          font-size: 15.4px;
          color: #b0b0b0;
          font-family: PingFangSC-Regular;
        }
        .color {
          width: 150px;
          height: 15px;
          .dot {
            float: left;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin: 0 10px;
            &.d1 {
              margin: 0 0 0 0;
              background-color: #663725;
            }
            &.d2 {
              background-color: #9f4405;
            }
            &.d3 {
              background-color: #cb821b;
            }
          }
        }
      }
      .price {
        float: right;
        width: 100px;
        height: 25px;
        padding-top: 35px;
        font-size: 18px;
        text-align: right;
        color: #3e3e3e;
        font-family: PingFangSC-Regular;
      }
    }
    .center-box {
      width: 100%;
      margin: 30px 0;
      text-align: left;
      .detail-title {
        margin: 10px 0;
        font-size: 14px;
        font-weight: bold;
        color: #3e3e3e;
        letter-spacing: 1px;
        font-family: PingFangSC-Semibold;
      }
      .detail-text.text1 {
        font-size: 14px;
        text-indent: 2em;
        color: #8a8a8a;
        letter-spacing: 1px;
        line-height: 18px;
        font-family: PingFangSC-Regular;
      }
    }
  }
  ::v-deep .baseLayer-main {
    height: 100%;
    .header-bar {
      display: none;
    }
    .scroll-wapper {
      height: 100%;
      overflow: hidden;
      .scroll-content {
        padding: 0px;
        overflow: hidden;
      }
    }
  }
}
</style>