<template>
  <div>
    <Header v-if="!$route.meta.isHideHeader" />
    <router-view />
    <Footer />
    <!-- 希望在footer看不到公共的组件，在路由配置meta:true,不想看到取反就行 <Footer v-if="!$route.meta.isfooterShow"></Footer>-->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


