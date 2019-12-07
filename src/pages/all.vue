<template>
  <div class="all-w">
    <h3 class="title">所有漫画</h3>
    <ul class="all-uls">
      <li class="all-list"
          v-for="(item, index) in manhuaData" :key="index"
          @click="gotoDetails(index)">
        <img :src="item.img" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <h3 class="title">友情链接</h3>
    <div class="link-w">
      <a href="https://bian815350967.github.io/mapp/vueCommunity">VUE社区</a>
      <a href="https://bian815350967.github.io/mapp/elm">饿了么外卖</a>
      <a href="https://bian815350967.github.io/mapp/douban">豆瓣网</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
			  manhuaData: [
          {
            name: '星辰变',
            img: 'https://mh1.zhengdongwuye.cn/pic/manhua/images/8011832018717.jpg'
          },
          {
            name: '斗破苍穹',
            img: 'https://image.yqmh.com/mh/25934.jpg-300x400.webp'
          },
          {
            name: '斗罗大陆',
            img: 'https://image.mhxk.com/mh/25933.jpg-480x640.webp'
          },
          {
            name: '斗罗大陆音频',
            img: 'https://image.mhxk.com/mh/25933.jpg-480x640.webp'
          }
        ]
      }
		},
    methods: {
      gotoDetails (index) {
        let name = this.manhuaData[index].name
        if (index === 3) {
          this.$router.push({path: '/douluodalu'})
        } else {
          this.$router.push({path: '/pageList', query: {name}})
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.all-w
  .title
    font-size: 16px
    font-weight:bold
    margin: 10px
  .link-w
    padding-left: 10px
    a
      margin-right: 20px
      color #2299dd
      text-decoration none
  .all-uls
    display: flex
    flex-wrap wrap
    max-width 800px
    .all-list
      width: 33.33%
      padding: 10px
      img
        width: 100%
        display: block
        border: 1px solid #ccc
      p
        font-size: 14px
        margin-top: 10px
</style>
