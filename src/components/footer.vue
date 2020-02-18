<template>
  <div class="my-footer">
    <svg id="svg-wave" viewBox="0 0 1000 200" preserveAspectRatio="xMinYMin slice">
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
  height 250px
  #svg-wave
    width 100%
    height 100%
</style>
