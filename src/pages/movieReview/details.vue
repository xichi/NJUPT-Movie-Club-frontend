<template>
  <div class="main">
    <my-header class="my-header" :simpleMode="true"></my-header>
    <div class="movie-review-wrap">
      <div class="post-head-wrap">
        <div class='post-head'>
          <div class="title">{{ movieReview.title }}</div>
          <div class="author">
            <font-awesome-icon :icon="['far', 'user']" />{{
              movieReview.author
            }}
          </div>
          <div class="footer">
            <div class="postTime">
              <font-awesome-icon :icon="['far', 'calendar']" />{{
                movieReview.postTime
              }}
            </div>
            <div class="share">
              <font-awesome-icon :icon="['far', 'paper-plane']" />
              Share
            </div>
          </div>
        </div>
      </div>
      <div class="detail-wrap">
        {{ movieReview.detail }}
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "_c/Header";
export default {
  components: {
    myHeader
  },
  data() {
    return {
      movieReview: {
        id: "255467",
        title: "蒙太奇的诞生与发展",
        detail:
          "什么是蒙太奇？蒙太奇是法语“Montage”的音译，原为建筑学术语，是“剪切”的意思，但在前苏联它被发展成一种电影中镜头组合的理论。简单来说，当不同镜头拼接在一起时，往往又会产生各个镜头单独存在时所不具有的特定含义，这就是蒙太奇。当卢米埃尔兄弟在19世纪末拍出史上最早的影片时，他是不需要考虑到蒙太奇问题的。因为他们拍出的只是生活的片段。后来，电影史上的第一位导演乔治·梅里埃将这些生活片段戏剧化，但他总是把摄影机对着舞台，摆在一个固定的位置上，有点类似今天的舞台剧。什么是蒙太奇？蒙太奇是法语“Montage”的音译，原为建筑学术语，是“剪切”的意思，但在前苏联它被发展成一种电影中镜头组合的理论。简单来说，当不同镜头拼接在一起时，往往又会产生各个镜头单独存在时所不具有的特定含义，这就是蒙太奇。当卢米埃尔兄弟在19世纪末拍出史上最早的影片时，他是不需要考虑到蒙太奇问题的。因为他们拍出的只是生活的片段。后来，电影史上的第一位导演乔治·梅里埃将这些生活片段戏剧化，但他总是把摄影机对着舞台，摆在一个固定的位置上，有点类似今天的舞台剧。",
        postTime: "2020/02/09",
        author: "西池",
        pic: "url('../../assets/pic/home-bg.jpg')"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.main
  font-size 15px
  height 1800px
  .movie-review-wrap
    width 100vw
    margin 0 auto
    .post-head-wrap
      height 400px
      display flex
      flex-direction column
      align-items center
      justify-content center
      background-image url('../../assets/pic/home-bg.jpg')
      background-position center center
      filter brightness(.85)
      background-size cover
      .post-head
        padding 0 20px
        text-align left
        color #fff
        svg
          padding-right 3px
        .title
          font-size 50px
        .author
          padding-top 5px
        .footer
          display flex
          padding-top 5px
          .share
            padding-left 15px
            svg
              padding-right 0
    .detail-wrap
      width 70%
      margin 0 auto
      margin-top 50px
</style>
