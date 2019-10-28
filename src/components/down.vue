<template>
  <div class="main">
      <img src="../../public/down.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
    position: relative; 
}
.main img{
    position: absolute; 
    width: 50px;
    height: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) ;
    }
    25% {
        transform: translate(-50%, 5px);
    }
    50% {
        transform: translate(-50%, 10px) scale(1.1, 0.9);  
    }
    75% {
        ransform: translate(-50%, 5px);
    }
    100% {
        transform: translate(-50%, 0) ;
    }
}
</style>