<template>
  <div class="detail-card">
    <div class="left card">
      <slot name="pic"></slot>
    </div>
    <div class="right card">
      <slot name="title"></slot>
      <slot name="detail"></slot>
      <div class="footer">
        <slot name="postTime"></slot>
        <slot name="author"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.detail-card
  border-bottom 1px solid #999
  font-size 0.5rem
  margin 0 auto
  margin-top 50px
  display flex
  width 70vw
  height 200px
  .left
    width 30%
  .right
    width 60%
    .footer
      display flex
      justify-content flex-end
      line-height 30px
/* 手机端 */
@media screen and (max-width: 767px)
  .detail-card
    flex-direction column
    height 400px
    .left
      width 100%
      height 200px
    .right
      width 100%
      height 200px
</style>
