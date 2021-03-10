<template>
  <div class="login">
    <div class="header-center">
      <div class="logo-content">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/images/home/logo.png" alt="正品汇logo" />
          </router-link>
          <div class="logo-text">
            <h1>正品汇</h1>
            <div>kaihua.com</div>
          </div>
        </div>
      </div>
      <div>
        <div class="welcome">欢迎登录！</div>
      </div>
    </div>
    <div class="login-content">
      <div class="content">
        <div class="content-left">
          <div class="describe">
            <p>正品汇商城</p>
            <div>
              <span class="icon"></span>
              <span>门店的订货平台</span>
              <span class="icon"></span>
            </div>
          </div>
          <div class="guarantee">
            <div class="d-icon">
              <img src="../../assets/images/ic-品类齐全.png" alt="" />
              <div>品类齐全</div>
            </div>
            <div class="d-icon">
              <img src="../../assets/images/ic-厂家优惠.png" alt="" />
              <div>厂家优惠</div>
            </div>
            <div class="d-icon">
              <img src="../../assets/images/ic-正品保障.png" alt="" />
              <div>正品保障</div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="way">
            <p>扫码登录</p>
            <p style="width: 0px; height: 24px; border: 1px solid #dddddd"></p>
            <p class="active">账户登录</p>
          </div>
          <div class="inp">
            <div class="inp-id">
              <div class="icon-img">
                <img src="@/assets/images/ic-账号.png" alt="账号" />
              </div>
              <input type="text" placeholder="请输入账号" />
            </div>
            <div class="inp-id">
              <div class="icon-img">
                <img src="@/assets/images/ic-密码.png" alt="密码" />
              </div>
              <input
                type="password"
                placeholder="请输入动态密码"
                name="pass"
                id="pass"
              />
              <div class="icon-show" @click="show">
                <img
                  id="show"
                  src="../../assets/images/ic-隐藏密码.png"
                  alt="隐藏密码"
                />
              </div>
            </div>
          </div>
          <div class="btn">
            <button>登录</button>
          </div>
          <div class="sign-up">
            <div class="at-once">
              <router-link to="/register">立即注册</router-link>
            </div>
            <img src="../../assets/images/ic-去注册.png" alt="去注册" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RegisterHeader from "@/components/RegisterHeader";
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    show() {
      // var pass = document.getElementById("pass");
      // pass.type = "text";
      // console.log(pass);
      // var imgs = document.getElementById("show");
      // imgs.src= 
      // console.log(imgs);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
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
  height: 37px;
  font-size: 28px;
  line-height: 36px;
  color: #333;
  margin-left: 60px;
}
.login-content {
  width: 100%;
  height: 630px;
  background-image: url("../../assets/images/bj.png");
  border-top: 1px solid #dddddd;
}
.content {
  width: 1200px;
  height: 630px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-left {
  height: 411px;
}
.describe {
  width: 478px;
  height: 266px;
  background-image: url("../../assets/images/方框.png");
  margin: 0 auto;
  text-align: center;
  padding: 48px 0 64px;
  box-sizing: border-box;
  p {
    display: inline-block;
    width: 398px;
    height: 110px;
    line-height: 100px;
    font-size: 76px;
    color: #e80c00;
  }
  div {
    height: 42px;
    line-height: 52px;
    font-size: 32px;
    color: #e80c00;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: inline-block;
      width: 51px;
      height: 0px;
      border: 2px solid #e80c00;
      margin: 0 25px;
    }
  }
}
.guarantee {
  width: 478px;
  display: flex;
  justify-content: space-between;
  margin: 30px 26px 0;
  img {
    width: 74px;
    height: 74px;
  }
  div {
    width: 88px;
    height: 29px;
    font-size: 22px;
    color: #e80c00;
    margin-top: 12px;
  }
}
.content-right {
  width: 360px;
  height: 411px;
  background: #ffffff;
  border: 1px solid #dddddd;
}
.way {
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  p {
    width: 72px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #666666;
  }
  .active {
    color: #e80c00;
  }
}
.inp-id .icon-img {
  box-sizing: border-box;
  float: left;
  width: 40px;
  height: 40px;
  background: rgb(233, 236, 239);
  border-right: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
}
.icon-show {
  box-sizing: border-box;
  float: right;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inp-id {
  box-sizing: border-box;
  width: 320px;
  height: 42px;
  border: 1px solid #ddd;
  margin-top: 27px;
  margin-left: 50%;
  transform: translateX(-50%);
  input {
    box-sizing: border-box;
    margin-bottom: 1px;
    outline: none;
    height: 42px;
    padding-left: 10px;
    border: 0;
  }
}
.show {
  width: 20px;
  height: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 16px;
}
.content-right button {
  width: 320px;
  height: 42px;
  background: #e80c00;
  border: 0;
  outline: none;
  color: #ffffff;
}
.sign-up {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  img {
    width: 12px;
    height: 12px;
  }
}
.at-once {
  width: 64px;
  height: 21px;
  font-size: 16px;
  line-height: 21px;
  a {
    color: #e80c00;
  }
}
</style>