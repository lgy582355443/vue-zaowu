<template>
  <div class="home-main">
    <h1>这是HOME</h1>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swp-item">I'm Slide 1</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 2</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 3</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 4</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 5</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 6</swiper-slide>
      <swiper-slide class="swp-item">I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  props: {},
  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
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
@import "@/assets/css/common/common.scss";
.swp-item{
  width: 100%;
  height: 200px;
  background-color: orange;
  font-size: 20px;
  color: white;
}
</style>