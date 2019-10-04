<template>
  <div class="sales-main">
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <div class="product-list">
          <div class="product-item" v-for="item in productList" :key="item.id">
            <router-link  class="pro-img" :to="{name:'classDetails'}" tag="div" :style="`background-image:url(${item.url})`"></router-link>
            <div class="detail">
              <div class="title">{{item.title}}</div>
              <div class="collect">{{item.people}}人收藏</div>
              <span class="price">¥{{item.price}}</span>
              <span class="city">{{item.city}}</span>
            </div>
          </div>
        </div>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Sales-main",
  components: {
    baselayer
  },
  data() {
    return {
      productList: [
        {
          id: 11,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/sofa.png")
        },
        {
          id: 12,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/shimu.png")
        },
        {
          id: 13,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/geduan.png")
        },
        {
          id: 14,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/table.png")
        },
        {
          id: 15,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/chaji.png")
        },
        {
          id: 16,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/chugui.png")
        },
        {
          id: 17,
          title: "Valley 单人沙发发的富士达范德萨发大水发射点发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/xiuxian.png")
        },
        {
          id: 18,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/drmuyi.png")
        },
        {
          id: 19,
          title: "Valley 单人沙发",
          people: 1425,
          price: 560,
          city: "佛山",
          url: require("../../../../assets/imgs/class-furniture/shugui.png")
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.sales-main {
  height: calc(100% - 63px);
  width: 100%;
  margin-top: 63px;
  background-color: #f1ece7;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  .product-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    flex-wrap: wrap;
    .product-item {
      width: 160px;
      margin: 20px 0;
      border-radius: 10px;
      .pro-img {
        width: 160px;
        height: 120px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      .detail {
        box-sizing: border-box;
        padding: 15px 10px 10px;
        width: 100%;
        height: 95px;
        text-align: left;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
        .title {
          width: 100%;
          height: 20px;
          font-family: PingFangSC-Semibold;
          font-size: 13px;
          color: #3e3e3e;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .collect {
          margin: 10px 0;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #8d8d8d;
        }
        .price {
          float: left;
          font-family: PingFangSC-Semibold;
          font-size: 14px;
          color: #3e3e3e;
        }
        .city {
          float: right;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #3e3e3e;
        }
      }
    }
  }
  .product-item:last-child {
    align-self: flex-start;
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
        padding: 20px 0 20px;
      }
    }
  }
}
</style>