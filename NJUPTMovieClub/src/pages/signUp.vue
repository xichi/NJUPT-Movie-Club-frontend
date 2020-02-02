<template>
  <div class="main-body">
    <div class="sign-up-container">
      <div v-show="!userLogin">
        <p>请登录</p>
        <p>初次登录时：账号与密码均为学号</p>
        <div>用户名：<input type="text" v-model="userMsg.username" /></div>
        <div>密码：<input type="password" v-model="userMsg.password" /></div>
        <button @click="signIn()">登录</button>
      </div>
      <div v-show="userLogin">
        <p>欢迎回来，{{userInfo.username}}</p>
        <p>请及时修改你的密码呦~</p>
        <div>修改密码：<input type="text" v-model="userMsg.password" /></div>
        <button @click="signOut()">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { USER_SIGNOUT, USER_SIGNIN } from "@/store";

export default {
  data() {
    return {
      userMsg: {
        id: 0,
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({ 
      userLogin: state => state.userLogin,
      userInfo: state => state.userInfo,
      })
  },
  methods: {
    ...mapActions([USER_SIGNOUT, USER_SIGNIN]),
    signIn() {
      //this.$store.dispatch("USER_SIGNIN", this.userMsg);
      this.USER_SIGNIN(this.userMsg);
    },
    signOut() {
      this.USER_SIGNOUT();
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-body
  display flex
  justify-content center
  align-items center
  width 100vw
  height 100vh
  background-image url("../assets/pic/home-bg.jpg")
  .sign-up-container
    width 60%
    height 60%
    border-radius 20px
    background-color rgba(255,255,255,0.8)
</style>
