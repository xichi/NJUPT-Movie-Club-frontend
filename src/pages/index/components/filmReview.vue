<template>
  <div class="film-review">
    <div class="title">精<br />彩<br />影<br />评</div>
    <div class="mobile_title">精彩影评</div>
    <el-carousel direction="vertical" @change="loadIntext" :autoplay="false">
      <el-carousel-item v-for="(item, index) in filmReviews" :key="index">
        <div class="focus_text">
          <div class="name">{{ item.name }}</div>
          <div class="author">{{ item.author }}</div>
          <div class="source">{{ item.source }}</div>
        </div>
        <div class="pic-wrap"></div>
        <div class="pic" :style="{ background: `url(${item.pic})` }"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import FilmReview1 from "_p/FilmReview1.jpg";
import FilmReview2 from "_p/FilmReview2.jpg";
export default {
  data() {
    return {
      filmReviews: [
        {
          name: "蒙太奇的诞生与发展",
          author: "Allen",
          source: "南邮影协",
          pic: FilmReview1,
        },
        {
          name: "在悲伤中读懂生活",
          author: "Allen",
          source: "南邮影协",
          pic: FilmReview2,
        },
      ],
    };
  },
  methods: {
    loadIntext(key1) {
      const texts = document.querySelectorAll(".focus_text");
      texts.forEach((item) => item.classList.remove("loadInText"));
      const text = document.querySelectorAll(".focus_text")[key1];
      text.classList.add("loadInText");
    },
  },
};
</script>

<style lang="stylus" scoped>
.film-review
  width 800px
  height 500px
  margin 50px auto
  position relative
  box-shadow 0 0 10px 0 #a5a5a6
  .title
    display block
    position absolute
    top 50%
    left -80px
    transform translateY(-50%)
    font-size 30px
    font-family A61
    line-height 40px
  .mobile_title
    display none
  .loadInText
    animation loadIn .8s cubic-bezier(0.76, 0, 0.37, 1.59)
  .focus_text
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    color #fff
    font-family 'Roboto', sans-serif
    text-shadow 1px 1px 5px #a5a5a6
    width fit-content
    text-align left
    z-index 2
    .author
      font-size 30px
    .source
      font-size 15px
      color #0099CC
      text-shadow none
  .pic
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index -1
    background-size cover!important
    background-position center center!important
  .pic-wrap
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background-color rgba(0,0,0,.2)
    z-index 1
@keyframes loadIn
  0%
    opacity 0
    top 70%
  100%
    opacity  1
    top 50%
</style>

<style lang="stylus">
.film-review
  .el-carousel__container
    width 800px
    height 500px
    margin 0 auto
    .el-carousel__item
      background-color #99a9bf
      width 100%
      height 100%
  .el-carousel__indicator
    display block
@media screen and (max-width: 767px)
  .film-review
    margin-top 80px!important
    width 90vw!important
    height 400px!important
    .title
      display none
    .mobile_title
      display block!important
      position absolute
      top -50px
      left 50%
      transform translateX(-50%)
      font-size 30px
      font-family A61
    .el-carousel__container
      height 400px
      width 100%
</style>
