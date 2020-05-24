<template>
  <div class="members-info">
    <div class="tabbar">
      <div v-for="(item, index) in tabbar" class="tabbar-item" :data-index="index" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabbar: ['19届成员团', '18届成员团', '17届成员团'],
      currentTabIndex: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.members-info
  margin-top 80px
  .tabbar
    font-size 20px
    font-weight bold
    display flex
    justify-content space-between
    width 500px
    margin 0 auto
    .tabbar-item
      position relative
      &:last-child::after
        display none
    .tabbar-item::after     
      content ""
      width 50px
      height 5px
      background-color #3085a3
      position absolute
      top 50%
      left 100%
      transform translate(50%, -50%)
</style>
