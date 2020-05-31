<template>
  <div class="weekly-movies">
    <div class="info">
      <svg
        id="svg-info"
        viewBox="0 0 500 100"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="Gradient01" x1="0" x2="0" y1="0" y2="1">
            <stop offset="10%" stop-color="#b9dec9" />
            <stop offset="20%" stop-color="#57c3c2" />
            <stop offset="60%" stop-color="#0eb0c9" />
            <stop offset="80%" stop-color="#2c7bb6" />
            <stop offset="90%" stop-color="#144a74" />
          </linearGradient>
        </defs>
        <path
          id="path1"
          d="M 0 50 Q 250 10 500 50"
          stroke="none"
          fill="none"
        ></path>
        <path
          id="path2"
          d="M 0 100 Q 250 60 500 100"
          stroke="none"
          fill="none"
        ></path>
        <text style="font-size:35px;" text-anchor="middle">
          <textPath startOffset="50%" xlink:href="#path1">
            <tspan id="info-title" fill="url(#Gradient01)">你知道吗?</tspan>
          </textPath>
        </text>
        <text style="font-size:20px;" text-anchor="middle">
          <textPath startOffset="50%" xlink:href="#path2">
            <tspan>图书馆2楼</tspan>
            <tspan fill="url(#Gradient01)">放映室</tspan>
            <tspan>每周都会</tspan>
            <tspan fill="url(#Gradient01)">放映</tspan>
            <tspan>电影哦</tspan>
          </textPath>
        </text>
      </svg>
    </div>
    <div class="main-card">
      <div class="theme-of-the-week" v-if="theme">
        <p><font-awesome-icon class="svg-film" :icon="['fas', 'film']" />本周主题：</p>
        <p class="theme">{{ theme }}</p>
      </div>
      <el-carousel indicator-position="outside" v-if="latestMovies.length > 0">
        <el-carousel-item
          v-for="(item, key) in latestMovies"
          :key="key"
          :style="{ backgroundImage: 'url(' + item.pic + ')' }"
        >
          <div class="detail">
            <div class="big">{{ item.name }}</div>
            <div class="small">{{ item.info }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="empty-movies-box" v-else>
        <img class="error-img" src="../../../assets/pic/error/empty-box.png">
        <div class="error-text">本周暂无放映计划</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLatestMovies } from "@/api/index";

export default {
  data() {
    return {
      latestMovies: [],
      theme: ""
    };
  },
  methods: {
    async loadLatestMovies() {
      const { data: moviesData } = await getLatestMovies();
      this.latestMovies = moviesData.movies;
      this.theme = moviesData.theme;
    },
    typing() {
      let title = document.getElementById("info-title").innerHTML;
      let i = 0;
      let setInId = setInterval(() => {
        if (i <= title.length) {
          document.getElementById("info-title").innerHTML = title.substring(
            0,
            i
          );
          i++;
        } else {
          clearInterval(setInId);
        }
      }, 300);
    }
  },
  mounted() {
    this.loadLatestMovies();
    let info = document.getElementsByClassName("info")[0];
    let flag = true;
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let objTop = info.offsetTop;
      if (scrollTop + clientHeight > objTop && flag) {
        this.typing();
        flag = false;
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.weekly-movies
  margin-top 1rem
  font 25px A61
  #svg-info
    width 12rem
    height auto
    margin 0 auto
  .main-card
    position relative
    .theme-of-the-week
      position absolute
      top 50%
      left 20%
      transform translate(-100%, -50%)
      text-align center
      color #999
      font-size 20px
      padding 0 20px
      > p
        margin 5px 0
        .svg-film
          padding 0 5px
      .theme
        font-size 30px
        color #000
    .empty-movies-box
      position relative
      height 400px
      width 700px
      margin 0 auto
      border 1px solid #efefef
      border-radius 10px
      box-shadow 0 0 15px 0 rgba(0,0,0,0.3)
      .error-img
        width 100%
        height 100%
        object-fit contain
        opacity .8
      .error-text
        position absolute
        bottom 50px
        left 50%
        font-size 30px
        transform translateX(-50%)
@media screen and (max-width: 767px)
  .weekly-movies
    #svg-info
      width 100vw
      height auto
    .main-card
      .theme-of-the-week
        position initial
        top 0
        left 0
        transform translate(0,0)
        text-align center
      .empty-movies-box
        height 400px
        width 80%
</style>
<style lang="stylus">
.weekly-movies
  .main-card
    margin-top 10px
    .el-carousel__container
      height 400px
      width 60%
      margin 15px auto
      border-radius 10px
      box-shadow 0 0 15px 0 rgba(0,0,0,0.3)
      .el-carousel__item
        border-radius 10px
        background-size cover
        background-position center center
        color #fff
        .detail
          position absolute
          top 90%
          transition all .5s ease-in
          padding 0 20px 10px 20px
        &:hover .detail
            top 100%
            transform translateY(-100%)
          .big
            font-size .8rem
          .small
            font-size .3rem
    .el-carousel__indicators
      margin-top 10px
@media screen and (max-width: 767px)
  .weekly-movies
    .main-card
      .el-carousel__container
        height 400px
        width 90%
        .detail
          top 95%
          transform translateY(-100%)
</style>
