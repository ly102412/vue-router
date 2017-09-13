<template>
  <div>
    <ul>
      <li v-for="msg in message">
        <router-link :to="`/home/message/detail/${msg.id}`">
          {{msg.title}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        message: []
      }
    },

    mounted(){
      setTimeout(() => {
        this.message = [
          {id: 1,title: "message1"},
          {id: 2,title: "message2"},
          {id: 3,title: "message3"}
        ]
      },1000)
    }
  }
</script>
<style>
</style>
