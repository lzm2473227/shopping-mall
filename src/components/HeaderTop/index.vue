<template>
  <div class="header-top">
    <div class="header-container">
      <div class="login-list">
        <p class="header-active">欢迎来到凯华商城！</p>
        <div class="align">
          <router-link to="/login" class="login-margin">请登录</router-link>
          <div class="site-nav-pipe">|</div>
          <router-link to="/register" class="register header-active"
            >我要注册</router-link
          >
        </div>
      </div>
      <div class="type-list">
        <router-link to="/shopcart" class="shopcart">
          <img
            src="../../assets/images/home/ic-购物车.png"
            class="icon-shopcart"
            alt="购物车"
          />
          购物车<span>0</span>
          <div class="triangle"></div>
        </router-link>
        <i class="site-nav-pipe">|</i>
        <router-link to="/order">我的订单</router-link>
        <i class="site-nav-pipe">|</i>
        <router-link to="/helpcenter">帮助中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style lang="less" scoped>
.header-top {
  background-color: #f5f5f5;
  line-height: 46px;
  height: 46px;
}
.header-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.triangle {
  border-width: 7px 4px;
  border-color: #888888 transparent transparent;
  border-style: solid;
  margin-top: 9px;
}
.shopcart {
  display: flex;
  align-items: center;
  span {
    color: #e80c00;
    padding-right: 8px;
  }
}
.icon-shopcart {
  padding-right: 4px;
}
.login-list,
.align {
  display: flex;
}
.login-margin {
  margin-right: 10px;
  color: #888888;
}
.header-active {
  color: red;
}
.login-list p {
  margin-right: 40px;
}
.site-nav-pipe {
  color: #ddd;
}
.type-list {
  display: flex;
}
.type-list a {
  padding: 0 24.5px;
  color: #888888;
  font-size: 14px;
  font-weight: 400;
  opacity: 1;
}
.register {
  padding: 0 5px;
  margin-left: 5px;
}
</style>