<template>
  <div class="outer">
    <div class="header">
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
    </div>
    <div class="hint">
      <img src="../../assets/images/ic-温馨提示.png" alt="温馨提示" />
      <p>温馨提示：请前往凯华门店PDA进行下单！</p>
    </div>
    <div class="all-goods">
      <div class="delivery-goods">
        <h4>全部商品 3</h4>
        <div class="site">
          配置至：<select>
            <option value="1">aaaaa</option>
            <option value="1">bbbb</option>
          </select>
          <!-- <img src="../../assets/images/ic-返回.png" alt="" /> -->
        </div>
      </div>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">
            <input type="checkbox" class="chooseAll" />全选
          </div>
          <div class="cart-th2">商品</div>
          <div class="cart-th3">批发价</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">小计</div>
          <div class="cart-th6">操作</div>
        </div>
        <div class="cart-body">
          <h5><input type="checkbox" />贵州茅台工厂店</h5>
          <ul>
            <li class="cart-list-con1"><input type="checkbox" /></li>
            <li class="cart-list-con2">
              <img src="../../assets/images/茅台12.png" alt="茅台" />
              <a href="javascript:;"
                >贵州茅台酒(贵州飞天茅台酒)53度 500ml单瓶装 口感酱香型</a
              >
              <p>贵州飞天茅台酒 500ml单瓶装</p>
            </li>
            <li class="cart-list-con3">￥1499.00</li>
            <li class="cart-list-con5">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </li>
            <li class="cart-list-con5">1563</li>
            <li class="cart-list-con6">
              <a href="javascript:;">删除</a>
              <!-- <br /> -->
              <a href="javascript:;">移到收藏</a>
            </li>
          </ul>
        </div>
        <div class="cart-tool">
          <div class="select-all">
            <input type="checkbox" class="chooseAll" />
            <span>全选</span>
          </div>
          <div class="option">
            <a href="javascript:;">删除选中商品</a>
          </div>
          <div>
            已选择 <span>1</span>件商品
            <img src="../../assets/images/ic-展开.png" alt="展开" />
          </div>
          <div class="total-price">
            <span>总价</span>
            <div><span class="tag">￥</span> <span>5328.00</span></div>
          </div>
          <div class="create-order">
            <button>生成订单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
  data() {
    return {};
  },
  methods: {
    toSearch() {
      this.$router.replace("/search");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 194px;
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
.hint {
  width: 1200px;
  margin: 0 auto;
  height: 40px;
  background: #fff9f2;
  border: 1px solid #ffe5c2;
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  img {
    width: 18px;
    height: 18px;
  }
}
.all-goods {
  width: 1200px;
  margin: 0 auto;
  .delivery-goods {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 23px 0;
    h4 {
      height: 31px;
      font-size: 24px;
      line-height: 31px;
      color: #e80c00;
    }
    .site {
      height: 24px;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }
  }
}
</style>
