<template>
  <div>
    <ul class="myHeader simpleHeader" v-if="simpleMode">
      <li class="backward" @click="goBack">
        <font-awesome-icon :icon="['far', 'caret-square-left']" size="2x"/>
      </li>
      <slot name="title" v-if="titleShow"></slot>
      <li class="home">
        <router-link to="/index"
          ><img src="../assets/pic/icon.png" alt=""
        /></router-link>
      </li>
    </ul>
    <ul class="myHeader" v-if="!simpleMode">
      <li class="home">
        <router-link to="/index"
          ><img src="../assets/pic/icon.png" alt=""
        /></router-link>
      </li>
      <slot name="write"></slot>
      <slot name="submit"></slot>
      <div class="mobile-icon">
        <font-awesome-icon
          :icon="['fas', 'list']"
          class="icon"
          :color="mobileIcon"
          @click="runMobileShow"
        />
      </div>
      <ul class="right">
        <li class="weelky-movies dropdown">
          <router-link to="/weeklyMovie">每周电影</router-link>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/weeklyMovie/details/latest"
                >本周电影</router-link
              >
            </li>
            <li><router-link to="/weeklyMovie">往期电影</router-link></li>
            <li>
              <router-link to="/weeklyMovie/recommend">我要推荐</router-link>
            </li>
            <li><router-link to="/weeklyMovie/FAQ">FAQ</router-link></li>
          </ul>
        </li>
        <li class="department-introduction">
          <router-link to="">部门介绍</router-link>
        </li>
        <li class="member-introduction">
          <router-link to="">成员介绍</router-link>
        </li>
        <li class="film-reviews dropdown">
          <router-link to="/movieReview">精彩影评</router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/movieReview">优秀影评</router-link></li>
            <li><router-link to="/movieReview/write">我要撰写</router-link></li>
          </ul>
        </li>
        <!-- <li class="contact-us"><router-link to="">联系我们</router-link></li> -->
        <li class="sign-up">
          <router-link to="/login"
            >{{ userInfo.username || "Sign In" }}
          </router-link>
          <font-awesome-icon
            :icon="['far', 'user']"
            class="user-icon"
            color="#fff"
            align="bottom"
            v-show="userLogin"
          />
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    lightMode: {
      type: Boolean, //light or dark mode
      default: true
    },
    simpleMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mobileShow: true,
      mobileIcon: "#fff",
      titleShow: false
    };
  },
  methods: {
    runMobileShow() {
      this.mobileShow = !this.mobileShow;
      let right = document.getElementsByClassName("right")[0];
      if (this.mobileShow) right.classList.add("mobile-nav");
      else right.classList.remove("mobile-nav");
    },
    clickFn(url) {
      this.$router.push(url);
    },
    goBack(){
      this.$router.back(-1);
    },
    navbarFixed() {
      let header = document.getElementsByClassName("myHeader")[0];
      window.onscroll = () => {
        let scroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (scroll >= 300) {
          header.classList.add("navbar_fixed");
          this.mobileIcon = "#000";
          this.titleShow = true;
        } else if (scroll < 300 && this.lightMode) {
          header.classList.remove("navbar_fixed");
          this.mobileIcon = "#fff";
          this.titleShow = false;
        }
      };
      //dark Mode
      if (!this.lightMode) {
        header.classList.add("navbar_fixed");
        this.mobileIcon = "#000";
      }
    }
  },
  computed: {
    ...mapState(["userLogin", "userInfo"])
  },
  mounted() {
    this.navbarFixed();
  }
};
</script>

<style lang="stylus" scoped>
.myHeader
  position fixed
  top 0
  left 0
  z-index 99
  width 100vw
  line-height 50px
  margin 0
  li
    padding 40px 20px
    a
      color #fff
      font-size 0.4rem
      text-decoration none
    &:hover a
      color #d8e3e7
    &:hover svg
      color #d8e3e7
  .home
    float left
    padding-left 5%
    padding-top 20px
    height 150px
    cursor pointer
    &:hover
      animation icon-move 2s linear infinite
    img
      width 5rem
      max-width 150px
      height auto
  .mobile-icon
    display none
  .right
    float right
    padding-right 20px
    .user-icon
      font-size 0.4rem
    .dropdown
      position relative
      .dropdown-menu
        display block
        position absolute
        top 100px
        left -30px
        opacity 0
        visibility hidden
        width 200px
        border-radius 15px
        background-color #fff
        box-shadow 0px 0px 34px 0px rgba(60, 153, 230, 0.35)
        transition all .3s ease-in
        li
          line-height 50px
          display flex
          justify-content flex-start
          position relative
          padding 0 0 0 20px
          a
            color #666
            font-size 15px
            transition all .1s ease-in
          a:before
            content ""
            width 7px
            height 7px
            position absolute
            top 50%
            left 20px
            transform translateY(-50%)
            visibility hidden
            border-radius 50%
            background-color #2775b6
        li:hover a
          color #2775b6
          padding-left 12px
        li:hover a:before
          visibility visible
      .dropdown-menu:before
        content ""
        position absolute
        top -19px
        left 25px
        border solid 10px transparent
        border-bottom solid 10px #fff
    .dropdown:hover .dropdown-menu
      left 0
      opacity 1
      visibility visible
.navbar_fixed
  position: fixed;
  width: 100%;
  top: -71px;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0;
  background: #fff;
  box-shadow: 0px 0px 34px 0px rgba(60, 153, 230, 0.35);
  transform: translateY(70px);
  transition: transform 800ms ease, background 300ms ease;
  .home
    height 0
    img
      max-width 80px
  .backward svg
    color #000!important
    &:hover
      color #298cce!important
  li
    padding 10px 20px
    a
      font-size 0.3rem
      line-height 50px
      color #000
    &:hover a
      color #298cce
    &:hover .user-icon
      color #298cce
  .sign-up a,  .sign-up svg
    color #298cce
  .mobile-icon
    padding 15px 20px!important
.simpleHeader
  height 70px
  .backward
    float left 
    line-height 70px
    margin-left 50px
    padding 0
    cursor pointer
    svg
      margin 20px auto
      color rgba(255, 255, 255,0.8)
  .home
    padding-top 10px
    float right
    margin-right 20px
    img
      max-width 80px
@keyframes icon-move {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
.svg-inline--fa.fa-lg {
    vertical-align: -0.125em;
}
/* ipad端 */
@media screen and (max-width: 1023px)
  .myHeader li
    padding 40px 0.15rem
  .navbar_fixed li
    padding 10px 15px
/* 手机端 */
@media screen and (max-width: 767px)
  .myHeader
    .mobile-icon
      display block
      float right
      padding-right 20px
      padding-top 1.2rem
      font-size 1rem
      cursor pointer
    .right
      display none
    .mobile-nav
      display block
      background-color rgba(0,0,0,0.8)
      position absolute
      top 2rem
      right 40px
      width 100px
      padding 0
      padding-left 10px
      border-radius 10px
      li
        padding 10px 10px 10px 0
        line-height 20px
      .sign-up a, .sign-up svg
        color #298cce
      .dropdown-menu
        display none!important
  .navbar_fixed li a
    color #fff
  .navbar_fixed
    .home
      padding-top 10px
</style>
