<template>
  <div>
    <my-header :lightMode="false"></my-header>
    <div class="main">
      recommand
    </div>
  </div>
</template>

<script>
import  myHeader  from "_c/Header";
export default {
  components: {
    myHeader
  }
}
</script>

<style lang="stylus" scoped>
.main
  padding 80px
  height 1200px
</style>