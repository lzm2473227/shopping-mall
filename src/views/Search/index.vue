<template>
  <div class="search">
    <div class="sea-outer">
      <div class="classification">全部结果 > "茅台" <span>X</span></div>
      <div class="brandShop">
        <div class="one">
          <img
            src="../../assets/images/企业微信截图_20210311155617.png"
            alt=""
          />
          <p>贵州茅台工厂店</p>
        </div>
        <div class="two">
          <button class="b-red">进入店铺</button>
          <button>加关注</button>
        </div>
      </div>
      <div class="sort">
        <div>
          <p class="active">综合排序</p>
          <p>价格</p>
        </div>
        <div>共<span>1.2万+</span>件商品</div>
      </div>
      <div class="content">
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
        <div class="a">
          <img src="../../assets/images/20210314221939.jpg" alt="" />
          <div>茅台王子酒（鼠年庚子）生肖酒53度500ml*6整箱口感酱香甜</div>
          <div class="pro-price">
            <span class="tag">￥</span>
            <span>5328.00</span>
          </div>
        </div>
      </div>
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
export default {
  name: "Search",
  data() {
    return {};
  },
  methods: {},
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
  margin: 20px 10px 20px 0;
}
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
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  margin: 20px 0 0;
  div {
    display: flex;
    p {
      padding: 0 20px;
      border-right: 1px solid rgb(185, 179, 179);
    }
  }
}
.content {
  width: 1200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .a {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 290px;
    margin-top: 10px;
  }
}
.pro-price {
  margin-top: 16px;
  display: flex;
  span {
    font-size: 24px;
    line-height: 28px;
    height: 28px;
    color: #a92112;
  }
  span.tag {
    font-size: 15px;
    vertical-align: top;
    margin-right: 7px;
  }
}
.pager {
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 20px;
  }
  input {
    width: 20px;
    height: 20px;
    margin: 0 20px;
    background-color: #efefef;
    border: 1px solid #333;
    text-indent: 5px;
  }
}
</style>