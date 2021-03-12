import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
const Brand = () => import("../views/Brand");
const Learning = () => import("../views/Learning");
const Search = () => import("../views/Search");
const LearnDetails = () => import("../views/Learning/LearnDetails");
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
    meta: {
      isHideHeader: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideHeader: true,
    },
  },
  {
    path: "/brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/learning",
    name: "Learning",
    component: Learning,
    children: [{
      path: "learndetails",
      name: "LearnDetails",
      component: LearnDetails,
    }]
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
  },
  {
    path: "/",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
