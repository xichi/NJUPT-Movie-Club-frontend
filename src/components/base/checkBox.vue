<template>
  <div class="checkBox-wrap">
    <div v-for="(item, index) in checkList" :key="index" class="checkBox">
      <div class="box"></div>
      <div class="name">{{ item.name }}</div></div>
  </div>
</template>

<script>
export default {
  props: {
    checkList: {
      type: Array,
      default: function() {
        return [
          { id: 0, name: "checkA" },
          { id: 1, name: "checkB" }
        ];
      }
    }
  },
  mounted(){
    document.querySelector('.box').style.width =  document.querySelector('.box').clientHeight +"px";
  }
};
</script>

<style lang="stylus" scoped>
.checkBox-wrap
  display flex
  .checkBox
    display flex
    padding 0 10px
    width 100%
    .box
      height 60%
      border 1px solid #999
      border-radius 2px
      vertical-align bottom
</style>
