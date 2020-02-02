import VueRouter from 'vue-router'

import index from '@/pages/index.vue'
import movieReview from '@/pages/movieReview/movieReview.vue'
import signUp from '@/pages/signUp.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/signUp',component:signUp},
        {path:'/movieReview',component:movieReview}
    ]
})

export default router