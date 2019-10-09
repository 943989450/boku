import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)
import Mint from 'mint-ui';
Vue.use(Mint); 
import axios from 'axios';
Vue.prototype.$http = axios
import router from './assets/js/router.js'
import '../node_modules/mint-ui/lib/style.css'
import './assets/css/reset.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
