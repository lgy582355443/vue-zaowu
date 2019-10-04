<template>
  <div class="reative-main">
    <div class="header">
      <div class="gobick" @click='$router.go(-1)'></div>
      <div class="title">创意家具</div>
      <div class="nav-list">
        <router-link class="nav-item news" tag="div" :to="{name:'news'}">新品</router-link>
        <router-link class="nav-item sales" tag="div" :to="{name:'sales'}">销量</router-link>
        <router-link class="nav-item price" tag="div" :to="{name:'price'}">价格</router-link>
        <router-link class="nav-item screen" tag="div" :to="{name:'screen'}">筛选</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Reative-main",
  components: {},
  data() {
    return {};
  }
  // beforeRouteUpdate(to, from, next) {
  //   // 重新计算baseSroll
  //   setTimeout(() => {
  //     this.$refs.baseLayer.$scroll.refresh();
  //   }, 100);
  //   next();
  // }
};
</script>

<style lang='scss' scoped>
.reative-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #354e44;
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 63px;
    background-color: #354e44;
    .gobick {
      position: absolute;
      left: 20px;
      top: 0;
      width: 20px;
      height: 40px;
      background: url("../../../assets/imgs/icons/arr-L.png") no-repeat
        center/20px;
    }
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #ffffff;
    }
    .nav-list {
      display: flex;
      width: 100%;
      height: 23px;
      justify-content: space-around;
      align-items: center;
      .nav-item {
        float: left;
        // width: 40px;
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #ffffff;
        &::after {
          content: "";
          display: block;
          width: 30px;
          height: 4px;
          margin-top: 5px;
          border-radius: 4px 4px 0 0;
          background-color: #fff;
          opacity: 0;
        }
        &.router-link-active::after  {
          opacity: 1;
        }
      }
    }
  }
}
</style>