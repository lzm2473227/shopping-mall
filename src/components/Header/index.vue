<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="login-list">
          <p>欢迎来到凯华商城！</p>
          <p>
            <router-link to="/login">请登录</router-link>
            <router-link to="/register" class="register">我要注册</router-link>
          </p>
        </div>
        <div class="type-list">
          <router-link to="/center/myorder">购物车</router-link>
          <router-link to="/shopcart">我的订单</router-link>
          <a href="#">帮助中心</a>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <h1 class="logo">
        <router-link to="/">
          <img src="" alt="" />
        </router-link>
      </h1>
      <div class="header-search">
        <form action="" class="search-form">
          <input
            type="text"
            id="autocomplete"
            class="sui-btn btn-xlarge btn-danger"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header-top {
  background-color: #f5f5f5;
  //   display: flex;
  //   height: 30px;
  //   line-height: 30px;
}
.header-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.login-list {
  display: flex;
}

.login-list p {
  margin-right: 10px;
}
.type-list a + a {
  border-left: 1px solid #b3aeae;
}
.type-list a {
  padding: 0 10px;
}
.register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
form {
  display: flex;
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 18px;
}
.header-search {
  margin-top: 35px;
  input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
  }
  button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>
