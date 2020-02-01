<template>
  <ul class="myHeader">
    <li class="home"><img src="../assets/pic/icon.png" alt="" /></li>
    <ul class="right">
      <li class="weelky-movies dropdown">
        <router-link to="">每周电影</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="">本周电影</router-link></li>
          <li><router-link to="">往期电影</router-link></li>
          <li><router-link to="">我要推荐</router-link></li>
          <li><router-link to="">FAQ</router-link></li>
        </ul>
      </li>
      <li class="department-introduction"><router-link to="">部门介绍</router-link></li>
      <li class="member-introduction"><router-link to="">成员介绍</router-link></li>
      <li class="film-reviews dropdown">
        <router-link to="">精彩影评</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="">优秀影评</router-link></li>
          <li><router-link to="">我要撰写</router-link></li>
        </ul>
      </li>
      <li class="contact-us"><router-link to="">联系我们</router-link></li>
      <li class="sign-up"><router-link to="/signUp">sign up</router-link></li>
    </ul>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickFn(url){
      this.$router.push(url);
    }
  },
  mounted() {

  }
};
</script>

<style lang="stylus" scoped>
.myHeader
  position fixed
  top 0
  left 0
  z-index 9999
  width 100vw
  height 150px
  line-height 150px
  margin 0
  li
    a
      color #fff
      font-size 20px
      text-decoration none
    a:hover
      color #d8e3e7
  .home
    float left
    padding-left 100px
    padding-top 20px
    height 150px
    cursor pointer
    &:hover
      animation icon-move 2s linear infinite
    img
      width 150px
      height auto
  .right
    float right
    padding-right 100px
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
        background-color rgba(255,255,255,0.9)
        box-shadow 0px 0px 34px 0px rgba(60, 153, 230, 0.35)
        transition all .3s ease-in
        li
          line-height 50px
          display flex
          justify-content flex-start
          position relative
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
        border-bottom solid 10px rgba(255,255,255,0.9)
    .dropdown:hover .dropdown-menu
      left 0
      opacity 1
      visibility visible
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
</style>
