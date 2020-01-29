import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import store from './store'

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
