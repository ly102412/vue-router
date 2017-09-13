import Vue from 'vue'
import app from './components/app.vue'
import router from './router'


new Vue({
  el: '#app',
  render: h => h(app),
  router
})
