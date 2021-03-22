<template>
  <div class="trade">
    <HeaderTop />
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
        <div class="welcome">核对订单页</div>
      </div>
      <div class="register-top">
        <div class="progress-first progress">
          <span class="num num-first">1</span>
          <div class="text-first text">1、购物车</div>
        </div>
        <div class="progress">
          <span class="num primary">1</span>
          <div class="text">2、填写核对订单信息</div>
        </div>
        <div class="progress progress-last">
          <span class="num-last num">1</span>
          <div class="text-last text">3、成功提交订单</div>
        </div>
      </div>
    </div>
    <div class="verify">
      <p class="ver">填写并核对订单信息</p>
    </div>
    <div class="trade-con"></div>
    <div class="trade-bottom">
      <div class="trader-bot1">
        <span>3</span>
        件商品，总商品金额：￥3486.00
      </div>
      <div class="trader-bot2">
        <div class="total-price">
          <div class="t-pri">
            <span class="mini">应付总额：</span>
            <span class="tag">￥</span> <span> 3486.00 </span>
          </div>
        </div>
        <div class="address">
          寄送至：广东 深圳市 福田区 深南大道6029号世纪豪庭大厦九楼 收货人：凯华
          18836696688
        </div>
      </div>
      <div class="confirm">
        <button>确认订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
export default {
  name: "Trade",
  components: {
    HeaderTop,
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
  height: 37px;
  font-size: 28px;
  line-height: 37px;
  color: #333;
  margin-left: 40px;
}
.register-top {
  display: flex;
  padding: 61px 0 80px 0;
  color: #fff;
  margin-left: 200px;
}
.progress.progress-first {
  background: #caecb6;
  color: #caecb6;
}
.progress {
  display: flex;
  justify-content: center;
  width: 192px;
  height: 6px;
  color: #7bbc52;
  background: #7bbc52;
}
.num.num-first {
  background: #caecb6;
}
.progress-last {
  color: #cccccc;
  background: #ccc;
}
.num.num-last {
  background: #ccc;
}
.num {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  position: absolute;
  background: #7bbc52;
  color: #fff;
  margin-top: -10px;
  display: flex;
  justify-content: center;
}
.register-top .text {
  margin-top: 20px;
  text-align: center;
}
.verify {
  width: 1200px;
  margin: 0 auto 20px;
  .ver {
    width: 216px;
    height: 31px;
    font-size: 22px;
    line-height: 36px;
    color: #666666;
  }
}
.trade-con {
  width: 1200px;
  height: 1086px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #dddddd;
}
.trade-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .trader-bot1 {
    display: flex;
    width: 250px;
    height: 21px;
    font-size: 16px;
    margin: 30px 0 20px 0;
    color: #333333;
    span {
      color: #e80c00;
    }
  }
  .trader-bot2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 1200px;
    height: 98px;
    background: #f6f6f6;
    padding-right: 20px;
    .total-price {
      height: 21px;
      font-size: 16px;
      line-height: 30px;
      color: #333333;
      .t-pri {
        height: 31px;
        font-size: 24px;
        color: #e80c00;
        .tag {
          font-size: 14px;
        }
        .mini {
          width: 80px;
          height: 21px;
          font-size: 16px;
          line-height: 36px;
          color: #333333;
        }
      }
    }
  }
}

.address {
  font-size: 14px;
  color: #666666;
}
.confirm button {
  width: 136px;
  height: 40px;
  background: #e80c00;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  outline: 0;
  padding: 0;
  border: 0;
  margin-right: 20px;
  margin-top: 12px;
}
</style>