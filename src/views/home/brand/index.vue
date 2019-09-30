<template>
  <div class="brand-main">
    <div class="header-bg"></div>
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <ul class="brand-list">
          <li class="brand-item" v-for="item in brandList" :key="item.id">
            <img class="brand-img" :src="item.url" alt />
            <div class="detail">
              <div class="dot"></div>
              <div
                class="designer"
                v-for="(man,index) in item.designer"
                :key="man.id"
                :style="`background-image: url(${man.designerUrl});right:${index*25+30}px`"
              ></div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </li>
        </ul>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Brand",
  components: {
    baselayer
  },
  props: {},
  data() {
    return {
      brandList: [
        {
          id: 0,
          url: require("@/assets/imgs/home-brand/pp1.png"),
          designer: [
            {
              id: 11,
              designerUrl: require("@/assets/imgs/home-brand/tx1.png")
            },
            {
              id: 12,
              designerUrl: require("@/assets/imgs/home-brand/tx2.png")
            },
            {
              id: 13,
              designerUrl: require("@/assets/imgs/home-brand/ty3.png")
            }
          ],
          title: "Hartford 系列—休闲椅",
          desc: "一把有温度的好椅子，让回家的你忘却都…"
        },
        {
          id: 1,
          url: require("@/assets/imgs/home-brand/pp2.png"),
          designer: [
            {
              id: 14,
              designerUrl: require("@/assets/imgs/home-brand/tx4.png")
            },
            {
              id: 15,
              designerUrl: require("@/assets/imgs/home-brand/tx5.png")
            }
          ],
          title: "Manor 创意—现代橱柜",
          desc: "一把有温度的好椅子，让回家的你忘却都…"
        },
        {
          id: 2,
          url: require("@/assets/imgs/home-brand/pp3.png"),
          designer: [
            {
              id: 17,
              designerUrl: require("@/assets/imgs/home-brand/ty1.png")
            },
            {
              id: 18,
              designerUrl: require("@/assets/imgs/home-brand/ty2.png")
            },
            {
              id: 19,
              designerUrl: require("@/assets/imgs/home-brand/ty4.png")
            }
          ],
          title: "Lauren 现代感—极简吊灯",
          desc: "一把有温度的好椅子，让回家的你忘却都…"
        },
        {
          id: 3,
          url: require("@/assets/imgs/home-brand/pp4.png"),
          designer: [
            {
              id: 21,
              designerUrl: require("@/assets/imgs/home-brand/tx4.png")
            },
            {
              id: 22,
              designerUrl: require("@/assets/imgs/home-brand/ty4.png")
            },
            {
              id: 23,
              designerUrl: require("@/assets/imgs/home-brand/ty5.png")
            }
          ],
          title: "品间居品—现代橱柜",
          desc: "一把有温度的好椅子，让回家的你忘却都…"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.brand-main {
  height: 100%;
  .header-bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;
    // background: url(../../../assets/imgs/home-brand/topbg.png) no-repeat center;
    background-color: black;
    border-radius: 0 0 20px 20px;
    background-size: 100% 60px;
    z-index: 998;
  }
  .brand-list {
    width: 330px;
    margin: 0 auto;
    .brand-item {
      width: 100%;
      margin: 20px 0;
      border-radius: 10px;
      box-shadow: 0 4px 10px 0 rgba(122, 98, 75, 0.08);
      .brand-img {
        display: block;
        width: 100%;
        height: 210px;
      }
      .detail {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 30px 10px 20px 20px;
        text-align: left;
        border-radius: 0 0 10px 10px;
        background-color: #fff;
        .dot {
          position: absolute;
          left: 30px;
          top: -10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #354e44;
        }
        .designer {
          position: absolute;
          top: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .title {
          margin: 0 0 10px;
          font-size: 16px;
          color: #3e3e3e;
          font-weight: bold;
          font-family: PingFangSC-Semibold;
        }
        .desc {
          font-size: 11px;
          color: #b1b1b1;
          font-family: PingFangSC-Regular;
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
        padding: 60px 0 80px;
        overflow: hidden;
      }
    }
  }
}
</style>