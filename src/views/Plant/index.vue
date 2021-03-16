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
      <div class="variety">
        <p>陈年茅台酒：</p>
        <p>普通茅台酒：</p>
        <p>低度茅台酒：</p>
        <p>系列酒：</p>
        <div class="flexible">全部展示</div>
      </div>
      <div class="outers">
        <ul>
          <li>汉帝茅台酒</li>
          <li>80年茅台酒</li>
          <li>50年茅台酒</li>
        </ul>
        <ul>
          <li>飞天茅台酒</li>
        </ul>
        <ul>
          <li>低度数茅台酒</li>
        </ul>
        <ul>
          <li>汉帝茅台酒</li>
          <li>茅台酒</li>
          <li>茅台酒</li>
          <li>茅台酒</li>
          <li>王台酒</li>
          <li>台赖酒</li>
          <li>贵州茅台酒</li>
        </ul>
      </div>
    </div>
    <Product />
    <div class="plant-bottom">
      <div class="hot-title">
        <img src="../../assets/images/detail/ic-横幅促销.png" alt="热销背景" />
        <div class="v">
          <div>热销商品</div>
          <div class="yellow">爆款</div>
        </div>
      </div>
      <div class="hot-outer">
        <div class="hot" @click="$router.push('/detail')">
          <ul>
            <li>
              <img src="../../assets/images/茅台12.png" alt="飞天茅台" />
            </li>
            <li class="hot-border"></li>
            <li class="hot-h2">贵州茅台酒（新飞天500ml）</li>
            <li class="hot-last">
              <span>酱香型</span> | <span>53°</span> | <span>500ml</span>
            </li>
          </ul>
        </div>
        <div class="hot">
          <ul>
            <li>
              <img src="../../assets/images/茅台12.png" alt="飞天茅台" />
            </li>
            <li class="hot-border"></li>
            <li class="hot-h2">贵州茅台酒（新飞天500ml）</li>
            <li class="hot-last">
              <span>酱香型</span> | <span>53°</span> | <span>500ml</span>
            </li>
          </ul>
        </div>
        <div class="hot">
          <ul>
            <li>
              <img src="../../assets/images/茅台12.png" alt="飞天茅台" />
            </li>
            <li class="hot-border"></li>
            <li class="hot-h2">贵州茅台酒（新飞天500ml）</li>
            <li class="hot-last">
              <span>酱香型</span> | <span>53°</span> | <span>500ml</span>
            </li>
          </ul>
        </div>
        <div class="hot">
          <ul>
            <li>
              <img src="../../assets/images/茅台12.png" alt="飞天茅台" />
            </li>
            <li class="hot-border"></li>
            <li class="hot-h2">贵州茅台酒（新飞天500ml）</li>
            <li class="hot-last">
              <span>酱香型</span> | <span>53°</span> | <span>500ml</span>
            </li>
          </ul>
        </div>
      </div>
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
  padding-bottom: 30px;
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
  background: #de0607;
  width: 1200px;
  margin: 0 auto;
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
  margin: 0 auto;
  display: flex;
  position: relative;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    height: 40px;
    margin: 26px 0;
    li {
      width: 142px;
      height: 40px;
      border: 1px solid #c9c1bf;
      border-radius: 2px;
      line-height: 40px;
      text-align: center;
      font-family: Microsoft YaHei;
      font-size: 16px;
      margin-right: 24px;
      margin-bottom: 26px;
      font-size: 16px;
      color: #e23108;
      cursor: pointer;
    }
  }
}
.variety {
  width: 150px;
  height: 400px;
}
.variety p {
  width: 108px;
  height: 24px;
  font-size: 18px;
  line-height: 20px;
  color: #333333;
  padding: 40px 12px 0 30px;
}
.flexible {
  width: 100px;
  height: 40px;
  background: #e23108;
  border-radius: 2px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0 0 20px 30px;
  cursor: pointer;
}
.hot-title {
  position: relative;
  background-color: #de0607;
  padding-top: 28px;
  .v {
    display: flex;
    width: 330px;
    height: 54px;
    font-size: 52px;
    font-family: FZZhengHeiS-B-GB;
    color: #fff;
    margin: -54px 0 0 450px;
    div {
      margin-top: -10px;
    }
    div:first-child {
      margin-left: -10px;
    }
    .yellow {
      color: yellow;
      padding-left: 16px;
    }
  }
}
.hot {
  width: 1200px;
  height: 444px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul {
    width: 273px;
    height: 376px;
    background: #ffffff;
    cursor: pointer;
    li {
      img {
        width: 230px;
        height: 230px;
      }
    }
  }
}
.hot-border {
  width: 273px;
  height: 1px;
  background: #e80c00;
  margin-bottom: 15px;
}
.hot-h2 {
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  color: #333333;
  margin-bottom: 10px;
  margin-left: 12px;
}
.hot-last {
  height: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  margin-bottom: 12px;
  margin-left: 12px;
}
.hot ul li:first-child {
  img {
    margin: 30px 20px;
  }
}
.hot-outer {
  display: flex;
}
</style>