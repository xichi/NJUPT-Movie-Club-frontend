<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import  myHeader  from "../src/components/Header";
export default {
  name: 'app',
  components: {
    myHeader
  },
  data() {
    return {
   
    }
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
body{
   margin:0;
   padding:0;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  padding: 0 20px;
}
a{
  color:rgb(223, 222, 222);
}

</style>
