let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i<100; i++){
    let x = rnd(-15, 15);
    let y = rnd(25, 50);
    let z = rnd(-15, 15);
    johnball = new Ball(x, y ,z);
  }

  
})