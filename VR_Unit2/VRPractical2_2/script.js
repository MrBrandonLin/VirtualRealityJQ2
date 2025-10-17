
let scene, car, pokeball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    pokeball = document.querySelector("#pokeball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");
    car.x = 0, car.xp = .10;
    pokeball.x = 0, pokeball.xr = 10;
    rocket.y = 0, rocket.rocketscience = .001 , rocket.xp = rocket.rocketscience;
    dude.y = 0, dude.ys = .1;
    sun.op = 0, sun.opv = .005;

    loop()
})

function loop(){
    car.x += car.xp;
    pokeball.x += pokeball.xr;
    rocket.rocketscience += .3;
    rocket.y += Math.log(rocket.rocketscience);
    dude.y += dude.ys;
    sun.op += sun.opv;
    car.setAttribute("position",{x:car.x, y:0, z:0});
    pokeball.setAttribute("rotation",{x:-pokeball.x, y:0, z:0});
    rocket.setAttribute("position",{x:0, y:rocket.rocketscience, z:0});
    dude.setAttribute("scale",{x:dude.y, y:dude.y, z:dude.y});
    dude.setAttribute("position",{x:1, y:dude.y/2, z:1});
    sun.setAttribute("opacity", sun.op);
    window.requestAnimationFrame(loop);
}