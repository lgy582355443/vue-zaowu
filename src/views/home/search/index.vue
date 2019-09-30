<template>
  <div class="search-main">
    <baselayer ref="baseLayer">
      <template v-slot:header>
        <div class="header-c">
          <input class="search-input" type="text" v-model="searchVal" />
          <span class="btn cancel" @click="$router.go(-1)">取消</span>
        </div>
      </template>
      <template v-slot:default>
        <div class="container">
          <div class="title">热门搜索</div>
          <div class="hot-list">
            <div class="hot-item" v-for="item in hotSearchList" :key="item.id">
              <div class="icon" :style="`background-image:url(${item.url})`"></div>
              <div class="hot-title">{{item.title}}</div>
            </div>
          </div>
          <div class="title">搜索记录</div>
          <div class="history-list">
            <div class="history-item">椅子</div>
          </div>
        </div>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Search",
  components: {
    baselayer
  },
  props: {},
  data() {
    return {
      searchVal: "",
      hotSearchList: [
        {
          id: "yz",
          title: "椅子",
          url: require("@/assets/imgs/icons/yz.png")
        },
        {
          id: "yg",
          title: "衣柜",
          url: require("@/assets/imgs/icons/yg.png")
        },
        {
          id: "dj",
          title: "灯具",
          url: require("@/assets/imgs/icons/dj.png")
        },
        {
          id: "lpz",
          title: "装饰品",
          url: require("@/assets/imgs/icons/lpz.png")
        },
        {
          id: "zz",
          title: "桌子",
          url: require("@/assets/imgs/icons/zz.png")
        },
        {
          id: "yj",
          title: "衣架",
          url: require("@/assets/imgs/icons/dyj.png")
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    //重新计算baseSroll
    setTimeout(() => {
      this.$refs.baseLayer.$scroll.refresh();
    }, 500);
  }
};
</script>
<style lang="scss" scoped>
.search-main {
  height: 100%;
  .header-c {
    height: 40px;
    .search-input {
      width: 280px;
      height: 30px;
      margin: 5px 0;
      text-indent: 35px;
      border: none;
      outline: none;
      border-radius: 32px;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.05);
      background: #fff url(../../../assets/imgs/icons/ss-b.png) no-repeat 10px
        center / 20px 20px;
    }
    .btn {
      padding: 0 0 0 10px;
      font-size: 14px;
      color: #3e3e3e;
      font-family: PingFangSC-Regular;
    }
  }
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    overflow: hidden;
    .title {
      margin: 20px 0;
      font-size: 16px;
      text-align: left;
      color: #3e3e3e;
      font-family: PingFangSC-Regular;
    }
    .hot-list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-around;
      .hot-item {
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 15px;
        box-shadow: 0 2px 6px 0 rgba(83, 66, 49, 0.08);
        background-color: #fff;
        .icon {
          width: 40px;
          height: 40px;
          margin: 0 auto;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .hot-title {
          margin-top: 10px;
          font-size: 13px;
          font-family: PingFangSC-Regular;
          color: #3e3e3e;
        }
      }
    }
    .history-list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-around;
      .history-item {
        width: 100px;
        padding: 15px 0;
        margin-bottom: 20px;
        box-shadow: 0 2px 6px 0 rgba(83, 66, 49, 0.05);
        border-radius: 7px;
        background-color: #fff;
      }
    }
  }
  ::v-deep .baseLayer-main {
    height: 100%;
    .header-bar {
      background-color: rgba(0, 0, 0, 0);
    }
    .scroll-wapper {
      height: 100%;
      overflow: hidden;
      .scroll-content {
        padding: 40px 0 0;
        overflow: hidden;
      }
    }
  }
}
</style>