window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  marco = new pong(-30, 0, -28);
  polo = new ball(0, 0, -28);
  let buttonup = document.querySelector("#buttonup");
  let buttondown = document.querySelector("#buttondown");
  buttonup.addEventListener("mouseenter",function(){
    moveup();
  })
  buttondown.addEventListener("mouseenter" ,function(){
    movedown();
  })
  natural();

})
function moveup(){
  marco.up();
  window.requestAnimationFrame( moveup );
}
function movedown(){
  marco.down();
  window.requestAnimationFrame( movedown );
}
function moveno(){
  marco.neutral();
  window.requestAnimationFrame( moveno );
}
function natural(){
  polo.movement();
  window.requestAnimationFrame( natural );
}