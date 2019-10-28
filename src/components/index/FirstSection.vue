<template>
  <div class="main">
      <div class="main_pic"></div>
      <div class="main_intro">
          <div class="intro_title">NJUPT Movie Club</div>
          <div class="intro_subtitle">世界这么大，我只想和你聊聊电影</div>
      </div>
  </div>
</template>

<script>
export default {
   data(){
       return{

       }
   },
   mounted(){
        let bd = document.body;
        let m1 = document.querySelector(".main_intro");

        let titleMove = event => {
        let x = event.clientX;
        let y = event.clientY;
        m1.style.transform = `translateX(${x /
            50}px) translateY(${y / 55}px)`;
        };

        bd.addEventListener("mousemove", titleMove); 
   }
}
</script>

<style lang="less" scoped>
.main{
    width:100%;
    height:50vh;
    .main_pic{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background:url(../../../public/th.jpg);
    filter: brightness(0.3); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: transparent;
    }
    .main_intro {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;           
        .intro_title, .intro_subtitle{
            font-family: "Oswald-Regular";
            color: #fff;
            margin: 0;
        }
        .intro_title{
            font-size: 3rem;
        }
        .intro_subtitle{
            font-size: 2rem;
        }
    }
}
</style>