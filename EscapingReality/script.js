let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)
let note = "", sirfrancisbacon = false; 
oopdoop = false; jackiesquire = "";
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    timin = new timer();
    ohmymy = new menu();
    trina = new enemyModel();
    secamMain = document.getElementById("secamMain");
    secamMenu = document.getElementById("secamMenu");
    this.setInterval(unnatural, 10)
    this.setInterval(natural, 62.5)
    shinji = new enemy();
    gorilla = new player();
})

function natural(){
    timin.timering();
    shinji.stance(attacks[note]);
}
function unnatural(){
    window.addEventListener("keypress", (e)=>{
        if(sirfrancisbacon == false){
            if(e.key == "p" && ohmymy.menuchoice == 0 && ohmymy.menudepth1 == 1){
                ohmymy.couch.components.sound.stopSound();
                //secamMenu.setAttribute("camera", "active", false);
                secamMain.setAttribute("camera", "active", true);
                //secamMain.setAttribute("look-controls-enabled", "false");
                //secamMain.setAttribute("wasd-controls-enabled", "false");
                secamMain.setAttribute("rotation", "-20 20 0");
                sirfrancisbacon = true;
            }
            if((e.key == "i" || e.key == "o" || e.key == "p" || e.key == "u")){
                oopdoop = true;  
                jackiesquire = e.key; 
                
            }
        } else if(sirfrancisbacon == true){
            if(e.key == "l"){
                gorilla.stance(attacks["L1"]);
            } else{
                gorilla.stance(attacks["pP"])
            }
        }   

    })
    if(oopdoop == true){
        ohmymy.menuselect(jackiesquire);
        oopdoop = false;
    }
    ohmymy.menuwindmechanic();
}