let rnd = (l,u) => Math.random() * (u-l) + l
theevildead = [], sexpistols = [], timin = 0;
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
  i = 0, dachi = false;
  natural();
})

function natural(){
  mappa.track();
  oldbetsie.ammocount();
  
  for(let evildead of theevildead){
    evildead.track();
  }
  window.addEventListener("click", ()=>{
    dachi = true;
  })
  if(dachi && oldbetsie.ammo > 0){
    bulletin = new bullet();
    sexpistols.push(bulletin);
    dachi = false;
  }
  for(bullets of sexpistols){
    bullets.unloaded();
  }
  
  dachi = false;
    
  sexbox.blacking();
  window.requestAnimationFrame( natural );
}
