<template>
  <div class="car-main">
    <BaseLayer ref="baseLayer">
      <template v-slot:header>
        <div class="header">
          <div class="gobick" @click="$router.go(-1)"></div>
          <p class="title">购物车</p>
        </div>
      </template>
      <template v-slot：default>
        <div class="car-list">
          <div class="car-item" v-for="item in goodsList" :key="item.id">
            <div class="checkbox">
              <input class="single" type="checkbox" />
            </div>
            <div class="goodsImg" :style="`background-image:url(${item.url})`"></div>
            <div class="item-r">
              <div class="text">
                <div class="title">{{item.name}}</div>
                <div class="number">编号：{{item.number}}</div>
                <div class="count">数量：X{{item.count}}</div>
              </div>
              <div class="price">¥{{item.price}}</div>
            </div>
            <div class="increase">
              <div class="sign reduce"></div>
              <!-- <img class="imgs" src="../../../assets/imgs/icons/jianhao.png" alt /> -->
              <div class="addNumber">2</div>
              <div class="sign plus"></div>
              <!-- <img class="imgs" src="../../../assets/imgs/icons/jiahao.png" alt /> -->
            </div>
          </div>
        </div>
        <div class="like">
          <div class="line"></div>猜你喜欢
          <div class="line"></div>
        </div>
        <div class="like-box">
          <swiper class="like-swiper" :options="likeSwiperOption" ref="likeSwiper">
            <swiper-slide v-for="item in likeList" :key="item.id">
              <img class="youLike" :src="item.url" alt />
            </swiper-slide>
          </swiper>
        </div>
      </template>
    </BaseLayer>
    <div class="footer">
      <div class="all">
        全选
        <input class="checkbox" type="checkbox" />
      </div>
      <div class="total">合计 : ¥ 0</div>
      <div class="calculate">结算</div>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Car-main",
  components: {
    swiper,
    swiperSlide,
    BaseLayer
  },
  data() {
    return {
      likeSwiperOption: {
        autoplay: false,
        // slidesPerView: "auto",
        slidesPerView: 3,
        // spaceBetween: 10,
        // centeredSlides: true,
        loop: false
      },
      goodsList: [
        {
          id: 11,
          name: "切割式床头柜",
          number: "114534",
          count: 1,
          price: 560,
          url: require("../../../assets/imgs/class-car/yizi.png")
        },
        {
          id: 12,
          name: "切割式床头柜",
          number: "114534",
          count: 1,
          price: 560,
          url: require("../../../assets/imgs/class-car/sofa.png")
        },
        {
          id: 13,
          name: "切割式床头柜",
          number: "114534",
          count: 1,
          price: 560,
          url: require("../../../assets/imgs/class-car/yizi2.png")
        }
      ],
      likeList: [
        {
          id: 21,
          url: require("../../../assets/imgs/class-car/ctg.png")
        },
        {
          id: 22,
          url: require("../../../assets/imgs/class-car/yizi3.png")
        },
        {
          id: 23,
          url: require("../../../assets/imgs/class-car/yizi4.png")
        }
      ]
    };
  },
  methods: {},
  mounted() {
    // 重新计算baseSroll
    setTimeout(() => {
      this.$refs.baseLayer.$scroll.refresh();
    }, 100);
  }
};
</script>

<style lang='scss' scoped>
.car-main {
  height: 100%;
  background-color: #354e44;
  .header {
    width: 100%;
    height: 100%;
    .gobick {
      position: absolute;
      left: 20px;
      top: 0;
      width: 20px;
      height: 100%;
      background: url("../../../assets/imgs/icons/arr-L.png") no-repeat center /
        20px;
    }
    .title {
      font-size: 17px;
      line-height: 44px;
      color: #ffffff;
    }
  }
  .car-list {
    width: 340px;
    margin: 0 auto;
    .car-item {
      position: relative;
      width: 100%;
      height: 120px;
      margin: 20px 0;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      background-color: #fff;
      .checkbox {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 100%;
        margin-left: 10px;
      }
      .goodsImg {
        float: left;
        width: 70px;
        height: 100%;
        margin: 0 10px;
        background-repeat: no-repeat;
        background-size: 70px;
        background-position: center;
      }
      .item-r {
        float: left;
        width: 220px;
        margin-top: 20px;
        .text {
          float: left;
          width: 165px;
          text-align: left;
          .title {
            font-family: PingFangSC-Semibold;
            font-size: 13px;
            font-weight: bold;
            color: #3e3e3e;
            letter-spacing: 1px;
          }
          .number {
            margin: 5px 0;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #8d8d8d;
            letter-spacing: 1px;
          }
          .count {
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #8d8d8d;
            letter-spacing: 1px;
          }
        }
        .price {
          float: right;
          margin: 30px 20px 0 0;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #8d8d8d;
        }
      }
      .increase {
        position: absolute;
        right: 30px;
        bottom: 15px;
        width: 100px;
        height: 20px;
        .sign {
          float: left;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #f1ece7;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          &.reduce {
            background-image: url("../../../assets/imgs/icons/jianhao.png");
          }
          &.plus {
            background-image: url("../../../assets/imgs/icons/jiahao.png");
          }
        }
        .addNumber {
          float: left;
          width: 30px;
          height: 20px;
          margin: 0 10px;
          border-radius: 7px;
          text-align: center;
          line-height: 20px;
          background-color: #f1ece7;
        }
      }
    }
  }
  .like {
    display: flex;
    margin: 20px 0;
    height: 20px;
    font-size: 12px;
    color: #a5a5a5;
    font-family: PingFangSC-Regular;
    justify-content: center;
    align-items: center;
    .line {
      width: 70px;
      height: 1px;
      margin: 30px;
      background-color: #dccec0;
    }
  }
  .like-swiper {
    width: 340px;
    margin: 0 auto;
    .youLike {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 10px;
      //   background-color: red;
    }
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    z-index: 999;
    .all {
      float: left;
      width: 70px;
      height: 100%;
      margin-left: 20px;
      line-height: 60px;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #3e3e3e;
      letter-spacing: 2px;
    }
    .total {
      float: left;
      height: 100%;
      margin-left: 45px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      line-height: 60px;
      color: #3e3e3e;
      letter-spacing: 1px;
    }
    .calculate {
      float: right;
      width: 120px;
      height: 40px;
      margin: 10px 20px 0;
      border-radius: 7px;
      font-family: PingFangSC-Semibold;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 2px;
      background: #354e44;
      color: #ffffff;
    }
  }
  ::v-deep .baseLayer-main {
    height: 100%;
    overflow: hidden;
    .header-bar {
      height: 40px;
    }
    .scroll-wapper {
      height: calc(100%-40px);
      overflow: hidden;
      margin-top: 40px;
      background-color: #f1ece7;
      border-radius: 20px 20px 0 0;
      .scroll-content {
        padding: 0px 0 80px;
        overflow: hidden;
      }
    }
  }
}
</style>