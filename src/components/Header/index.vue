<template>
  <header class="header">
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
          <router-link to="/shopcart">购物车</router-link>
          <i class="site-nav-pipe">|</i>
          <router-link to="/order">我的订单</router-link>
          <i class="site-nav-pipe">|</i>
          <router-link to="/helpcenter">帮助中心</router-link>
        </div>
      </div>
    </div>
    <div class="header-center">
      <div class="logo-content">
        <h1 class="logo">
          <router-link to="/">
            <img src="../../assets/logo.png" alt="正品汇logo" />
          </router-link>
        </h1>
      </div>
      <div class="location header-active">
        <i></i>
        深圳市
      </div>
      <div class="header-search">
        <form action="" class="search-form">
          <input
            type="text"
            id="autocomplete"
            class="sui-btn btn-xlarge btn-danger"
            placeholder="请输入名称、货号、规格、品牌、商家名称进行搜索"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button">
            搜索
          </button>
        </form>
      </div>
    </div>
    <div class="header-bottom">
      <div class="classify">全部商品分类</div>
      <ul>
        <li>正品荟萃</li>
        <li>学习之窗</li>
        <li>物流轨迹</li>
        <li>保单查询</li>
        <li>合作加盟</li>
        <li>联系我们</li>
      </ul>
      <div class="quality">
        <div><i></i>正品保障</div>
        <div><i></i>一战式进货</div>
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
.header {
  height: 250px;
  // background-color: rgb(199, 142, 142);
  font-family: Roboto-regular;
  font-size: 16px;
}
.header-top {
  background-color: #f5f5f5;
  line-height: 47px;
  height: 47px;
}
.header-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
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
  margin-right: 10px;
}
.site-nav-pipe {
  color: #ddd;
}
.type-list a {
  padding: 0 10px;
  color: #888888;
}
.register {
  padding: 0 5px;
  margin-left: 5px;
}
.header-center {
  width: 1200px;
  // background-color: rgb(238, 187, 151);
  margin: 0 auto;
  display: flex;
  height: calc(216px - 47px);
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    img {
      height: calc(216px - 24px - 47px);
    }
  }
}
.location {
  width: 80px;
  height: 30px;
  border: 1px solid #ddd;
  line-height: 30px;
  text-align: center;
}
form {
  display: flex;
}
h1 {
  font-size: 18px;
}
.header-search {
  input {
    box-sizing: border-box;
    width: calc(640px - 320px - 98px + 463px);
    height: 56px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
    text-indent: 19px;
  }
  button {
    height: 56px;
    width: 98px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 766px;
    li {
      color: black;
      font-size: 18px;
    }
  }
}
.classify {
  width: 218px;
  background-color: rgb(58, 54, 54);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  font-size: 20px;
  color: rgb(235, 224, 224);
}
.quality {
  display: flex;
  width: 218px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
}
</style>
