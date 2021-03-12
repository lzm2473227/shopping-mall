<template>
  <div class="helpcenter">
    <div class="container">
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
            <li>合同说明</li>
            <li>售后服务</li>
            <li>退还流程</li>
            <li>配送服务</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <ul class="footerItemCon">
            <li>隐私协议</li>
            <li>常见问题</li>
          </ul>
        </div>
      </div>
      <div class="help-con">
        <h2>关于正品汇</h2>
        <div class="con">
          <div>
            <div class="kong"></div>
            公司致力于研发和推广的全球首创的KHU复盘检索系统，是凯华技术团队联合中国银联创始产品团队成员和国防科大超算技术团队成员合作研发的新
            一代物联网技术。该技术以全新的商品交易闭环为底层模块，彻底颠覆了传统的供应链金融模式。可广泛应用于生产、生活、流通、信息采集、数据处理、社会管理等各领域。<br />
            其技术原理是：通过对商品生产和流通各环节的全程检索，还原商品价值的形成过程，使流通终端的零售双方取得对商品价值的信任机制。
            其技术路径是：在解决区块链应用中速度与成本两个关键难点基础上，为建立新零售和新支付生态提供数据交互的载体、商品交易的云平台、供应链金融
            的媒介、交易结算记录的加密数据中心，继而为建立金融支付新的高速通道提供新的技术工具。<br />
            其技术目标是：通过各交易攸关方的链状赋能与导流。<br />
            <span></span
            >*为合作银行快速且低成本获客、开拓增量资金渠道、管控贷款资金风险，以及开发和推广银行移动新支付金融产品提供坚实有效的技术支持；<br />
            <span></span
            >*为合作保险公司新增正品保证险业务，增强同业竞争能力；<br />
            <span></span
            >*为合作生产制造商防伪打假、扩大销售、供应链管理提供一揽子解决方案；<br />
            <span></span
            >*为加盟零售商创新经营方式、实现全时空交易提供媒介，构建移动电商云平台；<br />
            <span></span
            >*为加盟物流公司优化配置资源、避免行业无序竞争提供数据交互载体；<br />
            <span></span>*为广大消费者提供便捷且价值与价格相符的生态环境；<br />
            <span></span
            >*为各类用户提供大数据快速清洗服务，获取有效决策参考依据。在反洗钱、社会及个人征信、专利保护尖端制造等多方面具有广阔应用前景。<br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCenter",
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  width: 1200px;
  display: flex;
}
.footerItem {
  width: 220px;
  cursor: pointer;
  margin-right: 30px;
}
.footerItem h4 {
  margin-bottom: 16px;
  width: 220px;
  height: 46px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerItemCon li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  height: 19px;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
}
.footerItem:first-of-type li:first-of-type {
  color: #e80c00;
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
h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 950px;
  height: 56px;
  color: #666666;
  font-size: 18px;
  background: #f5f5f5;
  margin-bottom: 12px;
}

.con {
  width: 950px;
  height: 409px;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: #666666;
  span {
    display: inline-block;
    width: 12px;
  }
}
.kong {
  float: left;
  width: 25px;
  height: 10px;
}
</style>