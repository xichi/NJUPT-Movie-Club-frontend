<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
   
    }
  },
  mounted(){
/*     let loading = this.$loading({
        type: 'audio',
        text: 'Loading...',
        background: '#rgba(255,245,236,0.5)'
    })
    setTimeout(() => {
      loading.close();
    }, 1000) */
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
</style>
