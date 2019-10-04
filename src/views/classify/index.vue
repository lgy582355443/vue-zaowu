<template>
  <div class="classify-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <router-link class="message" :to="{name:'home'}" tag="div">
            <img src="../../assets/imgs/icons/xx.png" alt="">
          </router-link>
          <span class="header-end">
            <router-link class="see" :to="{name:'search'}" tag="div">
              <img src="../../assets/imgs/icons/ss.png" alt="">
            </router-link>
            <router-link class="cart" :to="{name:'car'}" tag="div">
              <img src="../../assets/imgs/icons/car.png" alt="">
            </router-link>
          </span>
        </div>
      </template>
      <template v-slot:default>
        <div class="box"></div>
        <router-link class="cores top" tag="ul" to="/classify/reative">
            <li class="origin">
              <h2 class="origin-cn">创意</h2>
              <p class="origin-en">Originality</p>
            </li>
            <img class="imgs" src="../../assets/imgs/classify/originality.png" alt="">
        </router-link>
        <router-link class="cores center" tag="ul" to="/classify/reative">
          <li class="deco">
              <h2 class="deco-cn">装饰品</h2>
              <p class="deco-en">Decorations</p>
            </li>
            <li class="imgs"></li>
        </router-link>
        <ul class="cores end">
          <router-link class="end-l" tag="li" to="/classify/reative">
            <h2 class="style-cn">风格</h2>
            <p class="style-en">Style</p>
          </router-link>
          <router-link class="end-r" tag="li" to="/classify/reative">
            <h2 class="lamp-cn">灯具</h2>
            <p class="lamp-en">The lamp</p>
          </router-link>
        </ul>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from '@/components/BaseLayer'
export default {
name:"Classify",
  components: {
    BaseLayer
  },
  props: {},
  data() {
    return {
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
  .classify-main{
    width: 100%;
    height: 100%;
    background-color: #354E44;
    .header-c{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 90%;
      .header-end{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60px;
        height: 22px;
      }
    }
    .baseLayer-main{
      height: 100%;
      ::v-deep .header-bar{
        height: 40px;
        img{
          display: block;
          width: 21px;
          height: 21px;
        }
      }
    ::v-deep .scroll-wapper {
      position: fixed;
      top: 40px;
      left: 0;
      height: calc(100% - 100px);
      width: 100%;
      background-color: #F1ECE7;
      border-radius:25px 25px 0 0;
      overflow: hidden;
    ::v-deep .scroll-content{
      height: auto;
    }
  }
    }
    .box{
      width: 100%;
      height: 32px;
    }
      .cores{
        margin:0 auto;
        width: 335px;
        height: 151px;
        border-radius: 15px;
      }
      .cores.top{
        display: flex;
        justify-content: space-between;
        // padding-top: 72px;
        background-color: #D5D5D5;
        .origin{
          margin-top: 74px;
          margin-left: 26px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 84px;
          height: 50px;
          .origin-cn{
            font-size: 24px;
            color: #3E3E3E;
          }
          .origin-en{
            color: #7F7F7F;
            font-size: 15px;
          }
        }
        .imgs{
          margin-top: 25px;
          display: block;
          width: 208px;
          height: 126px;
          border-radius: 0 0 15px 0;
        }
      }
      .cores.center{
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        background-color: #FFFFFF;
        .imgs{
          display: block;
          width: 246px;
          height: 151px;
          border-radius: 15px;
          background: url(../../assets/imgs/classify/decorations.png) no-repeat center;
          background-size: 110%;
        }
        .deco{
          margin-top: 74px;
          margin-left: 26px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 84px;
          height: 50px;
          .deco-cn{
            font-size: 24px;
            color: #3E3E3E;
          }
          .deco-en{
            font-size: 15px;
            color: #7F7F7F;
          }
        }
      }
      .cores.end{
        display: flex;
        justify-content: space-between;
        height: 221px;
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        .end-l{
          width: 156px;
          height: 100%;
          background: url(../../assets/imgs/classify/style.png) no-repeat center;
          background-position:bottom;
          background-color: #FAFAFA;
          background-size: 100%;
          border-radius: 15px;
          .style-cn{
            margin-left: -52px;
            margin-top: 140px;
            font-size: 24px;
            color: #3E3E3E;
          }
          .style-en{
            margin-left: -52px;
            margin-top: 6px;
            font-size: 15px;
            color: #7F7F7F;
          }
        }
        .end-r{
          width: 156px;
          height: 100%;
          background: url(../../assets/imgs/classify/lamp.png) no-repeat center;
          background-size: 100%;
          border-radius: 15px;
          .lamp-cn{
            margin-left: -62px;
            margin-top: 140px;
            font-size: 24px;
            color: #3E3E3E;
          }
          .lamp-en{
            margin-left: -52px;
            margin-top: 6px;
            font-size: 15px;
            color: #7F7F7F;
          }
        }
      }
    }
</style>