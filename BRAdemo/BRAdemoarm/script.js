window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  heavensgrace = new arm();
  window.addEventListener("click", function(){
    heavensgrace.action = "punch";
    heavensgrace.curen = 0;
    heavensgrace.r1 = -30;
    heavensgrace.rt1 = 4.5;
    heavensgrace.r2 = 80;
    heavensgrace.rt2 = -7.5;
  })
  natural();
})

function natural(){
  heavensgrace.bend();
  heavensgrace.follow();
  window.requestAnimationFrame( natural );
}