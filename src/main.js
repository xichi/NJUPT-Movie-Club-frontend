import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import store from './store'

Vue.config.productionTip = false;

/**
 * font awesome icon
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
 from '@fortawesome/vue-fontawesome'
 
library.add(fas, far, fab)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// svg 图标
import '@/icons'

/**
 * vue editor
 */
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
  
new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
