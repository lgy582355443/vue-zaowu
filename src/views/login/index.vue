<template>
  <div class="login-main">
    <baselayer ref="baseLayer">
      <template v-slot:default>
        <div class="container">
          <img class="head-photo" src="../../assets/imgs/home-brand/logo.png" alt />
          <div class="login-form">
            <input
              class="login-input userId"
              type="text"
              v-model="login.userId"
              placeholder="请输入手机号/邮箱"
            />
            <input
              class="login-input userPassword"
              type="password"
              v-model="login.password"
              placeholder="请输入密码"
            />
            <div class="icon eye"></div>
            <div class="login-btn">登录</div>
            <div class="guide">
              <div class="guide-item">海外手机登录</div>
              <div class="guide-item">忘记密码</div>
            </div>
          </div>
          <router-link class="register" :to="{name:'register'}" tag="div">立即注册</router-link>
          <div class="third">
            <div class="line"></div>第三方登录
            <div class="line"></div>
          </div>
          <div class="icon-list">
            <div class="icon-item qq"></div>
            <div class="icon-item wb"></div>
            <div class="icon-item wx"></div>
          </div>
        </div>
      </template>
    </baselayer>
  </div>
</template>

<script>
import baselayer from "@/components/BaseLayer";
export default {
  name: "Login",
  components: {
    baselayer
  },
  props: {},
  data() {
    return {
      login: {
        userId: "",
        password: ""
      }
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
.login-main {
  height: 100%;
  .container {
    width: 100%;
    .head-photo {
      display: block;
      width: 100px;
      height: 100px;
      margin: 50px auto 70px;
      border-radius: 50%;
    }
    .login-form {
      position: relative;
      width: 100%;
      overflow: hidden;
      .login-input {
        display: block;
        width: 260px;
        height: 40px;
        margin: 20px auto;
        text-indent: 30px;
        background: #e3dfda;
        border: none;
        outline: none;
        border-radius: 7px;
        &::placeholder {
          font-family: DFPYuanW3;
          font-size: 12px;
          color: #9f9f9f;
        }
        &.userId {
          background: #e3dfda url("../../assets/imgs/icons/@.png") no-repeat 5px
            center / 20px 20px;
        }
        &.userPassword {
          background: #e3dfda url("../../assets/imgs/icons/mm.png") no-repeat
            5px center / 20px 20px;
        }
      }
      .eye {
        position: absolute;
        right: 65px;
        top: 88px;
        width: 30px;
        height: 30px;
        background: #e3dfda url("../../assets/imgs/icons/by.png") no-repeat
          center / 25px;
      }
      .login-btn {
        width: 260px;
        height: 40px;
        margin: 0 auto;
        font-size: 15px;
        line-height: 40px;
        letter-spacing: 5px;
        background: #354e44;
        border-radius: 7px;
        color: white;
        font-family: PingFangSC-Semibold;
      }
      .guide {
        display: flex;
        width: 260px;
        margin: 10px auto;
        justify-content: space-between;
        align-items: center;
        .guide-item {
          font-size: 12px;
          color: #a5a5a5;
          font-family: PingFangSC-Regular;
        }
      }
    }
    .register {
      margin-top: 80px;
      font-size: 20px;
      font-weight: bold;
      color: #354e44;
      font-family: PingFangSC-Semibold;
    }
    .third {
      display: flex;
      margin: 20px 0;
      height: 20px;
      font-size: 12px;
      color: #a5a5a5;
      font-family: PingFangSC-Regular;
      justify-content: center;
      align-items: center;
      .line {
        width: 50px;
        height: 1px;
        margin: 30px;
        background-color: #dddddd;
      }
    }
    .icon-list{
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-item{
            width: 30px;
            height: 30px;
            margin: 0 15px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            &.qq{
                background-image: url(../../assets/imgs/icons/QQ.png);
            }
            &.wb{
                background-image: url(../../assets/imgs/icons/wb.png);
            }
            &.wx{
                background-image: url(../../assets/imgs/icons/wx.png);
            }
        }
    }
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