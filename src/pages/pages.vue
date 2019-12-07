<template>
  <div class="pages-w">
<!--    <div class="bg-m" ref="bgM" @click="closeDialog"></div>-->
    <fixed-top :title="title">
      <div class="back" @click="goback">返回</div>
    </fixed-top>
    <ul class="uls" v-if="this.$route.query.name === '星辰变'">
      <li v-for="(item, index) in imgsArr" :key="item" class="list" ref="xImgList">
<!--        https://mh1.zhengdongwuye.cn/upload/xingchenbian/446/0000.jpg-->
        <img :src="'https://mh1.zhengdongwuye.cn/upload/xingchenbian/' + pageIndex + '/000'+ index +'.jpg'" alt="" class="img" @click="reload(index, imgHref + pageM + '/' + item)">
        <div class="total-t">{{index + 1}} / {{totalImg}}</div>
      </li>
    </ul>
    <ul class="uls doupo-uls" v-if="this.$route.query.name === '斗破苍穹'">
      <li v-for="(item, mindex) in totalImg" :key="queryPage + '' + item" class="list" ref="dImgList" v-if="pageIndex < 764">
        <img class="img" :src="'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp'" alt="" @click="reload(mindex, 'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp')">
        <div class="total-t">{{mindex + 1}} / {{totalImg}}</div>
      </li>
      <li v-for="(item, mindex2) in totalImg" :key="queryPage + '' + item" class="list" ref="dImgList" v-if="pageIndex >= 764">
        <img class="img" :src="'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话GQ/' + item + '.jpg-mht.middle.webp'" alt="" @click="reload(mindex2, 'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp')">
        <div class="total-t">{{mindex2 + 1}} / {{totalImg}}</div>
      </li>
    </ul>
    <ul class="uls doupo-uls" v-if="this.$route.query.name === '斗罗大陆'" ref="ulDlo">
      <li v-for="(item, mindex) in totalImg" :key="queryPage + '' + item" class="list" ref="dImgList" v-if="pageIndex < 600">
<!--        https://mh1.zhengdongwuye.cn/upload/douluodaliu/70/0001.jpg-->
        <img class="img" :src="'https://mhpic.manhualang.com/comic/D/斗罗大陆拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp'" alt="" @click="reload(mindex, 'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp')" >
        <div class="total-t">{{mindex + 1}} / {{totalImg}}</div>
      </li>
      <li v-for="(item, mindex) in totalImg" :key="queryPage + '' + item" class="list" ref="dImgList" v-if="pageIndex >= 600">
        <img class="img" :src="'https://mhpic.manhualang.com/comic/D/斗罗大陆拆分版/'+ queryPage + '话GQ/' + item + '.jpg-mht.middle.webp'" alt="" @click="reload(mindex, 'https://mhpic.manhualang.com/comic/D/斗破苍穹拆分版/'+ queryPage +'话/' + item + '.jpg-mht.middle.webp')" >
        <div class="total-t">{{mindex + 1}} / {{totalImg}}</div>
      </li>
    </ul>
<!--    底部-->
    <div class="bottom-fixed">
      <div class="current-z" v-show="imgsArr">{{title}} <span class="page-i">{{currentPage}} / {{totalImg}}</span>     {{timeHt}}</div>
      <div class="menu-bottom">
        <div class="list" @click.stop="showMenu">
          <span>目录</span>
        </div>
        <div class="list" @click="gotoPage(-1)">
          <span>上一话</span>
        </div>
        <div class="list" @click="gotoPage(1)">
          <span>下一话</span>
        </div>
        <div class="list" @click.stop="lightFn">
          <span>亮度</span>
        </div>
      </div>
    </div>
    <div class="dialog-msg" v-show="dialogMsg">{{dialogMsg}}</div>
    <div class="bg" v-show="slideShow" @click="closeDialog"></div>
    <transition name="slideleft">
      <div class="fixed-left" v-show="slideShow">
        <div class="catalogue-w">
          <h3 class="menu-title">章节目录</h3>
          <div class="sequence-w">
            <span class="sequence" :class="{'active': activeShow}" @click="checkFn(true)">正序↓</span>
            <span class="sequence" :class="{'active': !activeShow}" @click="checkFn(false)">倒序↑</span>
          </div>
        </div>
        <div class="input-w">
          <input type="text" placeholder="您想跳转到的位置" class="input-t" @input="inputNum('pageNumber')" v-model.trim="pageNumber">
          <div class="link" @click="gotoPage(pageNumber, 1)">跳转</div>
        </div>
        <ul class="m-uls" v-if="this.$route.query.name === '星辰变'">
          <li class="m-list" v-for="(item, index) in imgData" :key="index" @click="gotoPage(indexM(index), 2)">第{{indexM(index)}}话</li>
        </ul>
        <ul class="m-uls" v-if="this.$route.query.name === '斗破苍穹' || this.$route.query.name === '斗罗大陆'">
          <li class="m-list" v-for="(item, index) in totalPage" :key="index" @click="gotoPage(indexM(index), 2)">第{{indexM(index)}}话</li>
        </ul>
      </div>
    </transition>
    <transition name="slidebottom">
      <div class="fixed-bottom" v-show="lightShow">
        <div class="prodress" ref="progress" @click="progressClick">
          <div class="solid"
               ref="progressBtn"
               @touchstart.prevent="progressTouchStart"
               @touchmove.prevent="progressTouchMove"></div>
        </div>
        <div class="t-n">
          <span>亮</span>
          <span>暗</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        totalPage: 776,
        douluoPage: 647,
        totalImg: 12,
        timer3: null,
        lightShow: false,
        btnWidth: {
          type: Number,
          default: 0
        },
        touchInfo: {
          initiated: false
        },
        percent: {
          default: 0
        },
        pageX: 0,
        dialogMsg: '',
        pageNumber: '',
        slideShow: false,
        activeShow: true,
        currentPage: 1,
        pageM: 0,
        imgHref: 'https://img001.yayxcc.com/images/comic/59/',
        imgData: require('@/api/data.json'),
        imgsArr: [],
        timeHt: '',
        listHeight: [],
        queryPage: 0,
        queryName: this.$route.query.name,
        pageIndex: Number(this.$route.params.page)
      }
    },
    watch: {
      '$route': 'getRoute'
    },
    mounted () {
      this.btnWidth = document.getElementsByClassName('prodress')[0].clientWidth
      this.queryPage = Number(this.$route.params.page) + 1
      let _this = this
      window.onbeforeunload = e => {      // 离开
        _this.getLocalStorage()
      };
      if (this.$route.query.name === '斗破苍穹') {
        this.imgsArr = 12
      } else if (this.$route.query.name === '星辰变') {
        this.totalImg = this.imgsArr.length
      } else if (this.$route.query.name === '斗罗大陆') {
        this.totalImg = 12
        this.imgsArr = 12
      }
      setTimeout(() => {
        window.addEventListener('scroll', this.scrollPage)
      }, 2000)
    },
    computed: {
      title() {
        let page = Number(this.pageIndex) + 1
        return `第${page} 话`
      }
    },
    created() {
      this.getImg()
      this.cutDown()
    },
    beforeDestroy () {
      this.getLocalStorage()
      clearInterval(this.timer3)
    },
    methods: {
      scrollPage () {
        let disTop = document.documentElement.scrollTop || document.body.scrollTop
        let height = 0
        this.listHeight.push(height)
        if ( this.$refs.xImgList) {
          this.imgsArr.forEach((item, index) => {
            height +=  500
            this.listHeight.push(height)
          })
          this.imgsArr.forEach((item, index) => {
            let height1 = this.listHeight[index]
            let height2 = this.listHeight[index + 1]
            if (height1 <= disTop && disTop < height2) {
              this.currentPage = index + 1
            }
          })
        } else if (this.$refs.dImgList) {
          for (let m = 0; m < this.totalImg; m++) {
            height += 500
            this.listHeight.push(height)
          }
          for (let n = 0; n < this.totalImg; n++) {
            let height1 = this.listHeight[n]
            let height2 = this.listHeight[n + 1]
            if (height1 <= disTop && disTop < height2) {
              this.currentPage = n + 1
            }
          }
        }
      },
      cutDown () {
        function ifTime (value) { //  判断时间是否是个位数
          if (value < 10) {
            return '0' + value
          }
          return value
        }
        let start = new Date().getTime();
        this.timer3 = setInterval(() => {
          let now = new Date().getTime();
          if (now - start >= 900) {
            let newTime = new Date()
            let day = ifTime(newTime.getDate())
            let month = ifTime(newTime.getMonth() + 1)
            let year = newTime.getFullYear()
            let hours = ifTime(newTime.getHours())
            let min = ifTime(newTime.getMinutes())
            let sec = ifTime(newTime.getSeconds())
            this.timeHt = month + '-' + day + ' ' + hours + ':' + min + ':' + sec
          }
        }, 1000)
      },
      // 重新加载图片
      reload (index, url) {
        this.$refs.imgList[index].children[0].src = url
      },
      // 亮度背景
      closeDialog () {
        this.slideShow = false
        this.lightShow = false
      },
      // 亮度弹窗
      lightFn () {
        this.lightShow = !this.lightShow
      },
      // 点击按钮
      progressTouchStart(e) {
        // 记录touch事件已经初始化
        this.touchInfo.initiated = true
        // 点击位置
        this.touchInfo.startX = this.$refs.progressBtn.offsetLeft
        // 点击时进度条长度
        this.touchInfo.left = this.$refs.progress.clientWidth
      },
      // 开始移动
      progressTouchMove(e) {
        if (!this.touchInfo.initiated) {
          return
        }
        // 计算移动距离
        this.pageX = e.touches[0].pageX
        this._setOffset(this.pageX)
      },
      // 进度条点击事件
      progressClick(e) {
        // 设置进度条及按钮偏移
        this._setOffset(e.offsetX)
      },
      // 设置偏移
      _setOffset(offsetWidth) {
        // 设置进度长度随着百分比变化
        // 设置按钮随着百分比偏移
        if (offsetWidth < 0) {
          offsetWidth = 0
        } else if (offsetWidth > this.$refs.progress.clientWidth - 10) {
          offsetWidth = this.$refs.progress.clientWidth - 10
        }
        this.$refs.progressBtn.style.left = `${offsetWidth}px`
        let opacity = offsetWidth / (this.$refs.progress.clientWidth - 10)
        if (opacity > 0.7) opacity = 0.7
        this.$refs.bgM.style.opacity = opacity
      },
      getLocalStorage () {
        if (this.$route.query.name === '斗破苍穹') {
          localStorage.setItem('__doupoPage__', this.pageIndex)
        } else if (this.$route.query.name === '星辰变') {
          localStorage.setItem('__xPage__', this.pageIndex)
        } else if (this.$route.query.name === '斗罗大陆') {
          localStorage.setItem('__douluoPage__', this.pageIndex)
        }
      },
      // 返回上一页
      goback () {
        this.getLocalStorage()
        clearInterval(this.timer3)
        this.$router.push({
          path: '/pageList',
          query: {
            name: this.$route.query.name
          }
        })
      },
      // 第几话
      indexM (index) {
        let total = 0
        if (this.$route.query.name === '斗破苍穹') {
          total = this.totalPage
        } else if (this.$route.query.name === '星辰变') {
          total = this.imgData.length
        } else if (this.$route.query.name === '斗罗大陆') {
          total = this.douluoPage
        }
        if (this.activeShow === true) return index + 1
        if (this.activeShow === false) return total - index
      },
      // input 搜索第几话
      inputNum (field) {
        let val = this[field]
        if (!/^\d*\.{0,1}\d{0,2}$/.test(val)) { // 不能输入特殊符号+-等,不能输入多个小数点，不能小数点后面超过2位小数
          this[field] = val.substring(0, val.length - 1)
        }
        if (/^\./.test(this[field])) { // 如果是"."
          this[field] = ''
        }
        this.currentIndex = -1
        this[field] = this[field].replace(/[^0-9/.]/g, '') // 只能是数字或者.
        if (this[field] < 1) {
          this[field] = ''
        } else if (this[field] > this.imgData.length && this.queryName === '星辰变') {
          this[field] = this.imgData.length
        } else if (this[field] > this.totalPage && this.queryName === '星辰变') {
          this[field] = this.totalPage
        } else if (this[field] > this.douluoPage && this.queryName === '斗罗大陆') {
          this[field] = this.douluoPage
        }
      },
      // 显示目录
      showMenu () {
        this.slideShow = true
        this.lightShow = false
      },
      // 正序倒序
      checkFn (flag) {
        this.activeShow = flag
      },
      // watch路由，获取图片数据
      getRoute () {
        this.pageM = this.pageIndex + 116583
        this.imgsArr = this.imgData[this.pageIndex]
        if (this.$route.query.name === '星辰变') {
          this.totalImg = this.imgsArr.length
        } else {
          this.totalImg = 12
        }
        this.queryPage = Number(this.$route.params.page) + 1
      },
      // 获取数据
      getImg() {
        this.pageM = this.pageIndex + 116583
        this.imgsArr = this.imgData[this.pageIndex]
      },
      doupoPage () {
        if (Number(flag) === 1) { // 下一页
          let totalPage = 776
          if (this.pageIndex === totalPage) {
            this.dialogMsg = '没有了，已经是最后一话了'
            setTimeout(() => {
              this.dialogMsg = ''
            }, 2000)
            return
          }
          page = this.pageIndex += 1
        } else { // 上一页
          if (this.pageIndex === 0) {
            this.dialogMsg = '这已经是第一话了'
            setTimeout(() => {
              this.dialogMsg = ''
            }, 2000)
            return
          }
          page = this.pageIndex -= 1
        }
      },
      // 跳转
      gotoPage (flag, temp) {
        let page
        if (temp) { // 弹窗跳转页面
          page = Number(flag) - 1
          this.slideShow = false
          this.pageIndex = page
          this.pageNumber = ''
        } else {
          if (Number(flag) === 1) { // 下一页
            if (this.pageIndex === this.imgData.length - 1) {
              this.dialogMsg = '没有了，已经是最后一话了'
              setTimeout(() => {
                this.dialogMsg = ''
              }, 2000)
              return
            }
            page = this.pageIndex += 1
          } else { // 上一页
            if (this.pageIndex === 0) {
              this.dialogMsg = '这已经是第一话了'
              setTimeout(() => {
                this.dialogMsg = ''
              }, 2000)
              return
            }
            page = this.pageIndex -= 1
          }
        }
        page = Number(page)
        this.imgsArr = this.imgData[page]
        this.$router.push({
          path: '/pages/' + page,
          query: {name: this.$route.query.name}
        })
      }
    },
    components: {
      fixedTop: resolve => require(['@/components/fixedTop.vue'], resolve),
    }
  }
</script>

<style scoped lang="stylus">
  .pages-w
    padding: 60px 0
    .bg-m
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      height: 100%
      -webkit-tap-highlight-color: rgb(0,0,0)
      background: rgb(0,0,0)
      opacity .1
    .fixed-bottom
      position: fixed
      width: 100%
      bottom: 50px
      left: 0
      background: rgba(0,0,0, .6)
      padding: 30px 10px 10px 10px
      transform: translate(0, 0)
      &.slidebottom-enter, &.slidebottom-leave-to
        transform: translate(0, 100%)
      &.slidebottom-enter-active,&.slidebottom-leave-active
        transition: all .3s linear;
      .prodress
        width: 100%
        height: 2px
        background-color: #fff
        position: relative
        .solid
          position: absolute
          left: 0
          top: -7px
          width: 15px
          height: 15px
          background-color: #fff
          border-radius 50%
    .t-n
      margin-top: 10px
      display: flex
      align-items center
      justify-content space-between
      color #2299dd
    .bg
      content: ''
      position: fixed
      left: 0
      top: 0
      bottom: 0
      right: 0
      width: 100%
      height: 100%
      z-index: 200
      background-color: rgba(0,0,0,.7)
    .dialog-msg
      position: fixed
      left: 50%
      white-space nowrap
      transform translateX(-50%)
      bottom: 60px
      color #fff
      border-radius 4px
      padding: 10px
      background-color: rgba(0,0,0,.7)
    .fixed-left
      position: fixed
      left: 0
      top: 0
      bottom: 0
      width: 80%
      background-color: #fff
      z-index: 1000
      overflow auto
      &.slideleft-enter, &.slideleft-leave-to
        transform: translate(-100%, 0)
      &.slideleft-enter-active,&.slideleft-leave-active
        transition: .3s;
      .input-w
        display: flex
        align-items center
        padding: 10px
        .input-t
          flex 1
          height: 40px
          border: 1px solid #ccc
          font-size: 16px
          border-radius 4px
          color #000
          padding: 0 10px
        .link
          border-radius 4px
          margin-left: 10px
          width: 60px
          height: 40px
          line-height: 40px
          background-color: #2299dd
          color #fff
          text-align: center
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
      .m-uls
        position: fixed
        top: 118px
        bottom: 0
        width: 80%
        overflow: auto
        .m-list
          width: 100%
          padding-left: 16px
          height: 46px
          line-height: 46px
          border-bottom: 1px solid #ccc
          color #000
          font-size: 14px
    .back
      font-size: 16px
      color #fff
      position: fixed
      height: 50px
      line-height: 50px
      left: 0
      top: 0
      padding: 0 10px
    .bottom-fixed
      position: fixed
      bottom: 0
      left: 0
      z-index: 100
      width: 100%
      font-size: 0
      .current-z
        display: inline-block
        background-color: rgba(0,0,0,.8)
        color #fff
        font-size: 12px
        padding: 0 10px
        border-radius 0 10px 0 0
        .page-i
          margin: 0 10px
      .menu-bottom
        height: 50px
        width: 100%
        display: flex
        align-items center
        background-color: #009688
      .list
        flex 1
        display: flex
        align-items center
        justify-content center
        flex-direction column
        height: 100%
        span
          color #fff
          font-size: 14px
    .uls
      display: flex
      align-items center
      flex-wrap wrap
      flex-direction column
      width: 100%
      padding-bottom: 50px
      &.doupo-uls
        width auto
      .list
        min-height 360px
        display: flex
        align-items center
        justify-content center
        flex-direction column
        .total-t
          font-size: 14px
        .img
          padding: 6px
          width: 100%
          max-width 800px
          display: block
          margin-bottom: 10px
          border: 1px solid #eee
</style>
