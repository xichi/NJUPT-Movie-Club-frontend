let clickCount = 0;
let f = e => {
  let symbol = document.createElement("span");
  symbol.style.position = "absolute";
  symbol.style.fontSize = "15px";
  symbol.style.top = `${e.pageY - 10}px`;
  symbol.style.left = `${e.pageX - 10}px`;
  symbol.style.zIndex = "999";
  symbol.style.userSelect = "none"; // 禁止文本被选中，影响美观
  symbol.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  symbol.style.transition = `all 1s ease`;
  document.body.appendChild(symbol);

  symbol.addEventListener("transitionend", function (et) {
    if (et.propertyName == "opacity" && et.srcElement.style.opacity == 0)
      et.srcElement.remove();
  });

  switch (++clickCount) {
    case 1:
      symbol.innerText = "NJUPT";
      break;
    case 2:
      symbol.innerText = "MOVIE";
      break;
    case 3:
      symbol.innerText = "CLUB";
      break;
    case 4:
      symbol.style.fontSize = "18px";
      symbol.innerText = "☁";
      break;
    default:
      symbol.innerText = "❤";
      symbol.style.fontSize = "18px";
      clickCount = 0;
  }

  window.requestAnimationFrame(() => {
    symbol.style.top = `${e.pageY - 100}px`;
    symbol.style.opacity = 0;
  });
};
  document.addEventListener("click", f);
  setInterval(document.addEventListener("hashchange",()=>{
    console.log('11');
  }), 100);
  //setTimeout(document.removeEventListener("click", f),200)

