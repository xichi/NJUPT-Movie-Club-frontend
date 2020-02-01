import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
const store = new Vuex.Store({
    strict:true,
    state: {
       username: JSON.parse(sessionStorage.getItem('user')) || {},
    },
    getters:{

    },
    mutations: {

    },
    action:{

    }
})
export default store