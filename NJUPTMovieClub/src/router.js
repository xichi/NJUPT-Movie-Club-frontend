import VueRouter from 'vue-router'

import index from '@/pages/index.vue'
import movieReview from '@/pages/movieReview/movieReview.vue'
import login from '@/pages/login.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/login',component:login},
        {path:'/movieReview',component:movieReview}
    ]
})

export default router