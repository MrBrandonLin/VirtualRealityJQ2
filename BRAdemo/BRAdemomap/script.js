let rnd = (l,u) => Math.random() * (u-l) + l
theevildead = [], timin = 0;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mappa = new map();
  for(let i = 0; i < 30; i++){
    x = rnd(-45, 45);
    z = rnd(-45, 45);
    type = rnd(0, 50);
    evilmf = new theevil(x, z, type);
    theevildead.push(evilmf);
  }
  sexbox = new blackout();
  natural();
})

function natural(){
  mappa.track();
  for(let i = 0; i < theevildead.length; i++){
    theevildead[i].track();
  }
  sexbox.blacking();
  window.requestAnimationFrame( natural );
}