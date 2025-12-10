let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, magazine = [], theevildead = [], thedeadevildead = [], ammo_boxes = [], ammo_count = 6, enemy_killed = 0, alreadydead = false;
let directive = [-50, 50, -50, 50];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  mappa = new map();
  sexbox = new blackout();
  betsie = new rifle();
  for(let i = 0; i < 30; i++){
    x = rnd(-45, 45);
    z = rnd(-45, 45);
    type = rnd(0, 50);
    evilmf = new theevil(x, z, type);
    theevildead.push(evilmf);
  }
  for(let i = 0; i < 4; i++){
    t = directive[i];
    if(i<2){
      for(let ii = 0; ii<50; ii++){
        x = rnd(-10000, 10000);
        z = rnd(-10000, 10000);
        scale = rnd(3, 10);
        rocka = new rocknbowl(t+(x*.0001), ((ii-25)*2)+(z*.0001), scale);
      }
    } else {
      for(let ii = 0; ii<50; ii++){
        x = rnd(-10000, 10000);
        z = rnd(-10000, 10000);
        scale = rnd(3, 10);
        rocka = new rocknbowl(((ii-25)*2)+(x*.0001), t+(z*.0001), scale);
      }
    }
  }

  window.addEventListener("keydown",function(e){
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
      magazine.push(bullet);
      betsie.ammo--;
    }
    if(e.key == "r"){
      ammo_count = 6;
      betsie.ammo = 6;
    }
  })
  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  for(let evildead of theevildead){
    evildead.track();
    for(let bullen of magazine){
      if(distance(evildead.theevil, bullen.bulletin)<.5){
        if(alreadydead == false){
          enemy_killed+=1;
        }
        evildead.life = false;
        bullen.donezo = true;
        alreadydead = true;
      }
    }
    if(evildead.life == false){
      thedeadevildead.push(evildead);
    }
  }
  mappa.enemy = 30 - thedeadevildead.length;
  thedeadevildead.length = 0;
  
  for(let bullen of magazine){
    if(bullen){
    bullen.fire();
    }
  }
  betsie.count();
  sexbox.blacking();
  mappa.track();
 
  window.requestAnimationFrame(loop);
}

function countdown(){
  mappa.time();
  if(mappa.cur < 0){
    console.log("YOU LOSE WHITEBOY");
  }
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