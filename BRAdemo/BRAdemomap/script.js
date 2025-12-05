let rnd = (l,u) => Math.random() * (u-l) + l
theevildead = [], timin = 0;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mappa = new map();
  oldbetsie = new rifle();
  for(let i = 0; i < 30; i++){
    x = rnd(-45, 45);
    z = rnd(-45, 45);
    type = rnd(0, 50);
    evilmf = new theevil(x, z, type);
    theevildead.push(evilmf);
  }
  sexbox = new blackout();
  natural();

  window.addEventListener("click", ()=>{
    oldbetsie.firing = true;
  })
})

function natural(){
  mappa.track();
  if(oldbetsie.firing){
    oldbetsie.ammocount();
    oldbetsie.bulletphys();
    oldbetsie.firing = false;
  }
  oldbetsie.reload();
  for(let evildead of theevildead){
    evildead.track();
  }
  sexbox.blacking();
  window.requestAnimationFrame( natural );
}
