window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  marco = new pong(-30, 0, -28);
  polo = new ball(0, 0, -28);
  buttonup = new button(-34, 2, -28);
  buttondown = new button(-34, -2, -28);
  natural();
  buttonup.addEventListener("mouseenter", function(){
    marco.upndown();
  });
})

function natural(){
  polo.movement();
  window.requestAnimationFrame( natural );
}