let rnd = (l,u) => Math.random() * (u-l) + l
theevildead = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mappa = new map();
  for(let i = 0; i < 30; i++){
    x = rnd(-45, 45);
    z = rnd(-45, 45);
    evilmf = new theevil(x, z);
    theevildead.push(evilmf);
  }
  natural();
})

function natural(){
  mappa.track();
  mappa.ad()
  for(let i = 0; i < theevildead.length; i++){
    theevildead[i].track();
  }
  window.requestAnimationFrame( natural );
}