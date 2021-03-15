<template>
  <div class="plant">
    <div class="plnat-outer">
      <div class="plant-top">
        <div>
          <img src="../../assets/images/detail/logo-mt.png" alt="logo" />
        </div>
        <div class="plant-bottom">
          <h2>贵州茅台工厂</h2>
          <div class="plant-collect">
            <img src="../../assets/images/detail/ic-收藏.png" alt="收藏" />
            <span>收藏店铺</span>
          </div>
        </div>
      </div>
    </div>
    <div class="plant-all">
      <div class="all">
        <div class="all-headline">
          <p class="active">店铺首页</p>
          <p>全部商品</p>
        </div>
        <div class="inp">
          <input type="text" placeholder="搜索店内商品" />
          <button>搜素</button>
        </div>
      </div>
    </div>
    <div class="classification">
      <div class="kind"><span>全部结果</span><span> > </span></div>
      <div class="kind"><span>签约工作</span><span> > </span></div>
      <div><span>"茅台"</span><span>X</span></div>
    </div>
    <div class="classify">
      <ul>
        <p>陈年茅台酒：</p>
        <li>汉帝茅台酒</li>
        <li>80年茅台酒</li>
        <li>50年茅台酒</li>
      </ul>
      <ul>
        <p>普通茅台酒：</p>
        <li>飞天茅台酒</li>
      </ul>
      <ul>
        <p>低度茅台酒：</p>
        <li>低度数茅台酒</li>
      </ul>
      <ul>
        <p>系列酒：</p>
        <li>汉帝茅台酒</li>
        <li>茅台酒</li>
        <li>茅台酒</li>
        <li>茅台酒</li>
        <li>王台酒</li>
        <li>台赖酒</li>
        <li>贵州茅台酒</li>
      </ul>
      <div class="flexible">全部展示</div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
export default {
  name: "Plant",
  data() {
    return {};
  },
  methods: {},
  components: {
    Product,
  },
};
</script>

<style lang="less" scoped>
.plant {
  width: 100%;
  background-color: #f5f5f5;
}
.plnat-outer {
  background: url(../../assets/images/detail/店铺banner.png) center center;
}
.plant-top {
  height: 153px;
  width: 1200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: rgb(63, 176, 211);
  img {
    width: 92px;
    height: 92px;
  }
  h2 {
    width: 192px;
    height: 42px;
    font-size: 32px;
    line-height: 42px;
    color: #ffffff;
    margin-bottom: 16px;
  }
  .plant-collect {
    width: 108px;
    height: 30px;
    line-height: 30px;
    background: #e80c00;
    border: 1px solid #ffffff;
    img {
      width: 16px;
      height: 16px;
    }
    span {
      width: 64px;
      height: 21px;
      font-size: 16px;
      line-height: 21px;
      color: #ffffff;
    }
  }
}
.plant-bottom {
  padding: 0 0 0 16px;
  .plant-collect {
    text-align: center;
    span {
      box-sizing: border-box;
      padding-left: 2px;
    }
  }
}
.plant-all {
  background: #e80c00;
}
.all {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  justify-content: space-between;
  p {
    width: 128px;
    height: 56px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
  }
  .active {
    background: #ae0900;
  }
}
.all-headline {
  display: flex;
}
.all input {
  width: 277px;
  background-color: #fff;
  height: 44px;
  padding: 0;
  text-indent: 15px;
}
.all button {
  width: 76px;
  height: 44px;
  outline: none;
  border: 0;
  background: #f5f5f5;
}
.inp {
  display: flex;
  align-items: center;
}
.classification {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 10px 20px 0;
  display: flex;
  span {
    padding-right: 10px;
  }
}
.kind {
  color: #999999;
}
.classify {
  background: url("../../assets/images/detail/底.png");
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ul {
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    p {
      width: 108px;
      // height: 24px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 20px;
      color: #333333;
      opacity: 1;
      padding: 0 12px 0 30px;
    }
    li {
      width: 142px;
      height: 40px;
      border: 1px solid #c9c1bf;
      opacity: 1;
      border-radius: 2px;
      padding-right: 24px;
    }
  }
}
</style>