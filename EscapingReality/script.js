let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)
let note = "", sirfrancisbacon = false; 
oopdoop = false; jackiesquire = ""; notas="";
dynamicduo = ["L1", "R1", "R2"]
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    timin = new timer();
    ohmymy = new menu();
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
    gorilla.stance(attacks[attackread(jackiesquire)]);
    einhotdog();
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
                ohmymy.menudepth2
                sirfrancisbacon = true;
            }
            if((e.key == "i" || e.key == "o" || e.key == "p" || e.key == "u")){
                oopdoop = true;  
                jackiesquire = e.key; 
                
            }
        } else if(sirfrancisbacon == true){
            jackiesquire = e.key; 
        }   

    })
    if(oopdoop == true){
        ohmymy.menuselect(jackiesquire);
        oopdoop = false;
    }
    ohmymy.menuwindmechanic();
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}

function attackread(esoteric){
    if(esoteric=="u"){
        notas = "L1"
    } else if(esoteric=="o"){
        notas = "R1"
    } else if(esoteric=="p"){
        notas = "R2"
    } else {
        notas = "pP"
    }
    return notas;
}

function einhotdog(){
    if(note=="pP" || note == "dD"){
        for(let i=0; i<dynamicduo.length;i++){
            if(notas==dynamicduo[i]){
                console.log("trueeeet")
            }
        }
    }
    if(notas=="pP"){
        for(let i=0; i<dynamicduo.length;i++){
            if(note==dynamicduo[i]){
                console.log("falseeeeeen")
            }
        }
    }

}