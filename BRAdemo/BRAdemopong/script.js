window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  marco = new pong(-30, 0, -28);
  polo = new ball(0, 0, -28);
  let buttonup = document.querySelector("#buttonup");
  let buttondown = document.querySelector("#buttondown");
  buttonup.addEventListener("mouseenter",function(){
    marco.state = "up";
  })
  buttondown.addEventListener("mouseenter" ,function(){
    marco.state = "down";
  })
  buttonup.addEventListener("mouseleave",function(){
    marco.state = "neutral";
  })
  buttondown.addEventListener("mouseleave" ,function(){
    marco.state = "neutral";
  })
  natural();

})

function natural(){
  polo.movement();
  marco.upndown();
  window.requestAnimationFrame( natural );
}