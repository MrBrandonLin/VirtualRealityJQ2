let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 360;
  target.da = -.4;

  loop();
})

function loop(){
  if(target.a <= 270){
    target.da = 0;
  }
  target.a += target.da;

  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}