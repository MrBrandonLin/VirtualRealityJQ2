window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  conwaysgame = new conway(2, 5, "12321212");
})

function natural(){

  window.requestAnimationFrame( natural );
}