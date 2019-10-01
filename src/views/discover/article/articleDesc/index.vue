<template>
  <div class="articleDesc-main">
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
              <div class="goodsName">莲花吊灯</div>
              <div class="en-text">by MacMaster</div>
              <div class="color">
                <div class="dot d1"></div>
                <div class="dot d2"></div>
                <div class="dot d3"></div>
              </div>
            </div>
            <div class="price">¥560</div>
          </div>
          <div class="center-box">
            <div class="detail-title">手工雕刻 材质细腻</div>
            <div
              class="detail-text text1"
            >由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。</div>
          </div>
          <div class="bottom-box">
            <img class="detailImg" src="../../../../assets/imgs/discover-article/x2.png" alt />
            <div
              class="detail-text text2"
            >由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。</div>
          </div>
        </div>
        <div class="footer">
          <div class="footerImg"></div>
          <div class="footer-bar">
            <div class="zan">781</div>
            <div class="collect">423</div>
            <div class="comment">1023</div>
          </div>
        </div>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "ArticleDesc",
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
.articleDesc-main {
  height: 100%;
  background-color: #fff;
  .topImg {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 0 0 0 60px;
    background: url("../../../../assets/imgs/discover-article/x1.png") no-repeat
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
      background: #354e44 url("../../../../assets/imgs/icons/ax.png") no-repeat
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
    .bottom-box {
      width: 100%;
      overflow: hidden;
      .detailImg {
        float: left;
        width: 160px;
        box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.08);
      }
      .detail-text.text2 {
        padding-left: 180px;
        font-size: 14px;
        text-align: left;
        text-indent: 2em;
        line-height: 18px;
        color: #8a8a8a;
        letter-spacing: 1px;
        font-family: PingFangSC-Regular;
      }
    }
  }
  .footer {
    width: 100%;
    margin: 20px 0;
    .footerImg {
      width: 100%;
      height: 200px;
      margin-bottom: 30px;
      background: url("../../../../assets/imgs/discover-article/x3.png")
        no-repeat center / cover;
    }
    .footer-bar {
      height: 40px;
      width: 100%;
      font-size: 14px;
      line-height: 40px;
      text-align: left;
      color: #3e3e3e;
      letter-spacing: 1px;
      font-family: PingFangSC-Semibold;
      .comment {
        float: right;
        width: 70px;
        height: 100%;
        margin-left: 10px;
        background: url("../../../../assets/imgs/icons/pl.png") no-repeat right
          center / 20px;
      }
      .collect {
        float: right;
        width: 60px;
        height: 100%;
        margin-left: 20px;
        background: url("../../../../assets/imgs/icons/sc-c.png") no-repeat
          right center / 20px;
      }
      .zan {
        float: right;
        width: 60px;
        height: 100%;
        margin: 0 20px;
        background: url("../../../../assets/imgs/icons/dzz.png") no-repeat right
          center / 20px;
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