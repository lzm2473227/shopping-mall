<template>
  <div class="search">
    <div class="sea-outer">
      <div class="classification">
        <div class="kind"><span>全部结果</span><span> > </span></div>
        <div><span>"茅台"</span><span>X</span></div>
      </div>
      <div class="brandShop">
        <div class="one">
          <img
            src="../../assets/images/企业微信截图_20210311155617.png"
            alt=""
          />
          <p>贵州茅台工厂店</p>
        </div>
        <div class="two">
          <button class="b-red" @click="$router.push('/plant')">
            进入店铺
          </button>
          <button>加关注</button>
        </div>
      </div>
      <Product></Product>
      <div class="pager">
        <button>首页</button>
        <button>上一页</button>
        <span>1</span>/4
        <button>下一页</button>
        <button>尾页</button>
        <div>
          跳转至
          <input type="text" placeholder="1" />
          页
        </div>
        <button>Go</button>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
export default {
  name: "Search",
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
.search {
  background-color: #fafafa;
}
.sea-outer {
  width: 1200px;
  margin: 0 auto;
}
.classification {
  padding: 20px 10px 20px 0;
  display: flex;
  span {
    padding-right: 10px;
  }
}
// .kind {
//
// }
.brandShop {
  width: 100%;
  background-color: #ebebeb;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 120px;
    height: 70px;
  }
}
.one {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  p {
    padding-left: 20px;
  }
}
.two {
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  button {
    outline: none;
    border: none;
    background-color: #fff;
    color: #666;
  }
  .b-red {
    color: #fff;
    margin-bottom: 15px;
    background-color: red;
  }
}

.pager {
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 20px;
    height: 28px;
  }
  input {
    width: 30px;
    height: 26px;
    margin: 0 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    text-indent: 10px;
    outline: none;
  }
}
</style>