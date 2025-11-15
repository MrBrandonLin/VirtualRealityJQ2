let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let maze1 = [
  "32222---22223",
  "--2-2-0-2-2",
  "-3-143-141-3",
  "--0-2-2-0-0",
  "-341-1-143-3",
  "--242-2-0-2",
  "-3-143-1-1-3",
  "--0-2-0-0-0",
  "-3-1-1-14343",
  "--2-2-0-2-2--",
];
let maze2 = [
  "-",
  "-0-0-0-0-0-0",
  "-",
  "-0-0-0-0-0-0",
  "-",
  "-0-0-0-0-0-0",
  "-",
  "-0-0-0-0-0-0",
  "-",
  "-0-0-0-0-0-0",
  "-",
];

let scene, labryinth = [], ry, rz;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let r = 0; r < maze1.length; r++){
    let mazesegment = maze1[r];
    for(let c = 0; c < mazesegment.length; c++){
      if(mazesegment.substring(c, c+1) == "0"){
        sexmachine = new daedalusparts("true", "normal", c*2, -1, r*2);
        labryinth.push(sexmachine);
      } else if(mazesegment.substring(c, c+1) == "1"){
        sexmachine = new daedalusparts("true", "norm", c*2, -1, r*2);
        labryinth.push(sexmachine);
      } else if(mazesegment.substring(c, c+1) == "2"){
        sexmachine = new daedalusparts("tru", "normal", c*2, -1, r*2);
        labryinth.push(sexmachine);
      } else if(mazesegment.substring(c, c+1) == "3"){
        sexmachine = new daedalusparts("tru", "norm", c*2, -1, r*2);
        labryinth.push(sexmachine);
      } else if(mazesegment.substring(c, c+1) == "4"){
        let ry = rnd(0, 360);
        let rz = rnd(0, 360);
        boner = new mrskellybones(c*2, .02, r*2, ry, rz);
      }
    }
    for(let r = 0; r < maze2.length; r++){
      let mazesegment = maze2[r];
      for(let c = 0; c < mazesegment.length; c++){
        if(mazesegment.substring(c,c+1)==0){
          columns = new column(c*2, 1.5, r*2);
        }
      } 
    }
  }
  frost = new barrier(12, 2, 10);
  loop();
})

function loop(){
  for(let i = 0; i<labryinth.length; i++){
    labryinth[i].observation();
  }
  frost.timestress();

  window.requestAnimationFrame( loop );
}