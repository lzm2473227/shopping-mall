<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <ul class="brand">
          <li>
            <img src="../../assets/images/home/ic-品质.png" alt="正品保障" />
          </li>
          <li class="brank-p">
            <p class="brank-bold">正品汇商城 品质放心</p>
            <p class="brank-tiny">全称抄码跟踪</p>
          </li>
        </ul>
        <ul class="brand">
          <li>
            <img src="../../assets/images/home/ic-闪电.png" alt="闪电发货" />
          </li>
          <li>
            <p class="brank-bold">闪电配送 安全到达</p>
            <p class="brank-tiny">就近仓配送</p>
          </li>
        </ul>
        <ul class="brand">
          <li>
            <img
              src="../../assets/images/home/ic-无忧退货.png"
              alt="无忧退货"
            />
          </li>
          <li>
            <p class="brank-bold">部分商品 无忧退货</p>
            <p class="brank-tiny">售后更放心</p>
          </li>
        </ul>
        <ul class="brand">
          <li>
            <img
              src="../../assets/images/home/ic-品类齐全.png"
              alt="品类齐全"
            />
          </li>
          <li>
            <p class="brank-bold">品类齐全 一站式进货</p>
            <p class="brank-tiny">酒水饮料 应有尽有</p>
          </li>
        </ul>
      </div>
      <div class="footerList">
        <div class="footerItem">
          <h4>关于我们</h4>
          <ul class="footerItemCon">
            <li>关于正品汇</li>
            <li>联系正品汇</li>
            <li>正品汇文化</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>新手入门</h4>
          <ul class="footerItemCon">
            <li>如何注册</li>
            <li>购物流程</li>
            <li>服务协议</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>批发服务</h4>
          <ul class="footerItemCon">
            <li>售后服务</li>
            <li>退还流程</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付/配送</h4>
          <ul class="footerItemCon">
            <li>配送方式</li>
            <li>配送规则</li>
            <li>付款方式</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <ul class="footerItemCon">
            <li>常见问题</li>
            <li>忘记密码</li>
            <li>订单处理</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="record">
      深圳市正品汇商务贸易有限公司 Copyright © 2016 - 2020 粤ICP备18094129号-1
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  border-top: 1px solid #dddddd;
}
.footer-container {
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  .brand {
    display: flex;
    img {
      width: 41px;
      height: 41px;
      padding-right: 11px;
    }
  }
}
.brank-bold {
  height: 21px;
  line-height: 24px;
  color: #333333;
}
.brank-tiny {
  height: 19px;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
}
.footerList {
  display: flex;
  justify-content: space-between;
}
.footerItem h4 {
  height: 21px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 16px;
}
.footerItemCon li {
  height: 16px;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
  margin-bottom: 12px;
}
.footerItemCon li:last-of-type {
  margin-bottom: 30px;
}
.record {
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3c3c;
  color: #fff;
  font-size: 14px;
}
</style>