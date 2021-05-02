// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  loading: require('./assets/img/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/img/error_img.jpg')  //加载失败图片
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
