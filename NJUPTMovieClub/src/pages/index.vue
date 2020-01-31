<template>
  <div>
    <div class="home">
      <div class="main-focus">
        <p class="title">{{ mainFocus.title }}</p>
        <p class="subtitle">{{ mainFocus.subtitle }}</p>
        <button class="contact-us">
          <p> Contact us</p>
        </button>
      </div>
      <div class="up-down"></div>
      <img src="../assets/1.png" class="home-pic" />
    </div>
    <div class="weekly-movies">
      <div class="introduction">
        <p>你知道吗?</p>
        <p>图书馆2楼放映室每周都会放映电影哦</p>
      </div>
      <div class="navbar">
        <svg width="100%" height="100%"></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mainFocus: {
        title: "世界这么大，我只想和你谈谈电影~",
        subtitle:
          "The world is so big, I just want to talk about movies with you."
      }
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.home
  height 100vh
  background-image url("../assets/home-bg.jpg")
  background-size 100% 100%
  position relative
  .home-pic
    position absolute
    bottom -200px
    right 0
    width 30%
  .main-focus
    height 100%
    display flex
    flex-direction column
    justify-content center
    color #fff
    z-index 999
    p
      text-align left
      margin 0 20px
    .title
      padding-left calc(25% - 20px)
      font-size 40px
      line-height 70px
    .subtitle
      padding-left calc(25% - 20px)
      font-size 18px
    .contact-us
      background-color transparent
      border-radius 10px
      padding 10px 5px
      width 160px
      margin-left 25%
      margin-top 20px
      &:hover
        background-color rgba(255,255,255,0.7)
        p
          color #000
      p
        text-align center
        font-size 20px
        color #fff
  .up-down
    width 50px
    height 50px
    position absolute
    bottom 8%
    left 50%
    transform translateX(-50%)
    background-image url("../assets/down.png")
    background-size 100% 100%
    cursor pointer
    animation up-and-down 2s linear infinite
.weekly-movies
  margin-top 200px
@keyframes up-and-down{
  0%{
    transform: translateY(0);
  }
  50%{
    transform: scale(1.1,0.9) translateY(10px);
  }
  100%{
    transform: translateY(0);
  }
}
</style>
