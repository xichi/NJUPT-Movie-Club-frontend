import VueRouter from 'vue-router'

//一级路由
import index from '@/pages/index.vue'
import movieReview from '@/pages/movieReview/list.vue'
import weeklyMovie from '@/pages/weeklyMovie/list.vue'
import login from '@/pages/login.vue'

//二级路由
import MR_write from '@/pages/movieReview/write.vue'
import WM_details from '@/pages/weeklyMovie/details.vue'
import WM_recommend from '@/pages/weeklyMovie/recommend.vue'
import WM_FAQ from '@/pages/weeklyMovie/FAQ.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: index },
        { path: '/login', component: login },
        {
            path: '/movieReview',component: movieReview, children: [
                { path: 'write', component: MR_write }
            ]
        },
        {
            path: '/weeklyMovie', component: weeklyMovie, children: [
                { path: 'details/:time', component: WM_details },
                { path: 'recommend', component: WM_recommend },
                { path: 'FAQ', component: WM_FAQ }
            ]
        }
    ]
})

export default router