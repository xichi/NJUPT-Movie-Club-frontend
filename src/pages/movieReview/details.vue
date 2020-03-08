<template>
  <div class="main">
    <my-header class="my-header" :simpleMode="true">
      <li slot="title" id="header-title" @click="scrollToTop">
        {{ movieReview.title }}
      </li>
    </my-header>
    <div class="movie-review-wrap">
      <div class="post-head-wrap">
        <div class="post-head">
          <div class="title">{{ movieReview.title }}</div>
          <div class="author">
            <i class="fa fa-user"></i>
            {{ movieReview.author }}
          </div>
          <div class="footer">
            <div class="postTime">
              <i class="fa fa-calendar"></i>
              {{ movieReview.postTime }}
            </div>
            <div class="share">
              <i class="fa fa-paper-plane"></i>
              Share
            </div>
          </div>
        </div>
      </div>
      <div class="detail-wrap">
        <div class="detail" ref="detail">
          {{ movieReview.detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "_c/common/Header";
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
    },
    scrollToTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 5);
        }
      })();
    },
    copyTip() {
      let detail = this.$refs.detail;
      detail.addEventListener("copy", () => {
        alert("转载请注明出处~");
      });
    }
  },
  mounted() {
    this.loadMovieReview();
    this.copyTip();
  }
};
</script>

<style lang="stylus" scoped>
.main
  font-size 15px
  .my-header
    position fixed
    top 0
    left 0
    z-index 999
  .movie-review-wrap
    width 100vw
    margin 0 auto
    .post-head-wrap
      display flex
      flex-direction column
      align-items center
      justify-content center
      height 400px
      width 100%
      background url('../../assets/pic/home-bg.jpg') fixed center center
      z-index -1
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
      width 100%
      height auto
      padding 50px 0 100px 0
      background-color #fff
      z-index 200
      .detail
        width 70%
        margin 0 auto
.clearfix:after{
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  }
.clearfix {
  /* 触发 hasLayout */
  zoom: 1;
  }
</style>
<style lang="stylus">
#header-title
  float left
  padding-left 1rem
  font-size 25px
  cursor pointer
@media screen and (max-width: 767px)
  #header-title
    display none
</style>
