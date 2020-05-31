<template>
  <div class="index">
    <my-header></my-header>
    <div class="home">
      <div class="main-focus">
        <p class="title" :data-text="mainFocus.title">{{ mainFocus.title }}</p>
        <p class="subtitle">{{ mainFocus.subtitle }}</p>
        <button class="contact-us">
          <p>Contact us</p>
        </button>
      </div>
      <div class="movie-today dropdown">
        <p class="title-out">今日电影</p>
        <p class="title-in" @click="runMovieTodayShow">
          <span>{{ movieToday.name }}</span>
          <span>
            <i
              class="fa fa-heart-o kudos-empty kudos"
              v-show="!kudos"
              @click.stop="kudosChange"
            ></i>
            <i
              class="fa fa-heart kudos-full kudos"
              v-show="kudos"
              @click.stop="kudosChange"
            ></i>
          </span>
        </p>
        <div class="dropdown-menu" v-show="movieTodayShow">
          <div class="topbar">
            <span>Movie Today</span>
            <i class="fa fa-angle-down" style="padding-left:5px;"></i>
          </div>
          <div class="mainbody">
            <div class="right">
              <div
                class="pic"
                :style="
                  'background-image:url(' + getImage(movieToday.pic) + ');'
                "
                @error="show_default_image"
              ></div>
            </div>
            <div class="left">
              <div class="name">
                <span>电影片名：</span>{{ movieToday.name }}
              </div>
              <div class="score">
                <span>豆瓣评分：</span>{{ movieToday.score }}
              </div>
              <div class="quote"><span>简介：</span>{{ movieToday.quote }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="up-down"></div>
      <div class="wave">
        <div id="bg_wave_1"></div>
        <div id="bg_wave_2"></div>
      </div>
    </div>
    <weekly-movies></weekly-movies>
    <department-info></department-info>
    <members-info></members-info>
    <info></info>
    <film-review></film-review>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "_c/common/Header";
import myFooter from "_c/common/footer";
import weeklyMovies from "./components/weeklyMovies";
import departmentInfo from "./components/departmentInfo";
import membersInfo from "./components/membersInfo";
import info from "./components/info";
import filmReview from "./components/filmReview";
//import "_c/common/mouseAni.js"

export default {
  components: {
    myHeader,
    myFooter,
    weeklyMovies,
    departmentInfo,
    membersInfo,
    info,
    filmReview,
  },
  data() {
    return {
      kudos: false,
      movieTodayShow: false,
      mainFocus: {
        title: "世界这么大，我只想和你谈谈电影~",
        subtitle:
          "The world is so big, I just want to talk about movies with you.",
      },
      movieToday: {
        id: 1,
        name: "肖申克的救赎 / The Shawshank Redemption",
        score: 9.7,
        pic:
          "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        quote: "希望让人自由。",
        comments: [],
      },
    };
  },
  methods: {
    kudosChange() {
      this.kudos = !this.kudos;
    },
    runMovieTodayShow() {
      this.movieTodayShow = !this.movieTodayShow;
    },
    show_default_image(event) {
      event.target.src = "http://temp.im/150x300";
    },
    getImage(url) {
      // 把现在的图片连接传进来，返回一个不受限制的路径
      if (url !== undefined) {
        return "https://images.weserv.nl/?url=" + url;
      }
    },
    movieTodayAnimation() {
      let titleIn = document.getElementsByClassName("title-in")[0];
      titleIn.onmouseenter = function() {
        titleIn.style.opacity = ".9";
      };
      titleIn.onmouseleave = function() {
        titleIn.style.opacity = ".5";
      };
    },
  },
  mounted() {
    this.movieTodayAnimation();
    /* this.$http.get('/bing/bingPic/').then(res => {
      console.log(res)
    }); */
  },
};
</script>

<style lang="stylus" scoped>
body
  padding 0!important
.home
  width 100vw
  height 100vh
  background-image url("http://njupt.xichi.xyz/movies/home-bg.jpg")
  background-size cover
  position relative
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
      position relative
      margin-left calc(25% - 20px)
      font-size 40px
      font-weight bold
      letter-spacing 5px
      line-height 70px
      mix-blend-mode lighten
      &:hover::before
        text-shadow 5px 0 #ff3f1a
        animation glitch-loop-1 .8s infinite ease-in-out alternate-reverse
      &:hover::after
        text-shadow -5px 0 #00a7e0
        animation glitch-loop-2 .8s infinite ease-in-out alternate-reverse
      &::after, &::before
        content attr(data-text)
        position absolute
        top 0
        width 100%
        background rgba(0, 0, 0, 0)
        clip rect(0, 0, 0, 0)
      &::before
        left -1px
        text-shadow 1px 0 #ff3f1a
      &::after
        left 1px
        text-shadow -1px 0 #00a7e0
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
    bottom 15%
    left 50%
    transform translateX(-50%)
    background-image url("../../assets/icon/down.png")
    background-size 100% 100%
    cursor pointer
    animation up-and-down 2s linear infinite
  .wave
    z-index 99
    position absolute
    height 110px
    width 100%
    overflow hidden
    bottom 0px
    #bg_wave_1
      position absolute
      top 30px
      left -100%
      width 200%
      height 100%
      animation water-right 20s infinite linear
      background url('http://njupt.xichi.xyz/movieClub/wave1.png') repeat-x
    #bg_wave_2
      position absolute
      top 30px
      left 0
      width 200%
      height 100%
      animation water-left 30s infinite linear
      background url('http://njupt.xichi.xyz/movieClub/wave2.png') repeat-x
  .movie-today
    position absolute
    height 100px
    width 20%
    bottom 80px
    right 0
    color #fff
    font-size 18px
    .title-out
      position absolute
      top 0
      left 0
      width 100%
      text-align center
      visibility visible
      transition all .5s ease-in
    .title-in
      position absolute
      top 14px
      left 0
      width 100%
      text-align center
      color #d8e7f7
      cursor pointer
      visibility hidden
      opacity 0
      transition all .5s ease-in
    &:hover .title-in
      visibility visible
      opacity .5
      top 24px
    &:hover .title-out
      top -5px
    .dropdown-menu
      display flex
      flex-direction column
      width 90%
      height auto
      position absolute
      top -200px
      left 50%
      transform translateX(-50%)
      padding 5px
      border-radius 10px
      background-color #000
      &:before
        content ""
        position absolute
        bottom -19px
        left 50px
        border solid 10px transparent
        border-top solid 10px #000
      .topbar
        padding 5px 0 10px 0
      .mainbody
        display flex
        .right
          width 30%
          .pic
            width 100%
            height 150px
            background-position center center
            background-size cover
        .left
          width 70%
          padding-left 10px
          text-align left
          color #e3e3e3
          span
            color #fff
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
@keyframes water-right {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
      transform: translateX(25%) translateZ(0) scaleY(0.85);
  }
  100% {
      transform: translateX(50%) translateZ(0) scaleY(1);
  }
}
@keyframes water-left {
  0% {
    transform: translate(0%, 0px);
  }

  100% {
      transform: translate(-50%, 0px);
  }
}
@keyframes glitch-loop-1 {
    0% {
        clip: rect(8px, 9999px, 9px, 0)
    }
    25% {
        clip: rect(14px, 9999px, 99px, 0)
    }
    50% {
        clip: rect(50px, 9999px, 132px, 0)
    }
    75% {
        clip: rect(20px, 9999px, 92px, 0)
    }
    100% {
        clip: rect(91px, 9999px, 98px, 0)
    }
}
@keyframes glitch-loop-2 {
    0% {
        top: -1px;
        left: 1px;
        clip: rect(15px, 9999px, 119px, 0)
    }
    25% {
        top: -1px;
        left: 4px;
        clip: rect(29px, 9999px, 19px, 0)
    }
    50% {
        top:  1px;
        left: 1px;
        clip: rect(38px, 9999px, 11px, 0)
    }
    75% {
        top: 0;
        left: -3px;
        clip: rect(65px, 9999px, 53px, 0)
    }
    100% {
        top: -1px;
        left: -1px;
        clip: rect(11px, 9999px, 149px, 0)
    }
}

/* 手机端 */
@media screen and (max-width: 767px)
  .home
    .main-focus
      .title,.subtitle
        padding-left 0
      .title
        font-size 30px
        line-height 50px
      .contact-us
        margin-left 5%
    .movie-today
      .title-in
        font-size 12px
      .dropdown-menu
        display none
</style>
