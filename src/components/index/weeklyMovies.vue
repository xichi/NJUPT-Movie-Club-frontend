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
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in latestMovies" :key="item">
          <h3>{{ item.name }}</h3>
          <div>{{ item.info }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { getLatestMovies } from "@/api/index";

export default {
  data() {
    return {
      latestMovies: []
    };
  },
  methods: {
    async loadLatestMovies() {
      const { data: movies } = await getLatestMovies();
      this.latestMovies = movies;
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
@media screen and (max-width: 767px)
  .weekly-movies
    #svg-info
      width 100vw
      height auto
</style>
<style lang="stylus">
.weekly-movies
  .main-card
    margin-top 1rem
    .el-carousel__container
      height 400px
      width 60%
      margin 0 auto
      .el-carousel__item
        background-color #d3dce6
@media screen and (max-width: 767px)
  .weekly-movies
    .main-card
      .el-carousel__container
        height 400px
        width 90%
</style>
