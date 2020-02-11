<template>
  <div class="main">
    <my-header class="my-header" :simpleMode="true"></my-header>
    <div class="movie-review-wrap">
      <div class="post-head-wrap">
        <div class="post-head">
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
import { getMovieReviewDetail } from "@/api/index";
export default {
  components: {
    myHeader
  },
  data() {
    return {
      movieReview: {
        id: "",
        title: "",
        detail: "",
        postTime: "",
        author: "",
        pic: ""
      }
    };
  },
  methods: {
    async loadMovieReview() {
      const id = this.$route.params.id;
      const { data: movieReviewDetail } = await getMovieReviewDetail(id);
      this.movieReview = movieReviewDetail[0];
    }
  },
  mounted() {
    this.loadMovieReview();
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
