<template>
  <div class="main">
    <div class="card">
      <div class="card__m card__m--1"></div>
      <div class="card__m card__m--2"></div>
      <div class="card__m card__m--3"></div>
<!--       <div class="card__sun"></div> -->
      <div class="card__txt">
        <h4>NJUPT</h4>
        <h1>Movie Club</h1>
      </div>
      <div class="card__star card__star--1"></div>
      <div class="card__star card__star--2"></div>
      <div class="card__star card__star--3"></div>
      <div class="card__star card__star--4"></div>
      <div class="card__star card__star--5"></div>
      <div class="card__star card__star--6"></div>
      <div class="card__star card__star--7"></div>
      <div class="card__star card__star--8"></div>
      <div class="card__fugaz"></div>
    <div class="main_content">
      <div>
        <h1>南邮电影协会</h1>
        <h4>世界这么大，我只想和你聊聊电影~~</h4>
      </div> 
    </div>  
    </div>
  </div>
</template>

<style lang="less" scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Generic */
h1,
h2,
h4 {
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 5px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

h4,
h2 {
  letter-spacing: 4px;
  font-size: 16px;
}

h2 {
  position: relative;
  bottom: -355px;
  z-index: 200;
  font-size: 12px;
  letter-spacing: 2px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 0;
  overflow: hidden;
  transition: 0.15s ease;
  background-image: linear-gradient(to bottom, #85bbbd, #a0ccdb 80%);
}

 .card__m {
  z-index: 100;
  position: absolute;
  width: 80%;
  height: 80%;
  transform: rotateZ(135deg) skew(20deg, 20deg);
}
.card__m--1 {
  top: 95%;
  left: -50%;
  background-color: #40557c;
  transition: 0.2s ease-in;
}
.card__m--2 {
  top: 85%;
  left: 5%;
  background-color: #00cfcf;
  transition: 0.15s ease-in;
}
.card__m--3 {
  top: 90%;
  right: -10%;
  background-color: #1c84a6;
  transition: 0.1s ease-in;
}

.card__sun {
  position: absolute;
  left: 30%;
  top: 70%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e1e9ef;
  transition: 0.15s ease;
}
.card__txt {
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 25px;
  left: 25px;
}
.card__star {
  position: absolute;
  border-radius: 50%;
  background-color: #e1e9ef;
  filter: blur(1px);
}
.card__star--1 {
  height: 5px;
  width: 5px;
  top: 30%;
  left: 80%;
}
.card__star--2 {
  height: 4px;
  width: 4px;
  top: 20%;
  left: 90%;
}
.card__star--3 {
  height: 4px;
  width: 4px;
  top: 10%;
  left: 60%;
}
.card__star--4 {
  height: 3px;
  width: 3px;
  top: 25%;
  left: 50%;
}
.card__star--5 {
  height: 3px;
  width: 3px;
  top: 30%;
  left: 10%;
}
.card__star--6 {
  height: 4px;
  width: 4px;
  top: 10%;
  left: 20%;
}
.card__star--7 {
  height: 3px;
  width: 3px;
  top: 33%;
  left: 25%;
}
.card__star--8 {
  height: 5px;
  width: 5px;
  top: 15%;
  left: 35%;
}
.card__fugaz {
  position: absolute;
  left: -100px;
  top: -100px;
  height: 10px;
  width: 10px;
  background-color: rgba(225, 233, 239, 0.3);
  border-radius: 50%;
  transform: rotateZ(20deg);
  animation: fugaz 8s infinite;
}
.card__fugaz::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -50px;
  width: 60px;
  height: 16px;
  background-image: linear-gradient(
    to left,
    rgba(225, 233, 239, 0.3),
    rgba(225, 233, 239, 0.1)
  );
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  animation: fugaz-2 0.1s infinite;
  filter: blur(2px);
}

/**/
@keyframes fugaz {
  0% {
    left: -10%;
    top: -10%;
  }
  60%,
  100% {
    top: 20%;
    left: 120%;
  }
}
@keyframes fugaz-2 {
  0% {
    transform: skewX(30deg) scaleY(1);
  }
  100% {
    transform: skewX(-30deg) scaleY(0.5);
  }
}

/* 主体内容 */
.main_content{
  width:80%;
  height:80%;
  margin:100px auto;
  position:relative;
  color:rgb(44, 35, 35);
  background-color: rgba(250, 250, 250, 0.3); 

}




</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
   let bd = document.body;
    //let sunny = document.querySelector(".card__sun");
    let m1 = document.querySelector(".card__m--1");
    let m2 = document.querySelector(".card__m--2");
    let m3 = document.querySelector(".card__m--3");

    let getCard = event => {
      //let w = window.innerWidth / 2;
      let x = event.clientX;
      let y = event.clientY;

      //sunny.style.transform = `translateX(${x / 20}px) translateY(${y /
      //  20}px)`;

      m1.style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        50}px) translateY(${y / 55}px)`;

      m2.style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 45}px)`;

      m3.style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 35}px)`;
    };

    bd.addEventListener("mousemove", getCard); 
  },
  methods: {}
};
</script>