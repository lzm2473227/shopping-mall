import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
const RegisterShop = () => import("../views/Register/RegisterShop");
const Search = () => import("../views/Search");
// const Detail = () => import("../views/Detail");
// const AddCartSuccess = () => import("../views/AddCartSuccess");
const ShopCart = () => import("../views/ShopCart");
const Order = () => import("../views/Order");
const HelpCenter = () => import("../views/HelpCenter");
// const Trade = () => import("../views/Trade");
// const Pay = () => import("../views/Pay");
// const PaySuccess = () => import("../views/PaySuccess");
// const Center = () => import("../views/Center");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    children: [
      {
        path: "/registershop",
        name: "RegisterShop",
        component: RegisterShop,
        meta: {
          isHideHeader: true
        },
      }
    ],
    meta: {
      isHideHeader: true
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/helpcenter",
    name: "HelpCenter",
    component: HelpCenter,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
