<template>
  <div>
    <nav-bar />
    <router-view></router-view>
    <go-top></go-top>
    <my-footer></my-footer>
  </div>
</template>
<script>
import NavBar from "./nav";
import GoTop from "./gotop";
import MyFooter from "./footer";
export default {
  data() {
    return {};
  },
  components: { NavBar, GoTop, MyFooter },
};
</script>
<style scoped>
</style>