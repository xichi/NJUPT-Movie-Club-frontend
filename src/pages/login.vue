<template>
  <div>
    <my-header></my-header>
    <div class="main-body">
      <div class="login-container">
        <my-tabs
          v-show="!userLogin"
          :tabList="tabList"
          @toggleTab="updateCurrentTab"
          class="tabs-wrap"
        >
          <div :slot="tabList[0].id" class="sign-in tabs">
            <div class="text-input">
              <input
                type="text"
                class="firstInput"
                v-model="userMsg.username"
                placeholder="请输入用户名或邮箱"
                @focus="textAnime"
              />
              <font-awesome-icon
                class="icon user"
                :icon="['fas', 'user']"
                size="xs"
              />
              <div class="line"></div>
            </div>
            <div class="text-input">
              <font-awesome-icon
                class="icon lock"
                :icon="['fas', 'lock']"
                size="xs"
              />
              <input
                type="password"
                v-model="userMsg.password"
                class="password"
                placeholder="请输入密码"
                @focus="textAnime"
              />
              <div class="line"></div>
              <font-awesome-icon
                class="icon eye"
                :icon="['fas', 'eye-slash']"
                v-show="!passwordHidden"
                @click="runPasswordHidden"
                size="xs"
              />
              <font-awesome-icon
                class="icon eye"
                :icon="['fas', 'eye']"
                v-show="passwordHidden"
                @click="runPasswordHidden"
                size="xs"
              />
              <div class="options">
                <div>忘记密码</div>
                <div @click="toggleManageCheck">管理员登录
                  <span class="checked" v-show="manageChecked">✔</span>
                </div>
              </div>
            </div>
            <input
              type="button"
              class="signIn-btn"
              value="登录"
              @click="signIn()"
            />
          </div>
          <div :slot="tabList[1].id" class="sign-up tabs">
            <div class="text-input">
              <input
                type="text"
                class="firstInput"
                v-model="userMsg.username"
                placeholder="请输入邮箱"
                @focus="textAnime"
              />
              <font-awesome-icon
                class="icon user"
                :icon="['fas', 'user']"
                size="xs"
              />
              <div class="line"></div>
            </div>
            <div class="text-input">
              <font-awesome-icon
                class="icon email"
                :icon="['fas', 'envelope']"
                size="xs"
              />
              <input
                type="text"
                ref="firstInput"
                v-model="userMsg.password"
                placeholder="请输入验证码"
                @focus="textAnime"
              />
              <span class="verification-code">发送验证码</span>
              <div class="line"></div>
            </div>
            <input
              type="button"
              class="signIn-btn"
              value="注册"
              @click="signIn()"
            />
          </div>
        </my-tabs>
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
          <input type="button" value="退出" @click="signOut()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { USER_SIGNOUT, USER_SIGNIN } from "@/store";
import myHeader from "_c/common/Header";
import myTabs from "_c/base/tabs";

export default {
  components: {
    myHeader,
    myTabs
  },
  data() {
    return {
      tabList: [
        { id: 0, name: "登录" },
        { id: 1, name: "注册" }
      ],
      userMsg: {
        id: 0,
        username: "",
        email: "",
        password: "",
      },
      passwordHidden: true,
      currentTab: 0,
      manageChecked: false
    };
  },
  computed: {
    ...mapState({
      userLogin: state => state.userLogin,
      userInfo: state => state.userInfo
    })
  },
  watch: {
    currentTab: async function() {
      await this.$nextTick();
      document.querySelector(".firstInput").focus();
    }
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
    },
    textAnime(e) {
      let line = e.currentTarget.parentNode.getElementsByClassName("line")[0];
      line.style.width = "100%";
      line.style.opacity = "1";
    },
    updateCurrentTab(e) {
      this.currentTab = e;
    },
    toggleManageCheck(){
      this.manageChecked = !this.manageChecked;
    },
    sendEmail(){

    }
  },
  mounted() {
    document.querySelector(".firstInput").focus();
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
  font-size 20px
  background-image url("../assets/pic/home-bg.jpg")
  .login-container
    display flex
    position relative
    width 350px
    height 350px
    border-radius 20px
    background-color #fff
    display flex
    align-items center
    justify-content center
    box-shadow 0 0 10px 0 rgba(0,0,0,0.2)
    input[type='text'], input[type='password']
      width 100%
      border none
      outline none
      background-color rgba(255,255,255,0.5)
    input[type="button"]
      width 80%
      margin-top 70px
      padding 5px 0
      color #ffffff
      background-color #57c3c2
      border none
      outline none
      border-radius 5px
      letter-spacing 1em
      padding-left 1em
      text-align center
      vertical-align middle
    .tabs-wrap
      height 90%
      width 70%
      z-index 999
      .text-input
        position relative
        margin-top 40px
        text-indent 1em
        .line
          width 0
          height 2px
          border-radius 1px
          margin 0 auto
          margin-top 5px
          background-color #57c3c2
          opacity 0.3
          transition all .6s ease-in
        .icon
          position absolute
          bottom 9px
          left 2px
          color #c4c4c4
        .eye
          left 100%
          transform translateX(-120%)
      .sign-in
        .options
          position absolute
          bottom 0
          right 0
          transform translateY(200%)
          color #3085a3
          font-size 12px
          cursor pointer
          > div
            display inline-block
            &:nth-child(1)
              padding 0 8px
            &:nth-child(2)
              position relative
              .checked
                position absolute
                bottom -20%
                left 50%
                transform translateX(-50%)
                color #de1c31
      .sign-up
        .verification-code
          position absolute
          bottom 9px
          right 0
          color #3085a3
          font-size 13px
          cursor pointer
          &:hover
            color #999
@media screen and (max-width: 767px)
  .main-body .login-container
    width 280px
</style>
