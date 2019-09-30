<template>
  <div class="discover-main">
    <div class="header">
      <router-link class="title article-title" :to="{name:'article'}" tag="div">精选好文</router-link>
      <router-link class="title goods-title" :to="{name:'goods'}" tag="div">好物推荐</router-link>
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
@import "@/assets/css/common/common.scss";
.discover-main {
  height: 100%;
  .header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: $topBarColor;
    justify-content: center;
    align-items: center;
    z-index: 999;
    .title {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: white;
      margin: 0 10px;
      &::after {
        content: "";
        display: block;
        text-align: right;
        width: 40px;
        height: 3px;
        margin: 5px 0 0 20px;
        border-radius: 1.5px;
        background-color: #fff;
        opacity: 0;
      }
      &.router-link-active::after {
        opacity: 1;
      }
    }
  }
}
</style>