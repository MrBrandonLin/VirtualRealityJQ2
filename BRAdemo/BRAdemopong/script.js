window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  marco = new pong(-30, 0, -28);
  polo = new ball(0, 0, -28);
  natural();
})

function natural(){
  polo.movement();
  marco.upndown();
  window.requestAnimationFrame( natural );
}