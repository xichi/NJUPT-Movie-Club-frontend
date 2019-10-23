import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './router.js'

/* import loading from './components/loading'
Vue.use(loading) */

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
