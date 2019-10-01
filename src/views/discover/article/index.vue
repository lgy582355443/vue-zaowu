<template>
  <baselayer ref="baseLayer">
    <template v-slot:default>
      <div class="article-main">
        <div class="iconLinkList">
          <router-link class="icon-item light" :to="{name:'light'}" tag="div"></router-link>
          <router-link class="icon-item wardrobe" :to="{name:'wardrobe'}" tag="div"></router-link>
          <router-link class="icon-item chair" :to="{name:'chair'}" tag="div"></router-link>
          <router-link class="icon-item decoration" :to="{name:'decoration'}" tag="div"></router-link>
        </div>
        <router-view></router-view>
      </div>
    </template>
  </baselayer>
</template>
<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Article",
  components: {
    baselayer
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
  padding-bottom:80px; 
  background-color: #f1ece7;
  border-radius: 20px;
  .iconLinkList {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    .icon-item {
      width: 45px;
      height: 45px;
      margin: 0 15px;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px;
      background-color: #fff;
      transition: 0.4s all;
      &.light {
        background-image: url(../../../assets/imgs/icons/ld.png);
      }
      &.light.router-link-active {
        box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        transform: scale(1.1);
        background: #354e44 url(../../../assets/imgs/icons/bd.png) no-repeat
          center / 20px;
      }
      &.wardrobe {
        background-image: url(../../../assets/imgs/icons/lyg.png);
      }
      &.wardrobe.router-link-active {
        box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        transform: scale(1.1);
        background: #354e44 url(../../../assets/imgs/icons/bsgz.png) no-repeat
          center / 20px;
      }
      &.chair {
        background-image: url(../../../assets/imgs/icons/lyz.png);
      }
      &.chair.router-link-active {
        box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        transform: scale(1.1);
        background: #354e44 url(../../../assets/imgs/icons/bsyz.png) no-repeat
          center / 20px;
      }
      &.decoration {
        background-image: url(../../../assets/imgs/icons/lpz.png);
      }
      &.decoration.router-link-active {
        box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        transform: scale(1.1);
        background: #354e44 url(../../../assets/imgs/icons/bspz.png) no-repeat
          center / 20px;
      }
    }
  }
}
</style>