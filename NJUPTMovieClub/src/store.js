import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export const USER_SIGNIN = 'USER_SIGNIN';   //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT'; //退出登录

const store = new Vuex.Store({
    strict:true,
    state: {
       userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
       userLogin: sessionStorage.getItem('userLogin') || false,
    },
    getters:{

    },
    mutations: {
        [USER_SIGNIN](state, userInfo) {
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            sessionStorage.setItem('userLogin', true);
            Object.assign(state.userInfo, userInfo);
            state.userLogin = sessionStorage.getItem('userLogin') ? JSON.parse(sessionStorage.getItem('userLogin')) : true;
        },
        [USER_SIGNOUT](state) {
            state.userLogin = false;
            state.userInfo = {};            
            //Object.keys(state).forEach(k => Vue.delete(state, k))
            sessionStorage.clear();
        }
    },
    actions:{
        [USER_SIGNIN]({commit}, userInfo) {
            commit(USER_SIGNIN, userInfo)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
})
export default store