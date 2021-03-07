import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入api模块所有分别暴露的函数, 封装到API对象中
import * as API from "./api";
import "./mock/mockServer";

// 将API对象保存到Vue的原型对象上 ===> 让所有组件对象都直接可见(不用再引入API)
Vue.prototype.$API = API;

Vue.config.productionTip = false;
import "../src/assets/style/reset.css";
import "./plugins/element.js";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
