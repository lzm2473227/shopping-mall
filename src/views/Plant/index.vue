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
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Plant",
  data() {
    return {};
  },
  methods: {},
  
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
  // background-color: rgb(63, 176, 211);
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
  // background: #de0607;
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

</style>