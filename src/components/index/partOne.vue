<template>
  <div class="main">
    <div class="card">
      <div class="card__m card__m--1"></div>
      <div class="card__m card__m--2"></div>
      <div class="card__m card__m--3"></div>
      <div class="card__m card__m--4"></div>
      <div class="card__m card__m--5"></div>
      <div class="card__m card__m--6"></div>
      <div class="card__sun"></div>
      <div class="card__txt">
        <h4>NJUPT</h4>
        <h1>Movie Club</h1>
        <h2>
          FRIDAY SEP 4
          <sup>th</sup>
        </h2>
      </div>
      <div class="card__star card__star--1"></div>
      <div class="card__star card__star--2"></div>
      <div class="card__star card__star--3"></div>
      <div class="card__star card__star--4"></div>
      <div class="card__star card__star--5"></div>
      <div class="card__fugaz"></div>
    </div>
    <!-- <div class="card card--b">
      <div class="card__m card__m--1 card__m--b1"></div>
      <div class="card__m card__m--2 card__m--b2"></div>
      <div class="card__m card__m--3 card__m--b3"></div>
      <div class="card__m card__m--4 card__m--b4"></div>
      <div class="card__m card__m--5 card__m--b5"></div>
      <div class="card__sun"></div>
      <div class="card__txt">
        <h1>MONTANA</h1>
        <h4>CLOUDY 40o</h4>
        <h2>
          FRIDAY SEP 4
          <sup>th</sup>
        </h2>
      </div>
      <div class="card__star card__star--1"></div>
      <div class="card__star card__star--2"></div>
      <div class="card__star card__star--3"></div>
      <div class="card__star card__star--4"></div>
      <div class="card__star card__star--5"></div>
      <div class="card__fugaz"></div>
    </div> -->
  </div>
</template>

<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Generic */
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e9ef;
  font-family: "PT Sans", sans-serif;
  color: white;
  user-select: none;
}

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

sup {
  font-size: 6px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 0;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  transition: 0.15s ease;
  background-image: linear-gradient(to bottom, #28d7cf, #8cecd8 40%);
}
.card--b {
  background-image: linear-gradient(to bottom, #93a2af, #ddd2d5 40%);
}
.card__m {
  z-index: 100;
  position: absolute;
  transform: rotateZ(135deg) skew(20deg, 20deg);
}
.card__m--1 {
  top: 220px;
  left: -235px;
  width: 500px;
  height: 500px;
  background-color: #55ded5;
  transition: 0.2s ease-in;
}
.card__m--2 {
  top: 220px;
  left: -135px;
  width: 500px;
  height: 500px;
  background-color: #00cfcf;
  transition: 0.15s ease-in;
}
.card__m--3 {
  top: 220px;
  left: 100px;
  width: 500px;
  height: 500px;
  background-color: #1c84a6;
  transition: 0.1s ease-in;
}
.card__m--4 {
  top: 350px;
  left: -75px;
  width: 500px;
  height: 500px;
  background-color: #40557c;
}
.card__m--5 {
  top: 340px;
  left: -285px;
  width: 500px;
  height: 500px;
  background-color: #47466b;
}

.card__m--6 {
  top: 340px;
  left: 885px;
  width: 1200px;
  height: 600px;
  background-color: #281231;
}

.card__m--b1 {
  background-color: #aeb7be;
}
.card__m--b2 {
  background-color: #6f8a9c;
}
.card__m--b3 {
  background-color: #205a6e;
}
.card__m--b4 {
  background-color: #3a405a;
}
.card__m--b5 {
  background-color: #453750;
}
.card__sun {
  position: absolute;
  left: 30%;
  top: 30%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e1e9ef;
  transition: 0.15s ease;
}
.card__txt {
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
    left: -100px;
    top: -100px;
  }
  60%,
  100% {
    top: 100px;
    left: 380px;
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
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let bd = document.body;
    let sunny = document.querySelectorAll(".card__sun");
    let m1 = document.querySelectorAll(".card__m--1");
    let m2 = document.querySelectorAll(".card__m--2");
    let m3 = document.querySelectorAll(".card__m--3");

    let getCard = event => {
      //let w = window.innerWidth / 2;
      let x = event.clientX;
      let y = event.clientY;

      sunny[0].style.transform = `translateX(${x / 20}px) translateY(${y /
        20}px)`;
      sunny[1].style.transform = `translateX(${x / 20}px) translateY(${y /
        20}px)`;

      m1[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        50}px) translateY(${y / 55}px)`;
      m1[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        50}px) translateY(${y / 55}px)`;

      m2[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 45}px)`;
      m2[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 45}px)`;

      m3[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 35}px)`;
      m3[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x /
        35}px) translateY(${y / 35}px)`;
    };

    bd.addEventListener("mousemove", getCard);
  },
  methods: {}
};
</script>