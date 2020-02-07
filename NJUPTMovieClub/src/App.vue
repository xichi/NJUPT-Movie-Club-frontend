<template>
  <div id="app">
    <my-loading v-if="LOADING" width="80px" height="80px"></my-loading>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import  myHeader  from "_c/Header";
import  myLoading from "_c/loading";
export default {
  name: 'app',
  components: {
    myHeader,
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
@import './css/common.css';

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
