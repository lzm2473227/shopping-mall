import Mock from "mockjs";
import banners from "./rbanners.json";
// import floors from "./rfloors.json";
// 一旦运行就会拦截Get请求，请求地址/mock/banners
// 并最后参数作为响应结果响应~
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});
// Mock.mock("/mock/floors", "get", {
//   code: 200,
//   "data|2": floors,
// });
// Mock.mock('/mock/banners',{code:200,data:banners})



// [
//   {
//     "id|+1": 1,
//     "imgUrl": "@image('738x519','@color')"
//   }
// ]
