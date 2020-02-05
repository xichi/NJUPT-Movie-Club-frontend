<template>
  <div class="main">
    list
        <transition name="router-slid" mode="out-in">
          <router-view></router-view>
        </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.main
  width 100vw
  height 100vh
  background-color #3c9566
</style>
