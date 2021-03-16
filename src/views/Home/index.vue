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
        <el-carousel
          height="519px"
          :autoplay="true"
          arrow="never"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in bannerlist" :key="item.id">
            <div>
              <img :src="item.imgUrl" alt="轮播图" />
            </div>
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
export default {
  name: "Home",
  data() {
    return {
      bannerlist: [], //轮播图
    };
  },
  methods: {
    //首页的轮播图
    async banner() {
      const result = await this.$API.reqGetBanners();
      // console.log(result);
      this.bannerlist = result;
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
}
.home-bottom {
  width: 218px;
  border-top: 6px solid #e80c00;
  background-color: #fff;
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
</style>