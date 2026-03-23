let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    cameraMain = document.getElementById("cameraMain");
    globe = document.getElementById("globe");
    this.setInterval(loopity, 10)
})

function loopity(){
    globe.object3D.rotation.y += .005;
}