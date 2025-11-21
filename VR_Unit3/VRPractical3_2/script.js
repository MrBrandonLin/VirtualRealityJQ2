let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  bruno = new dancemonkey(1, 1, 1);

      
  loop();
})

function loop(){
  bruno.nod();
    
  window.requestAnimationFrame(loop);
}