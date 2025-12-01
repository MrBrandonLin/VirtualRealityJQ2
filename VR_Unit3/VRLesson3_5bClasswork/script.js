let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, potholes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  for(let i = 0; i < 10; i++){
    pothole = new Pothole(1, 1);
    potholes.push(pothole);
  }
  
  setTimeout(loop,100);
})
function loop(){
  /* Challenge 2
     Go through the potholes array.  If the distance between you and a 
     pothole is less than 1.7, set the camera's drop variable to true. 
  */
  for(let i = 0; i < potholes.length; i++){
    dis = distance(potholes[i].obj, camera);
    if(dis < 1.7){
      camera.drop = true;
    }
  }
  if(camera.drop){
    camera.object3D.position.y -= 0.025;
  }
 
  window.requestAnimationFrame(loop);
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