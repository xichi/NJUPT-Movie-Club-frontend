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
      $('.my-header').css('display','block'); 
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

/* 影评动画 */
const FilmReviewAnimation = ()=> {
	var $app = $('.app');
	var animation = true;
	var curSlide = 1;
	var scrolledUp = void 0,
	    nextSlide = void 0;

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
  
  /* 滚动监听 */
  $(window).scroll(function(){
      if($(window).scrollTop() >= $('.filmReview').offset().top){
          $app.addClass('initial');
      } else{
        setTimeout(function () {
          animation = false;
        }, 4500);
      }
  });


	$(document).on("click", ".pages__item:not(.page__item-active)", function () {
		if (animation) return;
		var target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
  });
  
};

$(function(){
  $(window).on("load",function(){
    $('.my-header').css('display','none'); 
    $('.left-section').css('display','none'); 
    initialAnimation();  
  });
/*   $(document.body).on("mousemove",function(){
  let x = event.clientX;
  let y = event.clientY;
  $('').css('background-position',`${-x /
    50}px ${-y / 30}px`);
  });  */

  /* 滚动监听 */
  new WOW().init();

  /* 影评的动画 */
  FilmReviewAnimation();
  $('.app__img').on('click',function(){
    
  });
  
});


