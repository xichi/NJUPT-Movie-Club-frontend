import VueRouter from 'vue-router'

const App = r => require.ensure([], () => r(require('./App.vue')), 'App')
const index = r => require.ensure([], () => r(require('@/pages/index/index.vue')), 'index')
const movieReview = r => require.ensure([], () => r(require('@/pages/movieReview/list.vue')), 'movieReview')
const weeklyMovie = r => require.ensure([], () => r(require('@/pages/weeklyMovie/list.vue')), 'weeklyMovie')
const login = r => require.ensure([], () => r(require('@/pages/login.vue')), 'login')
const profile = r => require.ensure([], () => r(require('@/pages/profile.vue')), 'profile')
const MR_write = r => require.ensure([], () => r(require('@/pages/movieReview/write.vue')), 'MR_write')
const MR_details = r => require.ensure([], () => r(require('@/pages/movieReview/details.vue')), 'MR_details')
const WM_details = r => require.ensure([], () => r(require('@/pages/weeklyMovie/details.vue')), 'WM_details')
const WM_recommend = r => require.ensure([], () => r(require('@/pages/weeklyMovie/recommend.vue')), 'WM_recommend')
const WM_FAQ = r => require.ensure([], () => r(require('@/pages/weeklyMovie/FAQ.vue')), 'WM_FAQ')

var router = new VueRouter({
    routes: [
        {
            path: '/', redirect: '/index', component: App,children: [
                { path: '/index', component: index },
                { path: '/login', component: login },
                { path: '/profile', component: profile },
                { path: '/movieReview', component: movieReview },
                { path: '/movieReview/write', component: MR_write },
                { path: '/movieReview/details/:id', component: MR_details },
                { path: '/weeklyMovie', component: weeklyMovie },
                { path: '/weeklyMovie/details/:time', component: WM_details },
                { path: '/weeklyMovie/recommend', component: WM_recommend },
                { path: '/weeklyMovie/FAQ', component: WM_FAQ }
            ]
        },

    ]
})

export default router