<template>
  <div class="goods-main">
    <swiper class="outerSwiper" :options="outerSwiperOption" ref="outerSwiper">
      <swiper-slide v-for="(item,index) in seriesList" :key="item.id">
        <!-- <img class="bgImg" :src="item.url" alt=""> -->
        <div :class="`container container${index}`" :style="`background-image:url(${item.url});`">
          <div class="title-box">
            <div class="en-text">{{item.enText}}</div>
            <div class="title">
              {{item.title}}
              <br />系列
            </div>
          </div>
          <div class="desc">
            <div class="height">
              <div class="text">高度</div>
              <div class="number">{{item.height}}</div>
            </div>
            <div class="area">
              <div class="text">区域</div>
              <div class="number">{{item.area}}</div>
            </div>
          </div>
          <div class="dot1">
            <div class="dot2">
              <div class="dot3"></div>
            </div>
          </div>
          <div class="goods-list">
            <swiper class="innerSwiper" :options="innerSwiperOption" :ref="`innerSwiper${index}`">
              <swiper-slide v-for="citem in item.goodsList" :key="citem.id">
                <div class="goods-item">
                  <div class="goodsImg" :style="`background-image:url(${citem.url});`"></div>
                  <div class="detail-ritht">
                    <router-link
                      class="goodsName"
                      :to="{name:'goodsDetail'}"
                      tag="div"
                    >{{citem.goodsTitle}}</router-link>
                    <div class="en-text">{{citem.enText}}</div>
                    <div class="color">
                      <div class="dot d1"></div>
                      <div class="dot d2"></div>
                      <div class="dot d3"></div>
                    </div>
                    <div class="price">¥{{citem.price}}</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Goods",
  components: {
    swiper,
    swiperSlide
  },
  props: {},
  data() {
    const that = this;
    return {
      outerIndex: 0,
      innerIndex: 0,
      outerSwiperOption: {
        autoplay: false,
        direction: "vertical",
        on: {
          slideChangeTransitionEnd: function() {
            that.outerIndex = this.realIndex; //切换结束时，告诉我现在是第几个slide
          }
        }
      },
      innerSwiperOption: {
        autoplay: false,
        direction: "horizontal",
        slidesPerView: 1.25,
        // spaceBetween: 0,
        centeredSlides: true,
        // loop: true
        on: {
          slideChangeTransitionEnd: function() {
            that.innerIndex = this.realIndex; //切换结束时，告诉我现在是第几个slide
          }
        }
      },
      seriesList: [
        {
          id: 11,
          title: "切割家居",
          enText: "Cutting furniture",
          height: 60,
          area: 45,
          url: require("../../../assets/imgs/discover-goods/bj1.png"),
          goodsList: [
            {
              id: 111,
              goodsTitle: "切割式床头柜",
              enText: "by Adrianne Ho",
              price: 560,
              position: -300,
              url: require("../../../assets/imgs/discover-goods/d1.png")
            },
            {
              id: 112,
              goodsTitle: "切割式床头柜",
              enText: "by Adrianne Ho",
              price: 250,
              position: -580,
              url: require("../../../assets/imgs/discover-goods/d2.png")
            }
          ]
        },
        {
          id: 21,
          title: "简约木式家具",
          enText: "Simple wooden type",
          height: 60,
          area: 45,
          url: require("../../../assets/imgs/discover-goods/bj2.png"),
          goodsList: [
            {
              id: 212,
              goodsTitle: "简约木式椅子",
              enText: "by Selena",
              price: 250,
              position: 0,
              url: require("../../../assets/imgs/discover-goods/y2.png")
            },
            {
              id: 211,
              goodsTitle: "简约木式桌",
              enText: "by Selena ",
              price: 560,
              position: -250,
              url: require("../../../assets/imgs/discover-goods/y1.png")
            }
          ]
        }
      ]
    };
  },
  watch: {
    outerIndex() {
      let bgImg = document.querySelector(".container" + this.outerIndex);
      this.innerSwiperOption.on.slideChangeTransitionEnd();
      // console.log(this.$refs[`innerSwiper${this.outerIndex}`]);
      bgImg.style.backgroundPosition = `${this.bgPosition}px`;
    },
    innerIndex() {
      let bgImg = document.querySelector(".container" + this.outerIndex);
      bgImg.style.backgroundPosition = `${this.bgPosition}px`;
    }
  },
  computed: {
    bgPosition() {
      return this.seriesList[this.outerIndex].goodsList[this.innerIndex]
        .position;
    }
  },
  methods: {
    initBgPosition() {
      let bgImg = document.querySelector(".container" + this.outerIndex);
      bgImg.style.backgroundPosition = `${this.bgPosition}px`;
    }
  },
  created() {},
  mounted() {
    this.initBgPosition();
  }
};
</script>
<style lang="scss" scoped>
.goods-main {
  width: 100%;
  height: 100%;
  .outerSwiper {
    width: 100%;
    height: 100%;
  }
  .bgImg {
    position: relative;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;
  }
  .container {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.8 all;
    // background-position: -40px 0px;
    // background-position: center;
    z-index: 888;
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
      right: 0px;
      bottom: 90px;
      width: 330px;
      height: 120px;
      .goods-item {
        width: 250px;
        height: 120px;
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

