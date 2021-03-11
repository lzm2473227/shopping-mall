<template>
  <div class="brand">
    <div class="type">
      <span>酒类</span>
    </div>
    <div class="brand-con">
      <div class="type-con">
        <span></span>
        <p>签约工厂</p>
      </div>
      <div class="typebrand">
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
        <div class="con">
          <div class="con-img">
            <img
              src="../../assets/images/企业微信截图_20210311155617.png"
              alt=""
            />
          </div>
          <span>贵州茅台</span>
        </div>
      </div>
      <!-- <div class="pagination">
        <img src="../../assets/images/ic-fy-不可点击.png" alt="z左" />
        <div class="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <img src="../../assets/images/ic-fy-可点击.png" alt="右" />
      </div> -->
      <el-pagination
        style="text-align: center"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="12"
        :current-page="currentPage4"
        :total="50"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 1,
    };
  },
  methods: {
    handleCurrentChange(v) {
      console.log(v);
    },
  },
};
</script>

<style lang="less" scoped>
.brand .type {
  width: 1200px;
  height: 24px;
  margin: 23px auto;
  border: 1px solid #ccc;
  span {
    width: 36px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #999999;
  }
}
.brand-con {
  width: 1200px;
  height: 924px;
  border: 1px solid #dddddd;
  margin: 0 auto;
}
.type-con {
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: #f5f5f5;
  span {
    width: 4px;
    height: 20px;
    background: #333333;
    margin: 0 10px 0 20px;
  }
  p {
    width: 88px;
    height: 29px;
    font-size: 22px;
    line-height: 29px;
    color: #333333;
  }
}
.typebrand {
  display: flex;
  justify-content: space-between;
  // align-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
  .con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 281px;
    padding-bottom: 20px;
    span {
      width: 80px;
      height: 26px;
      font-size: 20px;
      line-height: 26px;
      color: #333333;
      padding-top: 12px;
    }
  }
}
.con-img {
  width: 281px;
  height: 200px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  div:last-of-type {
    margin-right: 10px;
  }
  div.active {
    border: 1px solid #e80c00;
  }
}
</style>