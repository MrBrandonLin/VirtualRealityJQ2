let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)
let note = "", 
sirfrancisbacon = false; oopdoop = false; spacecowboy = false;
jackiesquire = ""; notas="";
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
    if(sirfrancisbacon==true){
        timin.timering();
        shinji.stance(attacks[note]);
        gorilla.stance(attacks[attackread(jackiesquire)]);
        einhotdog();
    }
}
function unnatural(){
    window.addEventListener("keydown", (e)=>{
        if(sirfrancisbacon == false){ 
            ohmymy.couch.components.sound.playSound();
            if(e.key == "p" && ohmymy.menuchoice == 0 && ohmymy.menudepth1 == 1){
                secamMain.setAttribute("camera", "active", true);
                //secamMain.setAttribute("look-controls-enabled", "false");
                //secamMain.setAttribute("wasd-controls-enabled", "false");
                secamMain.setAttribute("rotation", "-20 20 0");
                timin.songdecide(ohmymy.menudepth2, ohmymy.menudepth3)
                sirfrancisbacon = true;
            }
            if((e.key == "i" || e.key == "o" || e.key == "p" || e.key == "u")){
                oopdoop = true;  
                jackiesquire = e.key; 
                
            }
        } else if(sirfrancisbacon == true){
            ohmymy.couch.components.sound.stopSound();
            jackiesquire = e.key; 
        }   

    })
    window.addEventListener("keyup", (e)=>{
        jackiesquire = "z"
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
            spacecowboy = true;
        } else if(esoteric=="o"){
            notas = "R1"
            spacecowboy = true;
        } else if(esoteric=="p"){
            notas = "R2"
            spacecowboy = true;
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