<template>
  <header class="header">
    <HeaderTop />
    <div class="header-center">
      <div class="logo-content">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/images/home/logo.png" alt="正品汇logo" />
          </router-link>
          <div class="logo-text">
            <h1>正品汇</h1>
            <div>kaihua.com</div>
          </div>
        </div>
      </div>
      <div class="location header-active">
        <img src="../../assets/images/home/ic-定位.png" alt="" />
        <span>深圳市</span>
      </div>
      <div class="header-search">
        <form action="" class="search-form">
          <input
            type="text"
            id="autocomplete"
            placeholder="请输入名称、货号、规格、品牌、商家名称进行搜索"
          />
          <button class="btn-danger" type="button" @click="toSearch">
            <img src="../../assets/images/home/ic-搜索.png" alt="" />
            <span>搜索</span>
          </button>
        </form>
      </div>
    </div>
    <div class="header-bottom">
      <div class="classify">
        <img src="../../assets/images/home/ic-分类.png" alt="" />
        全部商品分类
        <img src="../../assets/images/home/ic-返回.png" alt="" />
      </div>
      <ul>
        <router-link to="/brand"><li>正品荟萃</li></router-link>
        <router-link to="/learning"><li>学习之窗</li></router-link>
        <li>物流轨迹</li>
        <li>保单查询</li>
        <li>合作加盟</li>
        <li>联系我们</li>
      </ul>
      <div class="quality">
        <div>
          <img src="../../assets/images/home/ic-正品保障.png" alt="正品保障" />
          正品保障
        </div>
        <div>
          <img
            src="../../assets/images/home/ic-一站式进货.png"
            alt="一战进货"
          />
          一战式进货
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderTop from "@/components/HeaderTop"
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    toSearch() {
      this.$router.replace("/search");
    },
  },
  components: {
    HeaderTop,
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 250px;
  font-size: 16px;
}
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
.header-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 158px;
  justify-content: space-between;
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
.location {
  width: 123px;
  height: 42px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 74px;
  img {
    width: 22px;
    height: 22px;
  }
  span {
    width: 49px;
    height: 21px;
    line-height: 24px;
    color: #e80c00;
  }
}
form {
  display: flex;
  width: 745px;
  height: 60px;
}
.header-search {
  input {
    width: calc(745px - 110px);
    text-indent: 20px;
    border: 2px solid #e80c00;
  }
  button {
    width: 110px;
    height: 60px;
    background: #e80c00;
    color: #fff;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      height: 16px;
      padding-right: 8px;
    }
    span {
      width: 32px;
      height: 21px;
      line-height: 21px;
      color: #ffffff;
    }
  }
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #999999;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
}
::-moz-placeholder {
  color: #999999;
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
    padding-right: 25px;
    box-sizing: border-box;
    li {
      color: black;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
.classify {
  width: 218px;
  background-color: #3f3c3c;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 46px;
  font-size: 20px;
  color: #ffffff;
}
.quality {
  display: flex;
  width: 218px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    img {
      width: 18px;
      height: 18px;
      padding-right: 7px;
    }
  }
}
.btn-danger {
  outline: none;
}
</style>
