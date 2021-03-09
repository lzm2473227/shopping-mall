<template>
  <div class="register-header">
    <div class="header-center">
      <div class="logo-content">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/images/home/logo.png" alt="正品汇logo" />
          </router-link>
          <div class="logo-text">
            <h1>正品汇</h1>
            <div>kaihua.com</div>
          </div>
        </div>
      </div>
      <div>
        <div class="welcome">欢迎注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterHeader",
  data() {
    return {
      // isRegister: '欢迎注册',
      // isLogin: '欢迎登录！',
    };
  },
  methods: {},
  mounted() {
    // this.isRegister = "欢迎登录！"
  },
};
</script>

<style lang="less" scoped>
.header-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 158px;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    width: 220px;
    img {
      height: 88px;
      width: 88px;
      padding: 30px 12px 40px 19px;
    }
  }
}
.logo-text {
  height: 90px;
  h1 {
    width: 96px;
    height: 42px;
    line-height: 106px;
    font-size: 32px;
    line-height: 42px;
    color: #333333;
  }
  div {
    width: 98px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    padding-top: 15px;
  }
}
.welcome {
  width: 112px;
  height: 37px;
  font-size: 28px;
  line-height: 36px;
  color: #333;
  margin-left: 60px;
}
</style>