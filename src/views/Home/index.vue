<template>
  <div class="home">
    <div class="home-content">
      <div class="home-left">
        <div class="content">
          <h2 class="title">酒水</h2>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
        </div>
        <div class="content">
          <h2 class="title">酒水</h2>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
        </div>
        <div class="content">
          <h2 class="title">酒水</h2>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
        </div>
        <div class="content">
          <h2 class="title">酒水</h2>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
        </div>
        <div class="content">
          <h2 class="title">酒水</h2>
          <ul>
            <li>白酒</li>
            <li>啤酒</li>
            <li>葡萄酒</li>
          </ul>
        </div>
      </div>
      <div class="homr-center">
        <div>
          <img src="../../assets/logo.png" alt="轮播图" />
        </div>
      </div>
      <div class="home-bottom">
        <div>
          <p>消息通知</p>
          <img src="../../assets/图片 (1).png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  background-color: #f5f5f5;
}
.home-content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
}
.home-left {
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 519px;
  justify-content: space-around;
  background-color: #fff;
  margin-right: 13px;
  ul {
    display: flex;
    height: 100%;
    li {
      font-size: 16px;
    }
  }
  .title {
    font-size: 18px;
    color: black;
    padding: 18px 0;
  }
}
.content {
  // padding: 30px 0;
  margin: 15px ;
}
.content + div {
  border-top: 1px dashed #ddd;
}
</style>