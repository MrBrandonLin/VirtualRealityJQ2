let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, stockpile = [], doctorarmy = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  let x, y, z;
  for(let i = 0; i<100; i++){
    let x = rnd(-50, 50);
    let y = rnd(-100, -50);
    let z = rnd(-50, 50);
    missile = new rocket(x, y, z);
    stockpile.push(missile);
  }

  for(let i = 0; i<100; i++){
    let x = rnd(-50, 50);
    let y = rnd(0, 10);
    let z = rnd(-50, 50);
    tardis = new alienpasture(x, y, z);
    doctorarmy.push(tardis);
  }

  loop();
})

function loop(){

  for(let i = 0; i < stockpile.length; i++){
    stockpile[i].launch();
  }
  window.requestAnimationFrame( loop );
}
