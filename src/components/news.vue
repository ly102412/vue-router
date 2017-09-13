<template>
  <div>
    <li v-for="news in newsArr">{{news}}</li>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        newsArr: [
          'new1','new2','new3'
        ]
      }
    }
  }
</script>
<style>
</style>
