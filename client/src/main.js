/**
 * css imports
 */
import '@/assets/scss/index.scss'




/**
 * vue imports
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes/'
import App from './App.vue'

Vue.use(VueRouter)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


