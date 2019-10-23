import VueRouter from 'vue-router'

import index from './pages/index.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
    ]
})
export default router