import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
const Search = () => import("../views/Search");
// const Detail = () => import("../views/Detail");
// const AddCartSuccess = () => import("../views/AddCartSuccess");
// const ShopCart = () => import("../views/ShopCart");
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
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
