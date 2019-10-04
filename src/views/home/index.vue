<template>
  <div class="home-main">
    <div class="header">
      <div class="icon message"></div>
      <div class="titel-box">
        <router-link class="title-item" :to="{name:'recommend'}" tag="div">
          推荐
          <div class="line"></div>
        </router-link>
        <router-link class="title-item" :to="{name:'brand'}" tag="div">
          品牌
          <div class="line"></div>
        </router-link>
      </div>
      <div class="icon-right">
        <router-link class="icon sou" :to="{name:'search'}" tag="div"></router-link>
        <router-link class="icon car" :to="{name:'car'}" tag="div"></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.home-main {
  height: 100%;
  position: relative;
  .header {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    z-index: 999;
    .icon {
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      padding: 5px;
      background-position: center;
      &.message {
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../../assets/imgs/icons/xx.png);
      }
      &.sou {
        background-image: url(../../assets/imgs/icons/ss.png);
      }
      &.car {
        background-image: url(../../assets/imgs/icons/car.png);
      }
    }
    .icon-right {
      position: absolute;
      top: 0;
      right: 0;
      .icon {
        float: left;
      }
    }
    .titel-box {
      display: flex;
      width: 150px;
      height: 100%;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .title-item {
        box-sizing: border-box;
        height: 100%;
        padding: 10px 10px 0;
        font-size: 16px;
        color: white;
        .line {
          display: none;
          width: 30px;
          height: 3px;
          margin-top: 8px;
          background-color: #fff;
          border-radius: 1.5px;
        }
        &.router-link-active .line {
          display: block;
        }
      }
    }
  }
}
</style>