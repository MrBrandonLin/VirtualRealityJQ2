let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, stockpile = [], doctorarmy = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  let x, y, z;
  for(let i = 0; i<100; i++){
    let x = rnd(-50, 50);
    let y = rnd(-100, -50);
    let z = rnd(-50, 50);
    let s = rnd(3, 6);
    s = s/10;
    missile = new rocket(x, y, z, s);
    stockpile.push(missile);
  }

  for(let i = 0; i<100; i++){
    let x = rnd(-50, 50);
    let y = rnd(100, 150);
    let z = rnd(-50, 50);
    let s = rnd(1, 3);
    s = s/10;
    tardis = new alienpasture(x, y, z, s);
    doctorarmy.push(tardis);
  }

  loop();
})

function loop(){

  for(let i = 0; i < stockpile.length; i++){
    stockpile[i].launch();
  }
  for(let i = 0; i < doctorarmy.length; i++){
    doctorarmy[i].crash();
  }
  window.requestAnimationFrame( loop );
}
