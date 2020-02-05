<template>
  <div class="main-body">
    <div class="login-container">
      <div class="info-wrap">
        <div v-show="!userLogin" class="login">
          <p>请登录</p>
          <p>初次登录时：账号与密码均为学号</p>
          <div><input type="text" v-model="userMsg.username" />
          <font-awesome-icon
                class="icon user"
                :icon="['fas', 'user']"
              /></div>
          <div>
            <font-awesome-icon
                class="icon lock"
                :icon="['fas', 'lock']"
              />
            <input
              type="password"
              v-model="userMsg.password"
              class="password"
            />
            <span>
              <font-awesome-icon
                class="icon eye"
                :icon="['fas', 'eye-slash']"
                v-show="!passwordHidden"
                @click="runPasswordHidden"
              />
              <font-awesome-icon
                class="icon eye"
                :icon="['fas', 'eye']"
                v-show="passwordHidden"
                @click="runPasswordHidden"
              />
            </span>
          </div>
          <input type="button" value="登录" @click="signIn()">
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
          <input type="button" value="退出" @click="signOut()">
        </div>
      </div>
      <div class="illustration-wrap">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="bg">
          <polygon points="0,100 100,0 100,100"/>
        </svg>
        <svg-icon v-for="(name, index) in svgName" :iconClass="name" :id="name" :key="index"></svg-icon>
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
      svgName: ['movie_night', 'watch_movie'],
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
    display flex
    position relative
    width 60%
    height 60%
    border-radius 20px
    background-color rgba(255,255,255,0.8)
    .illustration-wrap
      position relative
      width 45%
      border-radius 0 20px 20px 0
      background-color #d8e7f7
      .bg
        position absolute
        left -29px
        bottom 0
        width 30px
        height 100%
        fill #d8e7f7
      #watch_movie
        position absolute
        top -5%
        right 0
        height 100%
        width 40vw
      #movie_night
        position absolute
        bottom 10px
        right 10px
        z-index 999
    .info-wrap
      width 55%
      display flex
      align-items center
      justify-content center
      .login, .profile
        z-index 9999
        max-width 250px
        input
          width 100%
        .icon
          position absoluted
          top 0
          left 0
</style>