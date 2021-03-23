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
    <div class="trade-con">
      <div class="consignee">
        <div class="information">
          <p>收货人信息</p>
          <a href="javascript:;">新增收货地址</a>
        </div>
        <ul class="person">
          <li class="active">
            <p>广东深圳 (上善若水收)</p>
            <p class="border"></p>
            <p class="text">福田区福田街道世纪豪庭大厦九楼 1800 3388990</p>
            <p class="compile">
              <span>编辑</span><span>|</span><span>删除 </span>
            </p>
          </li>
          <li>
            <p>广东深圳 (上善若水收)</p>
            <p class="border"></p>
            <p class="text">福田区福田街道世纪豪庭大厦九楼 1800 3388990</p>
          </li>
          <li>
            <p>广东深圳 (上善若水收)</p>
            <p class="border"></p>
            <p class="text">福田区福田街道世纪豪庭大厦九楼 1800 3388990</p>
          </li>
          <li>
            <p>广东深圳 (上善若水收)</p>
            <p class="border"></p>
            <p class="text">福田区福田街道世纪豪庭大厦九楼 1800 3388990</p>
          </li>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="inventory">
        <div class="inventory-title">
          <p>送货清单</p>
          <a href="javascript:;">返回修改购物车</a>
        </div>
        <div class="inventory-body">
          <div class="body-left">
            <p class="payee-people">收款方信息</p>
            <div class="payee-outer">
              <div class="payee">
                <span>开户行：</span>
                <span>账户号：</span>
                <span class="long">收款人名称：</span>
                <span>收款金额：</span>
                <span>联系号码：</span>
              </div>
              <div class="info">
                <span>贵州银行仁怀茅台支行</span>
                <div class="account">
                  <span>622 0006 3379 0008 7223</span>
                  <img
                    src="../../assets/images/ic-隐藏密码.png"
                    alt="隐藏密码"
                  />
                </div>
                <span>中国贵州茅台酒厂(集团)有限责任 公司</span>
                <span>1499.00</span>
                <span>18866669999</span>
              </div>
            </div>
            <p class="left-border"></p>
            <div class="voucher">
              将款项汇入该银行账号后，可上传转账凭证，或者直接 联系商家。
            </div>
            <div class="total">
              <span class="red">1</span><span> 件商品，总商品金额： </span>
              <span class="red"> ￥1499.00 </span>
            </div>
          </div>
          <div class="body-right">
            <p class="payee-people">商家：贵州茅台工厂直营店</p>
            <div class="details">
              <img src="../../assets/images/茅台12.png" alt="茅台" />
              <div class="details-con">
                <p>贵州茅台酒(贵州飞天茅台酒)53度500ml 单瓶装 口感酱香型</p>
                <p>规格：500ml【酱香型】</p>
              </div>
              <div>￥1499.00</div>
              <div>×1</div>
              <div>
                留言<input type="text" placeholder="建议留言前先与厂家沟通" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  padding: 20px;
  box-sizing: border-box;
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
    box-sizing: border-box;
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
.information {
  display: flex;
  justify-content: space-between;
  padding-bottom: 17px;
  p {
    width: 90px;
    height: 24px;
    font-size: 18px;
    font-weight: bold;
    color: #111111;
  }
  a {
    width: 96px;
    height: 21px;
    font-size: 16px;
    color: #086ac2;
  }
}
.person {
  display: flex;
  justify-content: space-between;
  li.active {
    background: url("../../assets/images/trade/地址装饰-选中.png");
  }
  li {
    width: 278px;
    height: 143px;
    background: #ffffff;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    background: url("../../assets/images/trade/地址装饰-未选中.png");
    display: flex;
    flex-direction: column;
    p {
      margin: 14px 14px 0;
    }
    p.border {
      width: 245px;
      border-bottom: 1px solid #d8d50d;
    }
    .text {
      font-size: 14px;
      line-height: 20px;
    }
    .compile {
      width: 72px;
      height: 24px;
      background: #000000;
      opacity: 0.3;
      border-radius: 0px 0px 0px 4px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: 0px;
      // margin-bottom: 0px;
      span {
        font-size: 10px;
        color: #ffffff;
      }
    }
  }
}
.separator {
  width: 1160px;
  height: 0px;
  border-bottom: 1px solid #efefef;
  margin: 30px 0;
}
.inventory-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  p {
    width: 72px;
    height: 24px;
    font-size: 18px;
    font-weight: bold;
    color: #111111;
  }
  a {
    width: 112px;
    height: 21px;
    font-size: 16px;
    color: #086ac2;
  }
}
.inventory-body {
  display: flex;
}
.payee-people {
  height: 21px;
  font-size: 16px;
  font-weight: bold;
  color: #111111;
  padding-bottom: 12px;
}
.body-left {
  width: 336px;
  height: 359px;
  background: #f8f8f8;
  box-sizing: border-box;
  padding: 20px;
  .payee-outer {
    height: 175px;
    display: flex;
    .payee {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 14px;
      line-height: 20px;
      color: #333333;
      span.long {
        display: block;
        width: 84px;
        height: 38px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
      .account {
        display: flex;
        align-items: center;
        img {
          width: 14px;
          height: 14px;
          padding-left: 10px;
        }
      }
    }
  }
  .left-border {
    width: 295px;
    height: 0px;
    border-bottom: 1px solid #dddddd;
  }
  .voucher {
    width: 288px;
    height: 32px;
    font-size: 12px;
    line-height: 16px;
    color: #e80c00;
    padding: 13px 0 40px 0;
  }
  .total {
    height: 19px;
    font-size: 14px;
    line-height: 19px;
    .red {
      color: #e80c00;
    }
  }
}
.body-right {
  width: 824px;
  height: 359px;
  background: #f3fbfe;
  
}
</style>