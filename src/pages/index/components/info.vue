<template>
  <div class="info">
    <div class="content">
      <div class="text">“The whole of life, the whole of its action, is a natural and vivid film.”</div>
      <div class="translation_text">生活的全部，它行动的整体，乃是一部自然、生动的电影。</div>
    </div>
    <div class="bg_wrap"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.info
  position relative
  width 100%
  height 500px
  color #eee
  background url('../../../assets/pic/HOLLYWOOD.jpg')
  background-size cover
  background-position center center
  background-attachment fixed
  .bg_wrap
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index 1
    background-color rgba(0,0,0,.5)
  .content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    z-index 2
    .text
      font-family A61
      font-size 50px
      text-align left
      min-width 700px
    .translation_text
      margin-top 50px
      font-size 15px
      font-family A61
      text-align right
@media screen and (max-width: 767px)
  .info
    .content
      .text
        font-size 30px
        min-width 300px
</style>
