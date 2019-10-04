<template>
  <div class="recommend-main">
    <baseLayer ref="baseLayer">
      <template v-slot:default>
        <div class="banner">
          <swiper class="banner-swiper" :options="bannerSwiperOption" ref="mySwiper">
            <swiper-slide v-for="item in bannerList" :key="item.id">
              <img class="banner-img" :src="item.url" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="container">
          <div class="title">
            <div class="t-left">品类推荐</div>
            <div class="t-right">更多</div>
          </div>
          <div class="brand-box">
            <swiper class="brand-swiper" :options="brandSwiperOption" ref="brandSwiper">
              <swiper-slide v-for="item in brandList" :key="item.id">
                <div class="brand-item">
                  <div class="img-show">
                    <div class="bg-w"></div>
                    <div class="pro-img" :style="`background-image: url(${item.url});`"></div>
                  </div>
                  <div class="series-title">
                    <div class="ch-text">{{item.title}}</div>
                    <div class="en-text">{{item.enText}}</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="title">
            <div class="t-left">特色优选</div>
            <div class="t-right">更多</div>
          </div>
          <div class="feature">
            <swiper class="feature-swiper" :options="featureSwiperOption" ref="featureSwiper">
              <swiper-slide v-for="item in featureList" :key="item.id">
                <div class="feature-item">
                  <div class="imgs" :style="`background-image: url(${item.url});`"></div>
                  <div class="detail">
                    <div class="pro-title">{{item.title}}</div>
                    <div class="en-text">{{item.enText}}</div>
                    <div class="color">
                      <div class="dot d1"></div>
                      <div class="dot d2"></div>
                      <div class="dot d3"></div>
                    </div>
                    <div class="desc">{{item.desc}}</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </template>
    </baseLayer>
  </div>
</template>

<script>
import baseLayer from "@/components/BaseLayer";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Recommend",
  components: {
    baseLayer,
    swiper,
    swiperSlide
  },
  props: {},
  data() {
    return {
      bannerSwiperOption: {
        autoplay: true,
        // slidesPerView: 1.2,
        // spaceBetween: 10,
        // centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      brandSwiperOption: {
        autoplay: false,
        // slidesPerView: "auto",
        slidesPerView: 3,
        // spaceBetween: 10,
        // centeredSlides: true,
        loop: false
      },
      featureSwiperOption: {
        autoplay: false,
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: false
      },
      bannerList: [
        {
          id: 0,
          url: require("@/assets/imgs/home-recommend/banner1.png")
        },
        {
          id: 1,
          url: require("@/assets/imgs/home-recommend/banner2.png")
        }
      ],
      brandList: [
        {
          id: 11,
          title: "沙发系列",
          enText: "by Adrianne",
          url: require("@/assets/imgs/home-recommend/sf.png")
        },
        {
          id: 12,
          title: "木质系列",
          enText: "by Hanna",
          url: require("@/assets/imgs/home-recommend/yz.png")
        },
        {
          id: 13,
          title: "创意系列",
          enText: "by adais",
          url: require("@/assets/imgs/home-recommend/cy.png")
        }
      ],
      featureList: [
        {
          id: 21,
          title: "现代极简吊灯",
          enText: "by Adrianne Ho",
          desc: "切割平整圆滑，运用漫反…",
          url: require("@/assets/imgs/home-recommend/tsyx1.png")
        },
        {
          id: 22,
          title: "创意台灯",
          enText: "by Adrianne Ho",
          desc: "切割平整圆滑，运用漫反…",
          url: require("@/assets/imgs/home-recommend/tsyx2.png")
        },
        {
          id: 23,
          title: "清新瓶子",
          enText: "by Adrianne Ho",
          desc: "切割平整圆滑，运用漫反…",
          url: require("@/assets/imgs/home-recommend/tsyx3.png")
        }
      ]
    };
  },
  created() {},
  mounted() {
    // 重新计算baseSroll
    setTimeout(() => {
      this.$refs.baseLayer.$scroll.refresh();
    }, 100);
  },
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.recommend-main {
  height: 100%;
  .banner {
    width: 100%;
    // height: 280px;
    .banner-img {
      display: block;
      width: 100%;
    }
    .swiper-pagination {
      // position: static;
      margin: 20px auto;
      ::v-deep .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #f8f8f8;
        border-radius: 50%;
        margin: 0 4px;
        transition: all ease 0.4s;
        &.swiper-pagination-bullet-active {
          background-color: #fff;
        }
      }
    }
  }
  .container {
    .title {
      display: flex;
      width: 100%;
      padding: 20px 0;
      justify-content: space-between;
      align-items: center;
      .t-left {
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
      }
      .t-right {
        padding: 0 20px;
        margin: 0 10px 0 0;
        font-size: 13px;
        color: #8c8c8c;
        background: url(../../../assets/imgs/icons/yjt.png) no-repeat right;
      }
    }
    .brand-box {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      // ::v-deep .swiper-slide {
      //   width: 100px;
      //   height: 140px;
      // }
      .brand-item {
        position: relative;
        width: 100px;
        height: 140px;
        .img-show {
          width: 100%;
          .bg-w {
            width: 100px;
            height: 70px;
            border-radius: 10px;
            box-shadow: 0 4px 12px 0 rgba(122, 98, 75, 0.06);
            background-color: #fff;
          }
          .pro-img {
            position: absolute;
            left: 18px;
            top: 30px;
            width: 65px;
            height: 65px;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-size: contain;
          }
        }
        .series-title {
          margin-top: 35px;
          .ch-text {
            font-size: 13px;
            font-family: PingFangSC-Regular;
            color: #3e3e3e;
          }
          .en-text {
            margin-top: 5px;
            font-size: 10px;
            color: #b0b0b0;
            font-family: PingFangSC-Regular;
          }
        }
      }
    }
    .feature {
      width: 100%;
      .feature-item {
        position: relative;
        width: 300px;
        // height: 160px;
        overflow: hidden;
        .imgs {
          position: absolute;
          left: 10px;
          top: 0;
          width: 150px;
          height: 180px;
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .detail {
          box-sizing: border-box;
          width: 300px;
          height: 130px;
          padding: 20px 10px 20px 150px;
          margin-top: 50px;
          border-radius: 10px;
          box-shadow: 0 8px 24px 0 rgba(122, 98, 75, 0.12);
          text-align: left;
          background-color: #fff;
          .pro-title {
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            font-weight: bold;
            color: #3e3e3e;
          }
          .en-text {
            font-family: PingFangSC-Regular;
            font-size: 9px;
            margin-top: 5px;
            color: #b0b0b0;
          }
          .desc {
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #3e3e3e;
          }
          .color {
            margin: 10px 0 15px;
            .dot {
              display: inline-block;
              width: 10px;
              height: 10px;
              margin: 0 5px;
              border-radius: 50%;
              &.d1 {
                background-color: #446675;
              }
              &.d2 {
                background-color: #6a4826;
              }
              &.d3 {
                background-color: #e7d8bb;
              }
            }
          }
        }
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
        padding: 0 0 80px;
        overflow: hidden;
      }
    }
  }
}
</style>