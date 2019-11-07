import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 星辰变列表
      path: '/pageList',
      name: 'home',
      component: () => import('@/pages/home.vue')
    },
    { // 斗罗大陆音频列表
      path: '/douluodalu',
      name: 'douluodalu',
      component: () => import('@/pages/douluodalu.vue')
    },
    { // 斗罗大陆MP3
      path: '/video/:page',
      name: 'video',
      component: () => import('@/pages/video.vue')
    },
    { // 星辰变详情
      path: '/pages/:page',
      name: 'pages',
      component: () => import('@/pages/pages.vue')
    },
    { // 所有漫画
      path: '/',
      name: 'all',
      component: () => import('@/pages/all.vue')
    }
  ]
})
