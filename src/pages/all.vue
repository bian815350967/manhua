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
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
			  manhuaData: [
          {
            name: '星辰变',
            img: 'https://img001.yayxcc.com/images/cover/201804/1524124441EQr13r3zSnKgA4hP.jpg'
          },
          {
            name: '斗破苍穹',
            img: 'https://img001.yayxcc.com/images/cover/201806/1529455715_1tHF6zSxFrqvJg6.jpg'
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
