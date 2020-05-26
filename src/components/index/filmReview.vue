<template>
  <div class="film-review">
    <div class="title">精<br/>彩<br/>影<br/>评</div>
    <el-carousel direction="vertical" :autoplay="false">
      <el-carousel-item v-for="(item, index) in filmReviews" :key="index">
        <div class="focus_text">
          <div class="name">{{item.name}}</div>
          <div class="author">{{item.author}}</div>
          <div class="source">{{item.source}}</div>
        </div>
        <div class="pic-wrap"></div>
        <div class="pic" :style="{background: `url(${item.pic})`}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import FilmReview1 from '../../assets/pic/FilmReview1.jpg'
import FilmReview2 from '../../assets/pic/FilmReview2.jpg'
export default {
  data(){
    return{
      filmReviews: [
        {
          name: "蒙太奇的诞生与发展",
          author: "Allen",
          source: "南邮影协",
          pic: FilmReview1
        },{
          name: "在悲伤中读懂生活",
          author: "Allen",
          source: "南邮影协",
          pic: FilmReview2
        }
      ]
    }
  }
};
</script>

<style lang="stylus" scoped>
.film-review
  width 800px
  height 500px
  margin 50px auto
  position relative
  box-shadow 0 0 10px 0 #a5a5a6
  &:hover .pic
    transform scale(1.5)
  .title
    position absolute
    top 50%
    left -80px
    transform translateY(-50%)
    font-size 30px
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
    transition all 2s
  .pic-wrap
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background-color rgba(0,0,0,.2)
    z-index 1
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
</style>
