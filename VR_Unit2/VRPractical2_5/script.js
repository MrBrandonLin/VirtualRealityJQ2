let maze = [
  "3-3-3-3-3-3-3",
  "-3-1-1-1-1-3",
  "2-2-2-2-2-2-2",
  "-3-1-1-1-1-3",
  "2-2-2-2-2-2-2",
  "-3-1-1-1-1-3",
  "2-2-2-2-2-2-2",
  "-3-1-1-1-1-3",
  "2-2-2-2-2-2-2",
  "-3-1-1-1-1-3",
  "2-2-2-0-2-2-2",
  "-3-3-3-3-3-3"
];

let scene, labryinth = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let r = 0; r < maze.length; r++){
    let mazesegment = maze[r];
    for(let c = 0; c < mazesegment.length; c++){
      if(mazesegment.substring(c, c+1) == "0"){
        sexmachine = new daedalusparts("true", "normal", c*2, 0, r*2);
      } else if(mazesegment.substring(c, c+1) == "1"){
        sexmachine = new daedalusparts("true", "norm", c*2, 0, r*2);
      } else if(mazesegment.substring(c, c+1) == "2"){
        sexmachine = new daedalusparts("tru", "normal", c*2, 0, r*2);
      } else if(mazesegment.substring(c, c+1) == "3"){
        sexmachine = new daedalusparts("tru", "norm", c*2, 0, r*2);
      }
      labryinth.push(sexmachine);
    }
  }
  loop();
})

function loop(){
  for(let i = 0; i<labryinth.length; i++){
    labryinth[i].observation();
  }

  window.requestAnimationFrame( loop );
}