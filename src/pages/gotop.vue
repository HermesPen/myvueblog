<template>
  <transition>
    <div @click="toTop" v-show="showTop" class="me-to-top">
      <i class="el-icon-arrow-up"></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: "goTop",
  data() {
    return {
      showTop: false,
    };
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0; // 返回顶部
      this.showTop = false; // 返回顶部时不显示
    },
    needToTop() {
      let curHeight =
        document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动条高度
      if (curHeight < 300) {
        this.showTop = true;
      } else {
        this.showTop = false;
      }
    },
  },
  mounted() {
    // dom元素更新后执行
    this.$nextTick(() => window.addEventListener("scroll", this.needToTop));
  },
};
</script>
<style>
.me-to-top {
  background-color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
}

.me-to-top i {
  color: #00d1b2;
  display: block;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}
</style>