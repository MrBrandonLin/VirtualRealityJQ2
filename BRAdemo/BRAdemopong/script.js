window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  marco = new pong(-30, 0, -28);
  polo = new ball(0, 0, -28);
  let buttonup = document.querySelector("#buttonup");
  let buttondown = document.querySelector("#buttondown");
  buttonup.addEventListener("click",function(){
    this.setAttribute("height",2);
  })
  natural();

});

function natural(){
  polo.movement();
  window.requestAnimationFrame( natural );
}