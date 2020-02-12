<template>
  <div>
    <my-header :lightMode="false"></my-header>
    <div class="main">
      <div>test</div>
      {{userInfo}}
      {{movieReview}}
    </div>
  </div>
</template>

<script>
import myHeader from "_c/Header";
import { mockGetUserInfo, mockGetMovieReview } from "@/mock/index";
export default {
  components: {
    myHeader
  },
  data() {
    return {
      userInfo: {},
      movieReview: []
    };
  },
  methods: {
    async test() {
      this.userInfo = await mockGetUserInfo();
      this.movieReview = await mockGetMovieReview();
    }
  },
  created() {
    this.test();
  }
};
</script>

<style lang="stylus" scoped>
.main
  padding-top 80px
  height 1200px
  font-size 12px
</style>
