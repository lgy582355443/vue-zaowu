<template>
  <div class="shop" @click.stop="close" v-show="isShow">
    <div class="car" @click.stop>
      <div class="top">
        <div class="img" :style="`background-image:url(${goodsDetail.url})`"></div>
        <div class="title">{{goodsDetail.title}}</div>
        <div class="inventory">库存:{{goodsDetail.inventory}}</div>
        <div class="closeBtn" @click.stop="close"></div>
      </div>
      <div class="category">
        <div class="title">颜色分类</div>
        <div class="classBox color-list">
          <div
            class="class-item color-item"
            v-for="item in goodsDetail.colorList"
            :key="item.id"
          >{{item.colorName}}</div>
        </div>
        <div class="title">特色服务</div>
        <div class="classBox feature">
          <div class="class-item feature-item">送货上门&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【商家赠送】</div>
          <div class="class-item feature-item">上门安装&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【商家赠送】</div>
        </div>
      </div>
      <div class="carFooter">
        <div class="buy">
          购买数量
          <div class="increase">
            <div class="sign reduce"></div>
            <div class="addNumber">2</div>
            <div class="sign plus"></div>
          </div>
        </div>
        <div class="btn" @click.stop="close">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop",
  components: {},
  props: ["isShow"],
  data() {
    return {
      goodsDetail: {
        title: "Valley 单人沙发",
        inventory: 1028,
        url: require("../assets/imgs/class-car/yizi.png"),
        colorList: [
          {
            id: 11,
            colorName: "经典款【橘黄色】"
          },
          {
            id: 12,
            colorName: "豪华款【暗夜绿】"
          },
          {
            id: 13,
            colorName: "经典款【茶棕色】"
          }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    close(){
      this.$emit('update:isShow', false);
    }
  },
  
};
</script>
<style lang="scss" scoped>
.shop {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  .car {
    box-sizing: border-box;
    padding: 10px 10px 20px 20px;
    width: 300px;
    height: 460px;
    background-color: #fff;
    border-radius: 20px;
    .top {
      position: relative;
      width: 100%;
      height: 70px;
      text-align: left;
      .img {
        position: absolute;
        left: 0;
        top: -30px;
        width: 90px;
        height: 90px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 8px 12px 0 rgba(70, 70, 70, 0.2);
      }
      .title {
        margin-left: 100px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        font-weight: bold;
        color: #3e3e3e;
      }
      .inventory {
        margin-left: 100px;
        margin-top: 10px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #b0b0b0;
      }
      .closeBtn {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background: url("../assets/imgs/icons/dx.png") no-repeat center / 20px;
      }
    }
    .category {
      overflow: auto;
      width: 100%;
      height: 260px;
      text-align: left;
      .title {
        margin: 10px 0;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        font-weight: bold;
        color: #3e3e3e;
        letter-spacing: 1px;
      }
      .classBox {
        width: 100%;
        overflow: hidden;
        .class-item {
          float: left;
          padding: 5px 10px;
          margin: 5px;
          background-color: rgb(224, 224, 224);
          border-radius: 5px;
        }
      }
    }
    .carFooter {
      width: 100%;
      padding: 20px 0;
      border-top: 1px solid rgb(233, 231, 231);
      .buy {
        width: 100%;
        font-family: PingFangSC-Semibold;
        text-align: left;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #3e3e3e;
        overflow: hidden;
        .increase {
          float: right;
          width: 100px;
          height: 20px;
          .sign {
            float: left;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #f1ece7;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            &.reduce {
              background-image: url("../assets/imgs/icons/jianhao.png");
            }
            &.plus {
              background-image: url("../assets/imgs/icons/jiahao.png");
            }
          }
          .addNumber {
            float: left;
            width: 30px;
            height: 20px;
            margin: 0 10px;
            border-radius: 7px;
            text-align: center;
            line-height: 20px;
            background-color: #f1ece7;
          }
        }
      }
    }
    .btn {
      width: 100px;
      height: 40px;
      margin: 20px auto 0;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      color: white;
      background: #354e44;
      border-radius: 7px;
    }
  }
}
</style>