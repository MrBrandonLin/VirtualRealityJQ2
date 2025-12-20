let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  for(let i=0; i<10; i++){
    let x = rnd(-20, 20);
    let z = rnd(-20, 20);
    boxert = new Box(x, 1, z);
    boxes.push(boxert);
  }
  loop();
 
}


function loop(){
  for(box of boxes){
    box.blast();
  }
  window.requestAnimationFrame( loop )
  
}