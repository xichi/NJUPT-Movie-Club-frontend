<template>
  <div>
     <div class="home">
       <img src="../assets/1.png" class="home-pic">
     </div>
     <div class="weekly-movies">
       <div class="introduction">
        <p>你知道吗?</p>
        <p>图书馆2楼放映室每周都会放映电影哦</p>
       </div>
       <div class="navbar">
         <svg width="100%" height="100%">

         </svg>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>
.home
  height 100vh
  background-image url("../assets/home-bg.jpg")
  background-size 100% 100%
  .home-pic
    position absolute
    bottom -200px
    right 0
.weekly-movies
  margin-top 200px
</style>
