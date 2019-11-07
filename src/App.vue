<template>
  <div id="app">
    <input type="text" style="display: none">
    <input type="password" style="display: none">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
div,span,i,h1,h2,h3,img,input,body,html,ul,li, button, textarea,body,p
  padding: 0
  margin: 0
  box-sizing border-box
ul,li
  list-style none
button,input, textarea
  outline none
  border none
  resize none
</style>
