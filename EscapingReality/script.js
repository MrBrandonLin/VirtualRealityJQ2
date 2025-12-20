let rnd = (l,u) => Math.random() * (u-l) + l
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    timin = new timer();
    ohmymy = new menu();
    secamMain = document.getElementById("secamMain");
    secamMenu = document.getElementById("secamMenu");
    this.setInterval(natural, 250)
})

function natural(){
    window.addEventListener("click", ()=>{
        secamMenu.setAttribute("camera", "active", false);
        secamMain.setAttribute("camera", "active", true);
    })
    timin.timering();
}