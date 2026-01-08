let rnd = (l,u) => Math.random() * (u-l) + l
let note = ""; 
oopdoop = false; jackiesquire = "";
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    timin = new timer();
    ohmymy = new menu();
    trina = new enemyModel();
    djHardRock = new playerModel();
    secamMain = document.getElementById("secamMain");
    secamMenu = document.getElementById("secamMenu");
    this.setInterval(natural, 250)
})

function natural(){
    window.addEventListener("keypress", (e)=>{
        if(e.key == "p" && ohmymy.menuchoice == 0 && ohmymy.menudepth == 1){
            //secamMenu.setAttribute("camera", "active", false);
            secamMain.setAttribute("camera", "active", true);
            //secamMain.setAttribute("look-controls-enabled", "false");
            //secamMain.setAttribute("wasd-controls-enabled", "false");
            secamMain.setAttribute("rotation", "-20 20 0");
        }
        if((e.key == "i" || e.key == "o" || e.key == "p" || e.key == "u")){
            oopdoop = true;  
            jackiesquire = e.key; 
            
        }
    })
    if(oopdoop == true){
        ohmymy.menuselect(jackiesquire);
        oopdoop = false;
    }
    ohmymy.menuwindmechanic();
    timin.timering();
    trina.pose(note);
    djHardRock.pose();
}