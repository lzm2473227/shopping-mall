<template>
  <div class="learning">
    <div class="content">
      <div class="con">
        <div>视频</div>
        <div class="message">
          <span class="big">2021年度茅台酒生产“第一碗酒” 出来</span>
          <span>2021/01/19 09:56:05</span>
        </div>
        <div class="to-view">
          <router-link to="/">查看详情</router-link>
        </div>
      </div>
      <div class="con">
        <div>视频</div>
        <div class="message">
          <span class="big">2021年度茅台酒生产“第一碗酒” 出来</span>
          <span>2021/01/19 09:56:05</span>
        </div>
        <div class="to-view">
          <router-link to="/">查看详情</router-link>
        </div>
      </div>
      <div class="con">
        <div>视频</div>
        <div class="message">
          <span class="big">2021年度茅台酒生产“第一碗酒” 出来</span>
          <span>2021/01/19 09:56:05</span>
        </div>
        <div class="to-view">
          <router-link to="/">查看详情</router-link>
        </div>
      </div>
      <div class="con">
        <div>视频</div>
        <div class="message">
          <span class="big">2021年度茅台酒生产“第一碗酒” 出来</span>
          <span>2021/01/19 09:56:05</span>
        </div>
        <div class="to-view">
          <router-link to="/">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Learning",
};
</script>

<style lang="less" scoped>
.learning {
  background-color: #f5f5f5;
  height: 540px;
  display: flex;
  justify-content: center;
}
.content {
  height: 125px;
  width: 1200px;
  background-color: #fff;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.con {
  width: 100%;
  position: relative;
  height: 125px;
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px;
  border-bottom: 2px solid #f8f8f8;
  div:first-of-type {
    background-color: #a5956b;
    color: #ebcb1a;
    width: 48px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 50px;
  }
}
.message {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  span {
    box-sizing: border-box;
    padding-bottom: 25px;
  }
  .big {
    font-size: 20px;
  }
}
.to-view a {
  position: absolute;
  right: 0;
  margin-top: 46px;
  margin-right: 30px;
  color: #0d81df;
}
</style>