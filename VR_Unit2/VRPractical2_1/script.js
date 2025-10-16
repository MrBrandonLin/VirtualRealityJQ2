let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,6,z);
  }
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}

function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");
  
  let cloud1 = document.createElement("a-sphere");
  cloud1.setAttribute("position","0 0 0");
  cloud.append( cloud1 );

  let cloud2 = document.createElement("a-sphere");
  cloud2.setAttribute("position","1.5 0 0");
  cloud.append( cloud2 );
  let cloud3 = document.createElement("a-sphere");
  cloud3.setAttribute("position",".5 .5 0");
  cloud.append( cloud3 );

  cloud.setAttribute("position",{x:x, y:y, z:z});
  cloud.setAttribute("rotation",{x:y, y:z, z:x});
  scene.append( cloud )
}

function createHouse(x, y, z){
  let fullhouse = document.createElement("a-entity");
  
  let housebase = document.createElement("a-box");
  housebase.setAttribute("position","0 0 0");
  housebase.setAttribute("height",".5");
  housebase.setAttribute("color","orange");
  fullhouse.append( housebase );

  let housewalls = document.createElement("a-box");
  housewalls.setAttribute("position","0 .5 0");
  housewalls.setAttribute("width",".9");
  housewalls.setAttribute("depth",".9");
  housebase.setAttribute("height",".5");
  housewalls.setAttribute("color","yellow");
  fullhouse.append( housewalls );

  let houseroof = document.createElement("a-cone");
  houseroof.setAttribute("position","0 1.2 0");
  houseroof.setAttribute("rotation","0 45 0");
  houseroof.setAttribute("segments-radial","4");
  houseroof.setAttribute("height",".5");
  houseroof.setAttribute("width",".2");
  houseroof.setAttribute("color","blue");
  fullhouse.append( houseroof );

  fullhouse.setAttribute("position",{x:x, y:y, z:z});
  scene.append( fullhouse )
}
})