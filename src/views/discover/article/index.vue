<template>
  <div class="article-main">
    <BaseLayer>
      <template v-slot:default>
        <p style="font-size: 50px;">精选文章</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </template>
    </BaseLayer>
  </div>
</template>
<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Article",
  components: {
    BaseLayer
  },
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
.article-main {
  height: 100%;
  //修改全局组件样式
}
::v-deep .baseLayer-main {
  height: 100%;
  .header-bar {
    display: none;
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
    .scroll-content {
      padding: 40px 0 60px;
      overflow: hidden;
    }
  }
}
ul {
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  li {
    width: 100%;
    height: 200px;
    margin: 20px 0;
    background-color: orange;
  }
}
</style>