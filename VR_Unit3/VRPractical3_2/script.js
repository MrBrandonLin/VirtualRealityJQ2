let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, yeahitsthatonebrunomarssong = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let i = 0; i<20; i++){
    let x = rnd(-25, 25);
    let z = rnd(-25, 25);
    let xs = rnd(0, 15);
    let zs = rnd(0, 15);
    bruno = new dancemonkey(x, 1, z, xs, zs);
    yeahitsthatonebrunomarssong.push(bruno);
  }
      
  loop();
})

function loop(){
  for(let i=0; i<yeahitsthatonebrunomarssong.length; i++){
    yeahitsthatonebrunomarssong[i].nod();
    yeahitsthatonebrunomarssong[i].chase();
  }
  window.requestAnimationFrame(loop);
}