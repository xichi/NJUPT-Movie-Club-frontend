<template>
  <div class="my-footer">
    <div class="main">
      <div class="head">
        <div class="welcome">
          <div>
            <span class="icon">南邮<font-awesome-icon :icon="['fas', 'paper-plane']" /></span>
            <span>欢迎加入我们</span>
          </div>
          <div class="developer">
            <div>Developer</div>
            <ul>
              <li><font-awesome-icon :icon="['fab', 'github']" size="2x" /></li>
              <li><font-awesome-icon :icon="['fab', 'qq']" size="2x"/></li>
              <li><font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" /></li>
            </ul>
          </div>
        </div>
        <div class="about-us">
          <div class="title">关于我们</div>
          <ul class="column">
            <li>往期电影</li>
            <li>部门介绍</li>
            <li>成员介绍</li>
            <li>精彩影评</li>
          </ul>
        </div>
        <div class="contact-us">
          <div class="title">Contact Us</div>
          <div class="row">
            <div class="official-qq">
              <div>影协官方qq号</div>
              <div class="QR-code"></div>
            </div>
            <div class="freshman-qq">
              <div>19级新生qq群</div>
              <div class="QR-code"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">Copyrights - 2020 NUPT Movie Club</div>
    </div>
    <svg
      id="svg-wave"
      viewBox="0 0 1000 200"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <linearGradient id="Gradient02" x1="0" x2="0" y1="0" y2="1">
          <stop offset="10%" stop-color="#b9dec9" />
          <stop offset="80%" stop-color="#57c3c2" />
        </linearGradient>
      </defs>
      <path
        id="wave"
        fill="url(#Gradient02)"
        storke="#57c3c2"
        d="M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 200 H 0 Z"
      >
        <animate
          dur="5s"
          repeatCount="indefinite"
          attributeName="d"
          attributeType="XML"
          values="M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 200 H 0 Z;
          M 0 30 Q 200 50 400 30 T 800 30 T 1000 20 V 200 H 0 Z;
          M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 200 H 0 Z;"
        ></animate>
      </path>
    </svg>
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
.my-footer
  width 100vw
  height 280px
  position relative
  .main
    position absolute
    top 0
    left 0
    display flex
    flex-direction column
    justify-content space-between
    width 100vw
    height 100%
    font-size 13px
    z-index 200
    .head
      display flex
      justify-content space-between
      padding 100px 3rem 0 3rem
      > div
        margin 10px
      .column
        display flex
        flex-direction column
      .row
        display flex
        flex-direction row
        justify-content center
      .title
        font-size 15px
        font-weight bold
      .welcome
        .icon
          padding-right 10px
        .developer
          margin-top 15px
          > ul
            margin 10px 0
      .contact-us
        .official-qq
          padding-right 10px
        .QR-code
          width 70px
          height 70px
          margin 10px auto
          background-size 100% 100%
        .official-qq .QR-code
            background-image url("../assets/pic/office-qq.png")
        .freshman-qq .QR-code
            background-image url("../assets/pic/new-qq.jpg")
    .footer
      margin 0 auto
      padding 10px
      width 90%
      border-top 1px solid rgba(#2c3e50,0.5)
  #svg-wave
    position absolute
    top 0
    left 0
    width 100%
    height 100%
@media screen and (max-width: 767px)
  .my-footer
    height 550px
    .main
      .head
        flex-direction column
</style>
