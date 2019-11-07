<template>
  <div class="top-w" @click="showOpt = false">
    <slot></slot>
    <h3 class="title">{{title}}</h3>
    <div class="right" @click.stop>
      <div class="more-icon-w"  @click="showBg"><span class="cubeic-more cube-icon"></span></div>
      <transition name="fade">
        <ul class="uls" v-show="showOpt">
          <li class="list" v-for="(item, index) in bgArr" :key="index" @click="changeOne(item, index)">{{item.list}}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showOpt: false,
      currentIndex: -1,
      bgArr: [
        {
          list: '紫色',
          cls: 'purple',
          color: '#7e57c2'
        },
        {
          list: '蓝色',
          cls: 'blue',
          color: '#009688'
        },
        {
          list: '灰色',
          cls: 'gray',
          color: '#474a4f'
        }
      ]
    }
  },
  methods: {
    showBg () {
      this.showOpt = true
    },
    changeOne (item, index) {
      this.currentIndex = index
      this.showOpt = false
      localStorage.setItem('__bgColor__', item.cls)
      document.getElementsByTagName('body')[0].className = item.cls
    }
  },
  created () {
    if (localStorage.getItem('__bgColor__')) {
      document.getElementsByTagName('body')[0].className = localStorage.getItem('__bgColor__')
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped lang="stylus">
  themeColor = #009688
  .top-w
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 50px
    display: flex
    align-items center
    justify-content space-between
    background-color: themeColor
    padding: 0 10px
    box-sizing border-box
    z-index: 80
    >>> .goback
          font-size: 16px
          color #fff
          position: fixed
          height: 50px
          line-height: 50px
          left: 0
          top: 0
          padding: 0 10px
  .logo
      padding: 10px
      position: absolute
      left: 0
      color #fff
      font-size: 16px
      img
        width: 30px
    .title
      color #fff
      width: 100%
      font-size: 16px
      font-weight: bold
      text-align: center
    .more-icon-w
      height: 100%
      transform rotate(90deg)
      display: flex
      align-items center
      justify-content center
      .cube-icon
        padding: 10px
        color #fff
        font-size: 20px
    .right
      position: absolute
      right: 0
      height: 100%
      .uls
        position: absolute
        top: 10px
        right: 10px
        width: 120px
        background-color: #fff
        padding: 6px 0
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        transform-origin: center top;
        &.fade-enter, &.fade-leave-to
          transform scaleY(0)
          opacity:0
        &.fade-enter-active, &.fade-leave-active
          transition-duration:.3s;
          transition-property:opacity
          transition: .3s;
        .list
          text-align: center
          color #000
          line-height: 48px
</style>
