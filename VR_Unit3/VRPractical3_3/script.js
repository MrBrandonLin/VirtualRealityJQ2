let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, magazine = [], theevildead = [], ammo_boxes = [], ammo_count = 6, enemy_killed = 0;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  mappa = new map();
  sexbox = new blackout();
  for(let i = 0; i < 30; i++){
    x = rnd(-45, 45);
    z = rnd(-45, 45);
    type = rnd(0, 50);
    evilmf = new theevil(x, z, type);
    theevildead.push(evilmf);
  }

  window.addEventListener("keydown",function(e){
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
      magazine.push(bullet);
    }
    if(e.key == "r"){
      ammo_count = 6;
    }
  })
  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  for(let evildead of theevildead){
    evildead.track();
    for(let bullen of magazine){
      if(distance(evildead.theevil, bullen.bulletin)<1){
        evildead.life = false;
        bullen.donezo = true;
      }
    }
  }
  for(let bullen of magazine){
    if(bullen){
    bullen.fire();
  }
  }
  sexbox.blacking();
  mappa.track();
 
  window.requestAnimationFrame(loop);
}

function countdown(){

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}