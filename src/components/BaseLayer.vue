<template>
  <div class="baseLayer-main">
    <!-- 头部 -->
    <div class="header-bar">
      <slot name="header"></slot>
    </div>
    <div class="scroll-wapper" ref="wrapper">
      <div class="scroll-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>



<script>
import BScroll from "@better-scroll/core";

export default {
  name: "BaseLayer",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>

<style lang='scss' scoped>
.baseLayer-main {
  height: 100%;
  .header-bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: #354e44;
    z-index: 999;
  }
  .scroll-wapper {
    height: 100%;
    overflow: hidden;
  }
}
</style>
