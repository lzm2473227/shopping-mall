<template>
  <div class="registershop">
    <div class="register">
      <div class="register-top">
        <div class="progress-first">
          <span class="num first">1</span>
          <div class="text active">验证手机号</div>
        </div>
        <div class="progress">
          <span class="num primary">2</span>
          <div class="text">填写店铺信息</div>
        </div>
      </div>
      <div class="content">
        <label>店铺名称：</label>
        <input type="text" placeholder="请输入您的店铺名称" name="phone" />
      </div>
      <div class="content">
        <label>店铺类型：</label>
        <input
          id="type"
          type="text"
          list="typelist"
          placeholder="请选择店铺类型"
        />
        <datalist id="typelist">
          　
          <option>Dimond</option>
          　
          <option>vertical</option>
        </datalist>
      </div>
      <div class="content">
        <label>联系人：</label>
        <input type="text" placeholder="请输入您的店铺名称" name="contact" />
      </div>
      <div class="content">
        <label>店铺地址：</label>
        <input
          id="type"
          type="text"
          list="storelist"
          placeholder="请选择地址"
        />
        <datalist id="storelist">
          　
          <option>Dimond</option>
          <option>vertical</option>
        </datalist>
      </div>
      <div class="btn">
        <button @click="sub">完成</button>
      </div>
    </div>
    <div class="success" v-if="isShow">
      <div class="tishi">
        <span>提示</span>
        <span>x</span>
      </div>
      <div class="suc-center">
        <div class="information">
          <img src="@/assets/images/ic-提交成功.png" alt="提示成功" />
          <span>提示成功</span>
        </div>
        <div class="wait">
          我们的业务员将在五个工作日内 与您的注册手机号联系
        </div>
      </div>
      <div class="suc-bottom">
        <button @click="toHome"><router-link to="/">确定</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterShop",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    sub() {
      this.isShow = true;
      document.querySelector("body").style.background = "rgba(122,122,122,.5)";
      document.querySelector(".register").style.opacity = "0.5";
    },
    toHome() {
      document.querySelector("body").style.background = "#fff";
    },
  },
};
</script>

<style lang="less" scoped>
.registershop {
  width: 100%;
}
.register {
  width: 100%;
  height: 620px;
  border-top: 1px solid #dddddd;
  text-align: center;
  position: relative;
  .register-top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 61px 0 45px 0;
    color: #fff;
  }
}
.controls {
  display: flex;
  justify-content: center;
  margin-left: -200px;
  margin-bottom: 50px;
}
.controls input {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border: 1px solid #333333;
}
.controls span {
  height: 19px;
  font-size: 14px;
  line-height: 19px;
  color: #333;
}
span.a {
  color: #4a90e2;
}
.progress {
  width: 228px;
  height: 5px;
  background: #7bbc52;
}
.progress-first {
  width: 228px;
  height: 5px;
  background: #caecb6;
  .first {
    background: #caecb6;
  }
  .active.text {
    color: #caecb6;
  }
}
.num {
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #7bbc52;
  border-radius: 50%;
  position: absolute;
  margin-top: -10px;
  margin-left: -12px;
}
.primary {
  background-color: #7bbc52;
}
.register-top .text {
  margin-top: 20px;
  text-align: center;
  color: #7bbc52;
}
.content {
  margin-top: 40px;
}
.content label {
  display: inline-block;
  width: 80px;
  height: 22px;
  line-height: 21px;
  color: #333333;
  text-align: left;
  margin-right: 8px;
}
.content input {
  width: 368px;
  height: 46px;
  text-indent: 16px;
  background: #ffffff;
  border: 1px solid #dddddd;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #999999;
  width: 144px;
  height: 22px;
  line-height: 21px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
  width: 144px;
  height: 22px;
  line-height: 21px;
}
::-moz-placeholder {
  color: #999999;
  width: 144px;
  height: 22px;
  line-height: 21px;
}
.btn button {
  width: 456px;
  height: 46px;
  background: #cccccc;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 40px;
}
.success {
  position: absolute;
  width: 530px;
  height: 307px;
  // border: 1px solid red;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 387px auto;
  background: #ffffff;
}
.tishi {
  width: 530px;
  height: 53px;
  display: flex;
  background: #eeeeee;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  line-height: 29px;
  color: #999999;
  padding: 0 24px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.information {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: 24px;
    height: 29px;
    line-height: 29px;
    box-sizing: border-box;
    color: #000000;
    margin-left: 10px;
  }
}
.wait {
  width: 224px;
  height: 51px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  line-height: 30px;
  color: #333333;
  padding: 20px 0 0;
}
.suc-bottom {
  display: flex;
  justify-content: center;
  button {
    width: 100px;
    height: 44px;
    background: #e53935;
    border-radius: 4px;
    margin: 40px 0;
    border: none;
    outline: none;
    a {
      color: #fff;
    }
  }
}
</style>