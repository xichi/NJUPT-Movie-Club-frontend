<template>
  <div id="app">
    <my-loading v-if="LOADING"></my-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import  myLoading from "_c/loading";
export default {
  name: 'app',
  components: {
    myLoading
  },
  computed:{
    ...mapState([
      'LOADING'
    ])
  },
  mounted(){
    window.onload = ()=>{
      this.$store.commit('HIDE_LOADING');
    }
  }
}
</script>

<style>
@import "./css/common.css";
/* 字体 */
@font-face {
  font-family: A61;
  src: url("http://njupt.xichi.xyz/fonts%2FA61%E5%8D%8E%E5%BA%B7%E5%A8%83%E5%A8%83%E4%BD%93.ttf");
}
/* 解决移动端页面出现 X轴横向滚动条问题 */
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}

/* base */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 0 20px;
}
a {
  color: rgb(223, 222, 222);
}
</style>
