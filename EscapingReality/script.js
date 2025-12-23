let rnd = (l,u) => Math.random() * (u-l) + l
let note = "";
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    timin = new timer();
    ohmymy = new menu();
    trina = new enemyModel();
    secamMain = document.getElementById("secamMain");
    secamMenu = document.getElementById("secamMenu");
    this.setInterval(natural, 250)
})

function natural(){
    window.addEventListener("click", ()=>{
        secamMenu.setAttribute("camera", "active", false);
        secamMain.setAttribute("camera", "active", true);
        //secamMain.setAttribute("look-controls-enabled", "false");
        secamMain.setAttribute("rotation", "-20 20 0");
    })
    timin.timering();
    trina.pose(note);
}