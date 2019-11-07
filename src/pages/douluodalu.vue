<template>
  <div class="home-w">
    <fixed-top :title="title">
      <div class="goback" @click="goback">返回</div>
    </fixed-top>
    <div >
      <div class="banner-w">
        <div class="banner-img"></div>
        <div class="banner">
          <div class="left">
            <img src="https://image.mhxk.com/mh/25933.jpg-480x640.webp" alt="">
          </div>
          <div class="right">
            <p>更新至：第{{totalPage}}话</p>
            <p>作者：我吃西红柿</p>
            <p>类别：少年漫画</p>
            <div class="rading" @click="gotoRead(0)">开始阅读</div>
          </div>
        </div>
      </div>
      <div class="desc">简介：偷学一身绝世功夫，最后却选择了跳崖明志，造化弄人，转世后却依然是令人艳羡的正太一枚；两世生涯中，唐三经历了怎样的人生？第二世中，他天生双武魂，先天满魂力，却一度被人认为是废武魂……在诺丁学院，遇到了野蛮可爱的萝莉小舞，血雨腥风儿女情更长。</div>
    </div>
    <p class="desc-w" @click="gotoRead(prePage - 1)" v-show="prePage">
      <span>上次阅读到第<span class="light">{{prePage}}</span>话</span>
      <span class="light">继续阅读</span>
    </p>
    <div class="catalogue-w">
      <h3 class="menu-title">章节目录</h3>
      <div class="sequence-w">
        <span class="sequence" :class="{'active': activeShow}" @click="checkFn(true)">正序↓</span>
        <span class="sequence" :class="{'active': !activeShow}" @click="checkFn(false)">倒序↑</span>
      </div>
    </div>
    <div class="page-w">
      <ul class="uls">
        <li v-for="(item, index) in totalPage" :key="index" class="list" @click="gotoPage(index)">第{{indexM(item)}}集</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeShow: true,
        totalPage: 0,
        title: '斗罗大陆',
        prePage: ''
      }
    },
    mounted () {
      this.prePage = 1
      this.totalPage = 498
    },
    methods: {
      goback () {
        this.$router.push('/')
      },
      indexM (index) {
        if (this.activeShow === true) return index
        if (this.activeShow === false) return this.totalPage - index + 1
      },
      checkFn (flag) {
        this.activeShow = flag
      },
      gotoRead (page) {
        this.$router.push({
          path: `/video/${page}`
        })
      },
      gotoPage (index) {
        let page = 0
        if (this.activeShow === true) page = index
        if (this.activeShow === false) page = this.totalPage - index -1
        this.$router.push({
          path: `/video/${page}`
        })
      }
    },
    components: {
      fixedTop: resolve => require(['@/components/fixedTop.vue'], resolve),
    }
  }
</script>

<style scoped lang="stylus">
  .home-w
    padding-top: 50px
    .banner-w
      width: 100%
      position: relative
      margin-bottom: 10px
      .banner-img
        width: 100%
        height: 100%
        display: block
        position: absolute
        left: 0
        top: 0
        background: url("../assets/img/common/img_bg.png") no-repeat center / cover
        z-index: -1
      .banner
        display: flex
        align-items center
        padding: 10px 0
        .left
          width: 30%
          display: flex
          align-items center
          justify-content center
          img
            width: 80%
            display: block
        .right
          display: flex
          justify-content center
          flex-direction column
          flex 1
          font-size: 14px
          color #fff
          line-height: 2
          .rading
            padding: 0 10px
            width: 80px
            border: 1px solid #ccc
    .desc-w
      display: flex
      align-items center
      justify-content space-between
      font-size: 14px
      padding: 10px
      margin-top: 10px
      border-top: 1px solid #ccc
      border-bottom: 1px solid #ccc
      .light
        color #29d
    .catalogue-w
      font-size: 14px
      color #000
      display: flex
      align-items center
      justify-content space-between
      padding: 20px 10px
      .menu-title
        font-weight: bold
        font-size: 16px
      .sequence-w
        display: flex
        align-items center
        .sequence
          padding: 2px
          margin-left: 10px
          &.active
            color #2299dd
    .desc
      font-size: 14px
      color #000
      line-height: 1.5
      padding: 0 10px
    .page-w
      display: flex
      align-items center
      justify-content center
    .uls
      max-width 800px
      display: flex
      align-items center
      justify-content center
      flex-wrap wrap
      .list
        cursor pointer
        padding: 8px 10px
        width: 80px
        font-size: 14px
        text-align: center
        border: 1px solid #ccc
        background-color: #fff
        margin: 0 10px 10px 0
        white-space nowrap
        @media screen and (max-width: 330px)
          font-size: 12px
          width: 70px
          margin-right: 8px
        &:nth-child(4n)
          margin-right: 0
</style>
