let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let time_text, balls = [], t = 60;
let score_text, score = 0;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  time_text = document.getElementById("time");
  score_text = document.getElementById("score");
  for(let i = 0;i < 20; i++){
    let x = rnd(-10,10);
    let y = rnd(0,20);
    let z = rnd(-10,10);
    balls.push(new Ball(x,y,z));
  }
  countdown();
  loop();
})

function countdown(){
  t--;
  setTimeout(countdown,1000);
  if(t<0){
    time_text.setAttribute("value",`Time: GAME OVER`);
  } else {
    time_text.setAttribute("value",`Time: ${t}`);
  }
}

function loop(){
  
  for(let ball of balls){
    ball.move();
  }
  score_text.setAttribute("value",`Score: ${score}`);
  window.requestAnimationFrame(loop);
}

