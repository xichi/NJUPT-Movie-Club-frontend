<template>
  <el-menu :default-active="activeIndex" class="myHeader" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">icon</el-menu-item>
  <el-submenu index="2">
    <template slot="title">更多电影</template>
    <el-menu-item index="2-1">影库</el-menu-item>
    <el-menu-item index="2-2">影评</el-menu-item>
    <el-submenu index="2-3">
      <template slot="title">往期主题</template>
      <el-menu-item index="2-3-1">选项1</el-menu-item>
      <el-menu-item index="2-3-2">选项2</el-menu-item>
      <el-menu-item index="2-3-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4">加入我们</el-menu-item>
</el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
        },
        methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.myHeader{
    position:absolute;
    width:100%;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.3);
    color:#fff;
    z-index:9999;
}
</style>