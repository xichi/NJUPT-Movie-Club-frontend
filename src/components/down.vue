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
    bottom: 10px;
    left: 50%;
    transform: translateX(-25px);
    animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
    0% {
        transform: translateY(0) ;
    }
    25% {
        transform: translateY(5px);
    }
    50% {
        transform: translateY(10px) scale(1.1, 0.9);  
    }
    75% {
        ransform: translateY(5px);
    }
    100% {
        transform: translateY(0) ;
    }
}
</style>