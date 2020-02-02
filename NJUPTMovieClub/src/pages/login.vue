<template>
  <div class="main-body">
    <div class="login-container">
      <div v-show="!userLogin" class="login">
        <p>请登录</p>
        <p>初次登录时：账号与密码均为学号</p>
        <div>用户名：<input type="text" v-model="userMsg.username" /></div>
        <div>
          密码：<input
            type="password"
            v-model="userMsg.password"
            class="password"
          />
          <span>
            <font-awesome-icon
              :icon="['fas', 'eye-slash']"
              v-show="!passwordHidden"
              @click="runPasswordHidden"
            />
            <font-awesome-icon
              :icon="['fas', 'eye']"
              v-show="passwordHidden"
              @click="runPasswordHidden"
            />
          </span>
        </div>
        <button @click="signIn()">登录</button>
      </div>
      <div v-show="userLogin" class="profile">
        <p>欢迎回来，{{ userInfo.username }}</p>
        <p>请及时修改你的密码呦~</p>
        <div>
          修改密码：<input
            type="text"
            v-model="userMsg.password"
            class="password"
          /><span>
            <font-awesome-icon
              :icon="['fas', 'eye-slash']"
              v-show="!passwordHidden"
              @click="runPasswordHidden"
            />
            <font-awesome-icon
              :icon="['fas', 'eye']"
              v-show="passwordHidden"
              @click="runPasswordHidden"
            />
          </span>
        </div>
        <button @click="signOut()">退出</button>
      </div>
      <div class="Login-illustration">
        <svg
          xmlns:vectornator="http://vectornator.io"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 500"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M 310.5 99.2 h 236.7 c 11 0 19.8 8.9 19.8 19.8 v 357.2 c 0 11 -8.9 19.8 -19.8 19.8 h -334.5"
            opacity=".973"
            fill="#49b4c9"
            id="Layer-1"
          />
        </svg>
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
      },
      passwordHidden: true
    };
  },
  computed: {
    ...mapState({
      userLogin: state => state.userLogin,
      userInfo: state => state.userInfo
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
    },
    runPasswordHidden() {
      this.passwordHidden = !this.passwordHidden;
      const passwords = document.getElementsByClassName("password");
      passwords.forEach(item => {
        if (this.passwordHidden) item.setAttribute("type", "password");
        else item.setAttribute("type", "text");
      });
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
  .login-container
    position relative
    width 60%
    height 60%
    border-radius 20px
    background-color rgba(255,255,255,0.8)
    .Login-illustration
      position absolute
      top 0
      left 0
      height 100%
      width 80%
      #Layer-1
        position absolute
        top 0
        left 0
</style>
