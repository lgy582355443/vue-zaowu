<template>
  <div class="discover-main">
    <div class="discover-header">
      <div class="title-box">
        <router-link class="title-item article-title" :to="{name:'article'}" tag="div">
          精选好文
          <div class="line"></div>
        </router-link>
        <router-link class="title-item goods-title" :to="{name:'goods'}" tag="div">
          好物推荐
          <div class="line"></div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Discovuer",
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
.discover-main {
  height: 100%;
  background: #354e44;
  overflow: hidden;
  .discover-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    z-index: 999;
    .title-box {
      display: flex;
      width: 100%;
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
          margin: 8px 0 0 30px;
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