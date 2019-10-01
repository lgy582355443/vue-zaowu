<template>
  <div class="goods-main">
    <div class="container">
      <div class="title-box">
        <div class="en-text">Cutting furniture</div>
        <div class="title">
          切割家具
          <br />系列
        </div>
      </div>
      <div class="desc">
        <div class="height">
          <div class="text">高度</div>
          <div class="number">60</div>
        </div>
        <div class="area">
          <div class="text">区域</div>
          <div class="number">45</div>
        </div>
      </div>
      <div class="dot1">
        <div class="dot2">
          <div class="dot3"></div>
        </div>
      </div>
      <div class="goods-list">
        <div class="goods-item">
          <div class="goodsImg"></div>
          <div class="detail-ritht">
            <div class="goodsName">莲花吊灯</div>
            <div class="en-text">by MacMaster</div>
            <div class="color">
              <div class="dot d1"></div>
              <div class="dot d2"></div>
              <div class="dot d3"></div>
            </div>
            <div class="price">¥560</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.goods-main {
  width: 100%;
  height: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../../assets/imgs/discover-goods/b1.png") no-repeat;
    background-size: cover;
    background-position: center;
    .title-box {
      position: absolute;
      left: 30px;
      top: 60px;
      text-align: left;
      .en-text {
        padding: 10px 0;
        font-size: 13px;
        color: #ffffff;
        font-family: PingFangSC-Regular;
      }
      .title {
        font-size: 36px;
        line-height: 50px;
        color: #ffffff;
        letter-spacing: 3px;
        font-family: PingFangSC-Semibold;
      }
    }
    .desc {
      position: absolute;
      right: 20px;
      top: 200px;
      .text {
        margin-bottom: 15px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 1px;
      }
      .number {
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #ffffff;
        letter-spacing: 2px;
      }
      .height {
        margin-right: 20px;
        float: left;
      }
      .area {
        float: left;
      }
    }
    .dot1 {
      position: absolute;
      right: 30px;
      top: 320px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      .dot2 {
        width: 22px;
        height: 22px;
        margin: 3px auto;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.6);
        .dot3 {
          width: 6px;
          height: 6px;
          margin: 3px auto;
          border-radius: 50%;
          border: 5px solid rgba(255, 255, 255, 1);
        }
      }
    }
    .goods-list {
      position: absolute;
      right: 60px;
      bottom: 90px;
      .goods-item {
        width: 250px;
        height: 140px;
        background-color: #fff;
        border-radius: 5px;
        .goodsImg {
          float: left;
          width: 80px;
          height: 100%;
          padding: 0 20px;
          background: url("../../../assets/imgs/discover-goods/d1.png")
            no-repeat center / 80px;
        }
        .detail-ritht {
          float: right;
          text-align: left;
          .goodsName {
            padding-top: 20px;
            font-family: PingFangSC-Semibold;
            font-weight: bold;
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 1px;
          }
          .en-text {
            margin: 5px 0;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #b0b0b0;
            letter-spacing: 1px;
          }
          .color {
            width: 120px;
            height: 8px;
            .dot {
              float: left;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              &.d1 {
                background-color: #663725;
              }
              &.d2 {
                margin: 0 10px;
                background-color: #9f4405;
              }
              &.d3 {
                background-color: #cb821b;
              }
            }
          }
          .price {
            margin-top: 20px;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>