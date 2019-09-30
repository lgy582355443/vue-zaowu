<template>
  <div class="footer-main">
    <div class="footer">
      <router-link class="footer-icon icon-home" :to="{name:'home'}" tag="div"><p class="footer-title">首页</p></router-link>
      <router-link class="footer-icon icon-classify" :to="{name:'classify'}" tag="div"><p class="footer-title">发现</p></router-link>
      <router-link class="footer-icon icon-discover" :to="{name:'discover'}" tag="div"><p class="footer-title">分类</p></router-link>
      <router-link class="footer-icon icon-user" :to="{name:'user'}" tag="div"><p class="footer-title">我的</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },

  methods: {

  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.footer-main {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 999;
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .footer-icon {
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-position:top center;
      background-size: 28px 28px;
      margin-top:10px; 
      .footer-title{
          margin-top:33px;
          color: $littleBaseColor;
      }
      &.router-link-active .footer-title{
          color: $topBarColor;
      }
      &.icon-home {
        background-image: url("../assets/imgs/icons/home.png");
      }
      &.icon-home.router-link-active {
        background-image: url("../assets/imgs/icons/home-c.png");
      }
      &.icon-classify {
        background-image: url("../assets/imgs/icons/fl.png");
      }
      &.icon-classify.router-link-active {
        background-image: url("../assets/imgs/icons/fl-c.png");
      }
      &.icon-discover {
        background-image: url("../assets/imgs/icons/fx.png");
      }
      &.icon-discover.router-link-active {
        background-image: url("../assets/imgs/icons/fx-c.png");
      }
      &.icon-user {
        background-image: url("../assets/imgs/icons/my.png");
      }
      &.icon-user.router-link-active {
        background-image: url("../assets/imgs/icons/my-c.png");
      }
    }
  }
}
</style>
