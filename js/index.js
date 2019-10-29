
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
  .add({
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
  })
  .add({
    targets: '.square',
    opacity:[0,1],
    scaleY: { 
      value: [0,1],
      duration: 1000,
      easing: 'easeInOutQuad',
    }
  })
  .add({
    targets:'.square',
    scaleX: [1,10],
    scaleY: [1,10],
    duration: 1000,
    easing: 'easeInOutQuad',
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
  })
}


$(function(){
  $(window).on("load",function(){
    initialAnimation();
    /* $('.intro-wrapper').css('display','none'); */
  });
});

