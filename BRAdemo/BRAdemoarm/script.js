window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  heavensgrace = new arm();
  punchcombo = 0;
  window.addEventListener("click", function(){
    punchcombo += 1;
    if(punchcombo%2 == 0){
      heavensgrace.action = "punch";
      heavensgrace.curen = 0;
      heavensgrace.rz1 = -30;
      heavensgrace.rzt1 = 4.5;
      heavensgrace.rz2 = 80;
      heavensgrace.rzt2 = -7.5;
      console.log("next");
      console.log(punchcombo);
    } else if(punchcombo%2 == 1){
      heavensgrace.action = "cross";
      heavensgrace.curen = 0;
      heavensgrace.r1 = 0;
      heavensgrace.rt1 = -4.5;
      heavensgrace.r2 = 80;
      heavensgrace.rt2 = -7.5;
      console.log("next");
      console.log(punchcombo);
    }
  })
  natural();
})

function natural(){
  heavensgrace.bend();
  heavensgrace.follow();
  window.requestAnimationFrame( natural );
}