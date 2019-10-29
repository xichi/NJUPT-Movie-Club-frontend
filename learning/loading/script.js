let last = 0;
let current = 0;

const slides = [1,2,3].map((c)=>document.getElementById(`wrapper-${c}`));
const content = [1,2,3].map((c)=>document.getElementById(`content-${c}`));

const calcScale = (itemRect, targetRect) => {
  const scaleX = targetRect.width / itemRect.width;
  const scaleY = targetRect.height / itemRect.height;
  return { x: scaleX, y: scaleY };
}
let ableToClick = false;

const initialAnimation = ()=> {
  const timeline = anime.timeline()
  timeline.add({
    targets: '.intro-wrapper',
    scaleX: [0,1],
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 900
  })
  .add({
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
    targets: '.square',
    scaleY: { 
      value: [0,1],
      duration: 1000,
      easing: 'easeInOutQuad',
    },
    begin: (anim)=>{
      console.log('whole',anim)
      anim.animatables[0].target.style.transformOrigin = 'bottom center';
    },
  }).add({
    targets:'.square',
    rotate: [0,45],
    duration: 1000,
    easing: 'easeInOutQuad',
    begin: (anim)=>{
      console.log('rotate',anim)
      anim.animatables[0].target.style.transformOrigin = 'center center';
    }
  }).add({
    targets:'.square',
    rotate: [45,90],
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  .add({
    targets:'.square',
    scaleX: [1,2],
    scaleY: [1,2],
    duration: 1000,
    easing: 'easeInOutQuad',
    begin: (anim)=> {
      // Need to get current size and calculate its scale
      // Also called. Spagethi
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
    targets: '.intro-title span:nth-child(2n+1)',
    translateY: ['0%','-100%'],
    duration: 750,
    opacity: [1,0],
    easing: 'easeInOutQuad',
  })
  .add({
    targets: '.intro-title span:nth-child(2n)',
    translateY: ['0%','100%'],
    duration: 750,
    opacity: [1,0],
    easing: 'easeInOutQuad',
    offset: '-=750',
    complete: (anim)=> {
      enterImage(1,2,true)
    }
  })
}

const enterImage = (current,last,initial = false)=>{
  console.log(current,last)
  const timeline = anime.timeline();
  timeline.add({
    targets: `#wrapper-${current}`,
    zIndex: 2,
    duration: 0
  })
  .add({
    targets: `#wrapper-${last}`,
    zIndex: 1,
    duration: 0
  })
  .add({
      targets: `#wrapper-${current} .top`,
      clipPath: ['polygon(0 0, 0 40%, 0 40%, 0 0)','polygon(100% 0%, 100% 1%, 0 40%, 0 0%)'],
      easing: 'easeOutSine',
      duration: 420,
      complete: (anim)=>{
        if(!initial) {
          enterText(current);
          leaveText(last);
        } 
      }
  })
  .add({
      targets: `#wrapper-${current} .top .image`,
      scale: [1.2,1],
      easing: 'easeOutSine',
      duration: 420,
      offset: 0,
  })
  .add({
      targets: `#wrapper-${current} .middle`,
      clipPath: ['polygon(0 40%, 0 100%, 0 100%, 0 40%)','polygon(100% -1%, 100% 61%, 0 100%, 0 39%)'],
      easing: 'easeOutSine',
      duration: 420,
      offset: 99.999,
      complete: (anim)=>{
        if(initial) initialTextEnter();
      }
  })
  .add({
      targets: `#wrapper-${current} .middle .image`,
      scale: [1.2,1],
      easing: 'easeOutSine',
      duration: 420,
      offset: 99.999,
  })
  .add({
      targets: `#wrapper-${current} .bottom`,
      clipPath: ['polygon(0 100%, 0 100%, 0 100%, 0 100%)','polygon(100% 59%, 100% 100%, 0 100%, 0 99%)'],
      easing: 'easeOutSine',
      duration: 420,
      offset: 166.666,
    complete:()=>{
    }
  })
  .add({
      targets: `#wrapper-${current} .bottom .image`,
      scale: [1.2,1],
      easing: 'easeOutSine',
      duration: 420,
      offset: 166.666,
  })
  .add({
    targets: `#wrapper-${last}`,
    zIndex: 0,
    duration: 0
  })
}

 const enterText = (index,initial = false) => {
  ableToClick = true;
  const timeline = anime.timeline();
  timeline.add({
    targets: `#content-${index} .gallery-title`,
    opacity: [0,1],
    translateY: ['-50%','0%'],
    easing: 'easeOutSine',
    duration: 433.333,
    offset: initial ? 0 : 433.333,
  })
  .add({
    targets: `#content-${index} .gallery-subtitle`,
    opacity: [0,1],
    translateY: ['-120%','0%'],
    easing: 'easeOutSine',
    duration: 433.333,
    offset: initial ? 99.999 : 433.333333 + 99.999999,
  })
}

const leaveText = (index) => {
  const timeline = anime.timeline();
  timeline.add({
    targets: `#content-${index} .gallery-subtitle`,
    opacity: [1,0],
    translateY: ['0%','120%'],
    easing: 'easeOutSine',
    duration: 433.333,
  }).add({
    targets: `#content-${index} .gallery-title`,
    opacity: [1,0],
    translateY: ['0%','50%'],
    easing: 'easeOutSine',
    duration: 433.333,
    offset: 99.999,
  })
  
}
const initialTextEnter = ()=>{
  
  const timeline = anime.timeline();
  timeline.add({
    targets: '.nav-links li',
    translateY: ['-100%','0%'],
    opacity: [0,1],
    easing: 'easeOutSine',
    duration: 433.333,
  })
  .add({
    targets: '.nav-logo',
    translateY:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeOutSine',
    duration: 433.333,
    offset: 99.999
  })
  .add({
    targets: '.slider-shop',
    translateY:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeOutSine',
    duration: 433.333,
    offset: 166.666
    
  })
  .add({
    targets: '.nav-lang li',
    translateY:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeInOutSine',
    duration:  433.333,
    offset: 199.999
  })
  .add({
    targets:['.slider-ldn span','.slider-nyc span'],
    translateX:['100%','0%'],
    opacity: [0,1],
    easing: 'easeInOutSine',
    duration:  433.333,
    offset: 266.666,
    begin: (anim)=>{
      enterText(1,true);
    }
  })
  .add({
    targets:['.slider-nyc span'],
    translateX:['-100%','0%'],
    opacity: [0,1],
    easing: 'easeInOutSine',
    duration:  433.333,
    offset: 266.666
  })
  
  
}
 
window.onload = function(){
  initialAnimation();
  const hammerElement = new Hammer(window);
  hammerElement.on('tap',function(){
    if(!ableToClick) return; 
    ableToClick = false;

    last = current;
    current++;
    if(current >= slides.length) {
      current = 0;
    }

    enterImage(current + 1,last + 1);
  }) 
}