<template>
  <div class="my-footer">
    <svg viewBox="0 0 1000 200">
      <defs>
        <linearGradient id="Gradient01" x1="0" x2="0" y1="0" y2="1">
          <stop offset="20%" stop-color="#57c3c2" />
          <stop offset="60%" stop-color="#0eb0c9" />
          <stop offset="80%" stop-color="#2c7bb6" />
          <stop offset="90%" stop-color="#144a74" />
        </linearGradient>
        <linearGradient id="Gradient02" x1="0" x2="0" y1="0" y2="1">
          <stop offset="10%" stop-color="#b9dec9" />
          <stop offset="90%" stop-color="#57c3c2" />
        </linearGradient>
      </defs>
      <path
        id="wave"
        fill="url(#Gradient02)"
        stroke="none"
        d="M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 50 H 0 Z"
      >
        <animate
          dur="5s"
          repeatCount="indefinite"
          attributeName="d"
          attributeType="XML"
          values="M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 50 H 0 Z;
          M 0 30 Q 200 50 400 30 T 800 30 T 1000 20 V 50 H 0 Z;
          M 0 30 Q 200 0 400 30 T 800 30 T 1000 20 V 50 H 0 Z;"
        ></animate>
      </path>
      <rect
        id="rect"
        x="0"
        y="50"
        width="1000"
        height="200"
        rx="1"
        ry="1"
        fill="url(#Gradient01)"
      ></rect>
      <text x="10" y="10" style="font-size:10px;color:#000;">
        <tspan fill="url(#Gradient01)">AB</tspan>
        <tspan stroke="green" stroke-width=".2" fill="none">CDE</tspan>
      </text>
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
</style>
