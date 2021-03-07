<template>
  <div class="home">
    <div class="home-content">
      <div class="home-left">
        <div class="content">
          <div>
            <h2 class="title">酒水</h2>
            <img src="../../assets/images/home/ic-展开(1).png" alt="" />
          </div>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
          <div class="dashed"></div>
        </div>
        <div class="content">
          <div>
            <h2 class="title">酒水</h2>
            <img src="../../assets/images/home/ic-展开(1).png" alt="" />
          </div>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
          <div class="dashed"></div>
        </div>
        <div class="content">
          <div>
            <h2 class="title">酒水</h2>
            <img src="../../assets/images/home/ic-展开(1).png" alt="" />
          </div>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
          <div class="dashed"></div>
        </div>
        <div class="content">
          <div>
            <h2 class="title">酒水</h2>
            <img src="../../assets/images/home/ic-展开(1).png" alt="" />
          </div>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
          <div class="dashed"></div>
        </div>
        <div class="content">
          <div>
            <h2 class="title">酒水</h2>
            <img src="../../assets/images/home/ic-展开(1).png" alt="" />
          </div>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
          <div class="dashed"></div>
        </div>
      </div>
      <div class="homr-center">
        <!-- <img src="../../assets/images/home/logo.png" alt="轮播图" /> -->
        <el-carousel height="519px" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home-bottom">
        <div>
          <div class="message">
            <div class="bor-red"></div>
            <p>消息通知</p>
            <div class="bor-red"></div>
          </div>
          <img src="../../assets/images/home/ic-消息空白.png" alt="空白消息" />
          <div class="nonews">暂时没有消息通知哦~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetBanners } from "../../api/home";
export default {
  name: "Home",
  methods: {
    async banner() {
      const result = await this.$API.reqGetBanners();
      console.log(result);
    },
  },
  mounted() {
    this.banner();
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 549px;
  background-color: #f5f5f5;
}
.home-content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
  height: 519px;
}
.home-left {
  width: 218px;
  background: #ffffff;
  ul {
    display: flex;
    padding-left: 16px;
    li {
      height: 21px;
      font-size: 16px;
      line-height: 21px;
      color: #666666;
      padding-right: 16px;
      padding-bottom: 20px;
    }
  }
  .title {
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    color: black;
    padding-bottom: 12px;
  }
}
.content {
  padding: 20px 0 0;
  div {
    display: flex;
    align-items: center;
    padding-left: 16px;
    img {
      padding-left: 141px;
      width: 14px;
      height: 14px;
    }
  }
}
.dashed {
  width: 187px;
  height: 0px;
  border-top: 1px dashed #ddd;
  margin: 0 auto;
}
.homr-center {
  width: 738px;
  border: 1px solid red;
  margin: 0 12px;
  img {
    // width: 100%;
    // height: 100%;
  }
}
.home-bottom {
  width: 218px;
  border-top: 6px solid #e80c00;
  background-color: aquamarine;
  img {
    display: block;
    margin: 0 auto;
  }
}
.bor-red {
  width: 36px;
  height: 2px;
  background: #e80c00;
}
.message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 30px;
  p {
    width: 72px;
    height: 24px;
    line-height: 24px;
    color: #333333;
    margin: 0 9px;
  }
}
.nonews {
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin-top: 8px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>