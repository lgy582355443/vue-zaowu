<template>
  <div class="classDetails-main">
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <div class="goodsShow">
          <div class="gobick" @click="$router.go(-1)"></div>
          <!-- 轮播 -->
          <swiper class="goods-swiper" :options="goodsSwiperOption" ref="goodsSwiper">
            <swiper-slide class="swiper-item" v-for="item in goodsImgList" :key="item.id">
              <div class="goods-item" :style="`background-image:url(${item.url})`"></div>
            </swiper-slide>
          </swiper>
          <div class="collect"></div>
        </div>
        <div class="detail">
          <div class="top-box">
            <div class="goodsName">莲花吊灯</div>
            <div class="en-text">by MacMaster</div>
            <div class="color">
              <div class="dot d1"></div>
              <div class="dot d2"></div>
              <div class="dot d3"></div>
            </div>
            <div class="price">¥560</div>
          </div>
          <div class="detail-text">
            <div class="text-title">人体工程</div>
            <div class="text-desc">座、靠、扶手都是按照人体工程学设计，舒适放松。内部填充高回弹海绵，接触面环形包围，承托更舒适。</div>
            <div class="text-title">优雅弧度扶手</div>
            <div class="text-desc">翻遍扶手设计，更好满足手臂承托要求。</div>
            <img src="../../../assets/imgs/class-details/illustration.png" alt />
            <div class="text-title">高弹海绵</div>
            <div
              class="text-desc"
            >高弹海绵的泡孔直径巨细混合散布，骨架粗细不一样有很大的开孔率，在受压时会在不一样形变状态下发生不一样支持力和反弹力，因而由高弹海绵制造的餐椅，可提供非常好的舒适度。</div>
          </div>
        </div>
      </template>
    </baselayer>
    <div class="footer-bar">
      <div class="kf">
        <div class="text">客服</div>
      </div>
      <div class="addCar" @click="addCar">加入购物车</div>
    </div>
    <shop :isShow.sync='isShow'></shop>
  </div>
</template>

<script>
import shop from '../../../components/shop';
import baselayer from "@/components/BaseLayer";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "ClassDetails",
  components: {
    swiper,
    swiperSlide,
    baselayer,
    shop
  },
  data() {
    return {
      isShow:false,
      goodsSwiperOption: {
        autoplay: false,
        loop: false
      },
      goodsImgList: [
        {
          id: 11,
          url: require("../../../assets/imgs/class-details/banner.png")
        },
        {
          id: 12,
          url: require("../../../assets/imgs/class-details/illustration2.png")
        },
        {
          id: 13,
          url: require("../../../assets/imgs/class-details/banner.png")
        }
      ],
      centerDialogVisible: false,
      radio1: ""
    };
  },
  methods: {
    addCar() {
      this.isShow = true;
    },
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.classDetails-main {
  height: 100%;
  width: 100%;
  .goodsShow {
    position: relative;
    width: 100%;
    height: 320px;
    .gobick {
      position: absolute;
      left: 20px;
      top: 0px;
      width: 20px;
      height: 40px;
      background: url("../../../assets/imgs/icons/dyou.png") no-repeat center /
        20px;
      z-index: 20;
    }
    .goods-item {
      width: 100%;
      height: 320px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .collect {
      position: absolute;
      right: 30px;
      bottom: -30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 8px 12px 0 rgba(70, 70, 70, 0.2);
      background: #354e44 url("../../../assets/imgs/icons/ax.png") no-repeat
        center / 30px;
      z-index: 20;
    }
  }
  .detail {
    box-sizing: border-box;
    padding: 0 20px;
    .top-box {
      width: 100%;
      margin-top: 40px;
      text-align: left;
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
          margin: 0 10px;
          border-radius: 50%;
          &.d1 {
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
      .price {
        // float: right;
        width: 100px;
        height: 25px;
        padding-top: 20px;
        font-size: 18px;
        text-align: left;
        color: #3e3e3e;
        font-family: PingFangSC-Regular;
      }
    }
    .detail-text {
      text-align: left;
      img {
        display: block;
        width: 300px;
        margin: 10px auto;
      }
      .text-title {
        margin: 10px 0;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        font-weight: bold;
        color: #3e3e3e;
        letter-spacing: 1px;
      }
      .text-desc {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        line-height: 20px;
        color: #8a8a8a;
        letter-spacing: 1px;
      }
    }
  }
  .footer-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    .kf {
      float: left;
      width: 30px;
      height: 50px;
      margin-left: 20px;
      background: url("../../../assets/imgs/icons/kf.png") no-repeat center 8px /
        30px;
        .text{
          margin-top:35px;
        }
    }
    .addCar {
      float: right;
      width: 100px;
      height: 40px;
      margin: 5px 20px;
      background-color: #354e44;
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      color: white;
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
        padding: 0 0 80px;
        overflow: hidden;
      }
    }
  }
}
</style>