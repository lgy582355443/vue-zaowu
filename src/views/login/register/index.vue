<template>
  <div class="register-main">
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <div class="title">注册</div>
        <div class="phoneNumber">
          <div class="prefix">
            +86
            <div class="line"></div>
          </div>
          <input class="phone-input" type="text" placeholder="请输入手机号/邮箱" />
        </div>
        <div class="submit">获取短信验证码</div>
        <div class="userText">
          完成注册即代表同意
          <span class="green">用户协议</span>和
          <span class="green">隐私政策</span>
        </div>
        <router-link class="goLogin" :to="{name:'login'}" tag="div">已有账号 去登录</router-link>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Register",
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
.register-main {
  height: 100%;
  .title {
    width: 270px;
    margin: 50px auto 40px;
    font-size: 30px;
    font-weight: bold;
    color: #354e44;
    text-align: left;
    font-family: PingFangSC-Semibold;
  }
  .phoneNumber {
    position: relative;
    width: 270px;
    height: 40px;
    margin: 0 auto;
    .phone-input {
      display: block;
      width: 100%;
      height: 100%;
      text-indent: 60px;
      border: none;
      outline: none;
      border-radius: 7px;
      background-color: #e3dfda;
      &::placeholder {
        font-size: 12px;
        color: #9f9f9f;
        font-family: DFPYuanW3;
      }
    }
    .prefix {
      position: absolute;
      left: 0;
      top: 1px;
      width: 50px;
      height: 40px;
      text-align: left;
      text-indent: 10px;
      line-height: 40px;
      border-radius: 7px 0 0 7px;
      background: #e3dfda url(../../../assets/imgs/icons/xsjx.png) no-repeat
        35px center / 10px 10px;
      .line {
        float: right;
        width: 2.5px;
        height: 14px;
        margin-top: 13px;
        background-color: rgb(143, 143, 143);
      }
    }
  }
  .submit {
    width: 270px;
    height: 40px;
    margin: 30px auto 10px;
    font-size: 16px;
    line-height: 40px;
    color: #ffffff;
    background: #354e44;
    border-radius: 7px;
    letter-spacing: 3px;
    font-family: PingFangSC-Semibold;
  }
  .userText {
    font-size: 13px;
    color: #a5a5a5;
    font-family: PingFangSC-Regular;
    .green {
      color: #3b554a;
      font-family: PingFangSC-Regular;
    }
  }
  .goLogin {
    width: 270px;
    margin: 70px auto 0; 
    padding-right:40px;
    font-size: 16px;
    font-weight: bolder;
    color: #354e44;
    font-family: PingFangSC-Regular;
    background: url(../../../assets/imgs/icons/ysjx.png) no-repeat 200px center /15px 15px;
  }
  ::v-deep .baseLayer-main {
    height: 100%;
    .header-bar {
      display: none;
    }
    .scroll-wapper {
      height: 100%;
      overflow: hidden;
      .scroll-content {
        padding: 0;
        overflow: hidden;
      }
    }
  }
}
</style>