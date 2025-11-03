let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, clouds = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  for(let i = 0; i < 40; i++){
    let cloudss = new cloud(rnd(-20,20), 7 , rnd(-20,20));
    clouds.push(cloudss);
  }
  loop();
  //Challenge 3: Create a cloud at some high position. Don't forget to declare the variable up top.

  //Challenge 7: Create a snowflake at some high position. Don't forget to declare the variable up top.
})

function loop(){
  for(let a = 0; a<clouds.length; a++){
    clouds[a].fly();
  }
  //Challenge 4: Make the cloud fly
  //Challenge 8: Make the snowflake fall
  window.requestAnimationFrame(loop);
}
