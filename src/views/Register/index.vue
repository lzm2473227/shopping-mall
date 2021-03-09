<template>
  <div>
    <RegisterHeader />
    <div class="register" v-if="isShow">
      <div class="register-top">
        <div class="progress-first">
          <span class="num">1</span>
          <div class="text active">验证手机号</div>
        </div>
        <div class="progress">
          <span class="num primary">2</span>
          <div class="text">填写店铺信息</div>
        </div>
      </div>
      <div class="content">
        <label>手机号：</label>
        <input
          type="text"
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
        />
      </div>
      <div class="content code">
        <label>验证码：</label>
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="code"
          name="code"
        />
      </div>
      <div class="controls">
        <input type="checkbox" v-model="isAgree" name="isAgree" />
        <span>同意协议并注册<span class="a">《正品汇用户协议》</span> </span>
      </div>
      <div class="btn">
        <button @click="next">下一步</button>
      </div>
    </div>
    <RegisterShop v-else />
  </div>
</template>

<script>
import RegisterHeader from "@/components/RegisterHeader";
import RegisterShop from "@/views/Register/RegisterShop";
export default {
  name: "Register",
  data() {
    return {
      phone: "", //手机号
      code: "", //验证码
      isAgree: true, //默认同意勾选
      isShow: true,
    };
  },
  methods: {
    next() {
      this.isShow = false;
    },
  },
  components: {
    RegisterHeader,
    RegisterShop,
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  height: 620px;
  border-top: 1px solid #dddddd;
  text-align: center;
  .register-top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 61px 0 50px 0;
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
  background: #cccccc;
}
.progress-first {
  width: 228px;
  height: 5px;
  background: #7bbc52;
  .active.text {
    color: #7bbc52;
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
  background-color: #cccccc;
}
.register-top .text {
  margin-top: 20px;
  text-align: center;
  color: #cccccc;
}

.content label {
  display: inline-block;
  width: 64px;
  height: 22px;
  line-height: 21px;
  color: #333333;
  text-align: left;
  margin-right: 20px;
}
.content input {
  width: 372px;
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
.code {
  margin: 40px 0 24px 0;
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
}
.header-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 158px;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    width: 220px;
    img {
      height: 88px;
      width: 88px;
      padding: 30px 12px 40px 19px;
    }
  }
}
.logo-text {
  height: 90px;
  h1 {
    width: 96px;
    height: 42px;
    line-height: 106px;
    font-size: 32px;
    line-height: 42px;
    color: #333333;
  }
  div {
    width: 98px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    padding-top: 15px;
  }
}
.welcome {
  width: 112px;
  height: 37px;
  font-size: 28px;
  line-height: 36px;
  color: #333;
  margin-left: 60px;
}
</style>