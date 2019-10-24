<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './pages/index'
export default {
  name: 'app',
  components: {
      index
  },
  data() {
    return {
   
    }
  },
  mounted(){
    let loading = this.$loading({
        type: 'audio',
        text: 'Loading...',
        background: '#000'
    })
    setTimeout(() => {
      loading.close();
    }, 5000)
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
}
</style>
