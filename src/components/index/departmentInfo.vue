<template>
  <div class="main">
    <div class="title">DEPARTMENT INTRODUCE
      <div class="line"></div>
    </div>
    <div class="cards">
      <div class="projection card-wrap">
        <div class="card">
          <div class="copyright">Photo by Aneta Pawlik on Unsplash</div>
        </div>
        <div class="info">
          <h2>PROJECTION DEPARTMENT</h2>
          <h3>放映部</h3>
          <p class="detail">我是百度百科上的屁话。负责组织电影艺术展演展映展览、艺术家采风慰问、“送欢乐下基层”等活动；开展“百花放映.情系基层电影文化惠民活动”；承办电影志愿者招募、注册、培训，开展电影志愿者服务活动。</p>
        </div>
      </div>
      <div class="propaganda card-wrap">
        <div class="card">
          <div class="copyright">Photo by Noom Peerapong on Unsplash</div>
        </div>
        <div class="info">
          <h2>PROPAGANDA DEPARTMENT</h2>
          <h3>宣传部</h3>
          <p class="detail">我是百度百科上的屁话。研究电影创作形势，引导创作方向；协调、指导“电影文学工作委员会”的工作，推选“中国影协杯”优秀剧本等；实施重点电影创作工程，培养青年创作人才。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.main
  margin-top 2rem
  font-size 15px
  .title
    width 50vw
    margin 0 auto
    font-size .8rem
    .line
      width 50%
      height 5px
      margin 0 auto
      background-color #3085a3
  .cards
    margin 0 auto
    margin-top 1rem
    width 70%
    .card-wrap
      display flex
      justify-content space-between
      align-items center
      .card
        position relative
        width 40%
        height 300px
        border-radius 30px
        box-shadow 0 0 20px 0 rgba(0,0,0,0.3)
        background-color #999
        background-size cover
        background-position center center
        .copyright
          position absolute
          top 100%
          left 50%
          transform translate(-50%, -150%)
          font-size 12px
          color rgba(255,255,255,0.5)
          &:hover
            color rgba(255,255,255,0.8)
      .info
        width 50%
    .projection
      .card
        background-image url("../../assets/pic/projection.jpg")
    .propaganda
      flex-direction row-reverse
      .card
        background-image url("../../assets/pic/propaganda.jpg")
@media screen and (max-width: 767px)
  .main
    .cards
      padding 0
      width 100%
      .card-wrap
        flex-direction column
        .card
          width 80%
        .info
          width 70%
</style>
