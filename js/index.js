/* 滚动监听 */
var xRoll = function (el, fn) {
  xRoll.prototype.init(el, fn)
};
xRoll.prototype = {
  init: function (_el, fn) {
      _el.attr("data-state", false);
      this.start(_el, fn);
      $(window).on("scroll", function () {
          xRoll.prototype.start(_el, fn)
      })
  },
  start: function (_el, fn) {
      var _this = this;
      $(_el).each(function () {
          var _self = $(this);
          var xRollTop = $(window).scrollTop();
          var isWindowHeiget = $(window).height();
          if (_self.data().state) {
              return
          }
          if (xRollTop + isWindowHeiget > $(this).offset().top) {
              fn();
              setTimeout(function () {
                  _self.attr("data-state", true);
                  _self.data().state = true
              })
          }
      })
  }
};
/* header */
const navbarFixed = ()=>{
  if ( $('.header_area').length ){ 
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();   
          if (scroll >= 295) {
              $(".header_area").addClass("navbar_fixed");
          } else {
              $(".header_area").removeClass("navbar_fixed");
          }
      }); 
  };
}; 
/* 第二屏 */
const weeklyMovies = ()=>{
  const elApp = document.querySelector('.weekly-movies');

  const svgNS = 'http://www.w3.org/2000/svg';
  const elSvgNav = document.querySelector('.weekly-movies-nav svg');
  
  const elTspans = [...document.querySelectorAll('tspan')];;
  const length = elTspans.length - 1;
  
  elSvgNav.style.setProperty('--length', length);
  
  // Getting the length for distributing the text along the path
  const elNavPath = document.querySelector('#navPath');
  const elLastTspan = elTspans[length];
  const navPathLength = elNavPath.getTotalLength() - elLastTspan.getComputedTextLength();
  
  function selectPlanetByIndex(i) {
    currentPlanetIndex = i;
    elApp.style.setProperty('--active', i);
    selectPlanet(planetKeys[i]);
  }
  
  elTspans.forEach((tspan, i) => {
    let percent = i / length;
  
    tspan.setAttribute('x', percent * navPathLength);
    tspan.setAttributeNS(svgNS, 'x', percent * navPathLength);
  
    tspan.addEventListener('click', e => {
      e.preventDefault();
      selectPlanetByIndex(i);
    });
  
  });
}
/* 开屏动画 */
const calcScale = (itemRect, targetRect) => {
  const scaleX = targetRect.width / itemRect.width;
  const scaleY = targetRect.height / itemRect.height;
  return { x: scaleX, y: scaleY };
}

const initialAnimation = ()=> {
  const timeline = anime.timeline()
  timeline.add({
    targets: '.intro-wrapper',
    scaleX: [0,1],
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 900
  }).add({
    targets: '.intro-title span:nth-child(2n+1)',
    translateY: ['-100%','0%'],
    duration: 420,
    opacity: [0,1],
    easing: 'easeOutSine',
    offset: '-=180',
  })
  .add({
    targets: '.intro-title span:nth-child(2n)',
    translateY: ['100%','0%'],
    duration: 420,
    opacity: [0,1],
    easing: 'easeOutSine',
    offset: '-=420',
  })
  /* .add({
    targets: '.line',
    opacity: [0,1],
    scaleX: [0,1],
    duration: 1000,
    easing: 'linear',
  })
  .add({
    targets: '.line',
    opacity: [1,0],
    scaleX: [1,0],
    duration: 1000,
    easing: 'linear',
  }) */
  .add({
    targets: '.square',
    opacity:[0,1],
    scaleY: { 
      value: [0,1],
      duration: 1000,
      easing: 'easeInOutQuad',
    },
    rotate: {
      value: 180,
      duration: 1800,
      easing: 'easeInOutSine'
    },
  })
  .add({
    targets:'.square',
    scaleX: [1,2],
    scaleY: [1,2],
    duration: 1000,
    easing: 'easeInOutQuad',
    begin: (anim)=> {
      const rect = anim.animatables[0].target.getBoundingClientRect();
      const windowRect = { width: window.innerWidth, height: window.innerHeight};
      const scale = calcScale(rect,windowRect);
      anim.animations[0].tweens[0].to.original = `${scale.x}`;
      anim.animations[0].tweens[0].to.numbers[0] = scale.x;
      anim.animations[1].tweens[0].to.original = `${scale.y}`;
      anim.animations[1].tweens[0].to.numbers[0] = scale.y;
    }
  })
  .add({
    targets: '.intro-title',
    duration: 800,
    opacity: [1,0],
    easing: 'easeOutSine',
  })
  .add({
    targets: '.first-section',
    duration: 800,
    translateX:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeOutSine',
  }).add({
    targets: '.my-header',
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 100,
    begin:()=>{
      $('.header_area').css('display','block');
      $('.left-section').css('display','block');
    }
  }).add({
    targets: '.slogan',
    translateX:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 900,
  }).add({
    targets: '.up-down img',
    translateY:['200%','0%'],
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 900,
  })
}

/* 成员介绍切换动画 */


/* 影评动画 */
const FilmReviewAnimation = ()=> {
	var $app = $('.app');
	var animation = true;
	var curSlide = 1;
	var scrolledUp = void 0,
	    nextSlide = void 0;

  /* 分页 */
	var pagination = function pagination(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}

		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');

		$app.toggleClass('active');
		setTimeout(function () {
			animation = false;
		}, 3000);
  };
  
  /* 滚动监听--播放动画 */
  xRoll($('.filmReview'), function() {
    setTimeout(function () {
      $app.addClass('initial');
     }, 500);
     setTimeout(function () {
      animation = false;
     }, 4500);
  });


	$(document).on("click", ".pages__item:not(.page__item-active)", function () {
		if (animation) return;
    var target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
  });

  /* 点击查看详细影评 */
  $('.app__content').css('display','none');
  $('.app').on('click',function(){
    const timeline = anime.timeline();
    timeline.add({
      targets: '.app__img',
      opacity: [1,0],  
      translateY:['0%','-50%'],
      easing: 'easeInOutSine',
      duration: 1000,
    }).add({
      targets: '.app__bgimg-image',
      translateY:['0%','-50%'],
      easing: 'easeInOutSine',
      duration: 900,
    }).add({
      targets: '.app__text',
      scale:[1,0.5],
      top:'20%',
      left:'0%',
      /* translateX: ['0%','60%'],
      translateY:['0%','-70%'], */
      easing: 'easeInOutSine',
      duration: 900,
    }).add({
      targets: '.app__content',
      top:'50%',
      easing: 'easeInOutSine',
      duration: 900,
      begin:()=>{
        $('.app__content--'+$('.page__item-active').attr('data-target')).css('display','inline-block');
      }
    }); 
    $(document).on("click", ".pages__item:not(.page__item-active)", function () {
      const timeline2 = anime.timeline();
      timeline2.add({
        targets: '.app__content',
        opacity: [1,0],  
        top:'0%',
        easing: 'easeInOutSine',
        duration: 1000,
      }).add({
        targets: '.app__content',
        opacity: [0,1],  
        top:'50%',
        easing: 'easeInOutSine',
        duration: 1000,
        begin:()=>{
          let target = $('.page__item-active').attr('data-target');
          $('.app__content').css('display','none');
          $('.app__content--'+target).css('display','inline-block');
        },
      });
    });
  });
  
};

$(function(){
  $(window).on("load",function(){
    /* $('.header_area').css('display','none'); 
    $('.left-section').css('display','none'); 
    initialAnimation();   */
  });
  $(document.body).on("mousemove",function(){
  let x = event.clientX;
  let y = event.clientY;
  $('.bg-layer').css('background-position',`${-x /
    10}px ${-y / 10}px`);
  });  

  /* 滚动监听 */
  new WOW().init();

  /* SB动画 */
  FilmReviewAnimation();
  navbarFixed();
  weeklyMovies();
  
});



