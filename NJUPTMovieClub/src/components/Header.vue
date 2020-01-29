<template>
   <ul class="myHeader">
       <li class="icon"><img src="../assets/icon.png" alt=""></li>
       <li class="home"><a href="">首页</a></li>
       <li class="weelky-movies"><a href="">每周电影</a></li>
       <li class="department-introduction"><a href="">部门介绍</a></li>
       <li class="member-introduction"><a href="">成员介绍</a></li>
       <li class="film-reviews"><a href="">精彩影评</a></li>
       <li class="contact-us"><a href="">联系我们</a></li>
   </ul>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.myHeader
    position fixed
    top 0
    left 0
    z-index 9999
    .icon
        img 
            width 100px
            height auto
</style>