// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill' // 兼容ie
// 引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入
import api from './api/api'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/common/avatar.jpg'),
  loading: require('./assets/img/common/avatar.jpg'),
  attempt: 1
})

Vue.prototype.$fetch = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

// 进度条
NProgress.configure({
  showSpinner: false,
  bg: '#ff4081',
  minimum: 0.6,
  easing: 'ease',
  speed: 200
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
  NProgress.done()
})
