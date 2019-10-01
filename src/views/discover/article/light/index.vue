<template>
  <div class="light-main">
    <div class="article-list">
      <div class="article-item" v-for="item in articleList" :key="item.id">
        <router-link
          class="img"
          :to="{name:'articleDesc'}"
          tag="div"
          :style="`background-image:url(${item.url})`"
        >
          <div class="goods-title">
            <div class="ch-text">{{item.title}}</div>
            <div class="en-text">{{item.enText}}</div>
          </div>
        </router-link>
        <div class="bottom-bar">
          <div class="number">{{item.pageViwe}}</div>
          <div class="right-bar">
            <div class="zan"></div>
            <div class="share"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Light",
  components: {},
  props: {},
  data() {
    return {
      articleList: [
        {
          id: 10,
          url: require("@/assets/imgs/discover-article/l1.png"),
          title: "莲花吊灯",
          enText: "Lotus droplight",
          pageViwe: 6851
        },
        {
          id: 11,
          url: require("@/assets/imgs/discover-article/l2.png"),
          title: "现代极简吊灯",
          enText: "The minimalist",
          pageViwe: 17281
        },
        {
          id: 12,
          url: require("@/assets/imgs/discover-article/l3.png"),
          title: "现代极简吊灯",
          enText: "The minimalist",
          pageViwe: 8812
        },
        {
          id: 13,
          url: require("@/assets/imgs/discover-article/l4.png"),
          title: "中世纪吊灯",
          enText: "Medieval chandelier",
          pageViwe: 7851
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
.light-main {
  width: 100%;
  .article-list {
    width: 330px;
    margin: 20px auto;
    .article-item {
      margin-bottom: 20px;
      border-radius: 12px;
      box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.08);
      .img {
        width: 100%;
        height: 190px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        .goods-title {
          padding: 120px 0 0 10px;
          text-align: left;
          .ch-text {
            margin-bottom: 10px;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: 2px;
            font-family: PingFangSC-Semibold;
          }
          .en-text {
            font-size: 14px;
            color: #fff;
            letter-spacing: 1px;
            font-family: PingFangSC-Regular;
          }
        }
      }
      .bottom-bar {
        width: 100%;
        height: 40px;
        border-radius: 0 0 12px 12px;
        background-color: #fff;
        .number {
          float: left;
          width: 120px;
          height: 100%;
          font-size: 13px;
          text-align: left;
          text-indent: 55px;
          line-height: 40px;
          color: #3e3e3e;
          font-family: PingFangSC-Regular;
          background: url("../../../../assets/imgs/icons/yj.png") no-repeat 20px
            center / 25px;
        }
        .right-bar {
          float: right;
          width: 80px;
          height: 100%;
          margin-right: 20px;
          .zan {
            float: left;
            width: 30px;
            height: 100%;
            margin-right: 15px;
            background: url("../../../../assets/imgs/icons/dzz.png") no-repeat
              center / 20px;
          }
          .share {
            float: left;
            width: 30px;
            height: 100%;
            background: url("../../../../assets/imgs/icons/zf-c.png") no-repeat
              center / 20px;
          }
        }
      }
    }
  }
}
</style>