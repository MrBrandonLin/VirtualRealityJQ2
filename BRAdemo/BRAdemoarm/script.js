window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  heavensgrace = new arm();
  natural();
})

function natural(){
  heavensgrace.bend();
  window.requestAnimationFrame( natural );
}