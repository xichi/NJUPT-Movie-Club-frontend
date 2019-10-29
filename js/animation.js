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

$(function(){
  $(window).on("load",function(){
    $('.my-header').css('display','none'); 
    initialAnimation();
  });
  $(document.body).on("mousemove",function(){
  let x = event.clientX;
  let y = event.clientY;
  $('.back-img').css('background-position',`${-x /
    50}px ${-y / 30}px`);
  }); 

});

