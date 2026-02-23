let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)
let note = "", stage = ""; nothing ="";
inmenu = true; singlefiredmenu = false; spacecowboy = false; cameleyetea = false;
jackiesquire = ""; notas=""; poki="";
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
    stagend = new world();
})

    window.addEventListener("keydown", (e)=>{
        singlefiredmenu = true;
        if(singlefiredmenu == false){
            jackiesquire="";
        } else{
            jackiesquire=e.key;
        }
        if(inmenu){
            ohmymy.menucamera.components.sound.playSound();
        }
    })
    window.addEventListener("keyup", (e)=>{
        jackiesquire="";
        ohmymy.menucamera.components.sound.stopSound();
    })
function natural(){
    poki = attackread(jackiesquire);
    if(inmenu==false){
        timin.timering();
        if(stage=="aA"){
            shinji.stance(attacks[note]);
            gorilla.stance(defends[poki]);
        } else if(stage=="dD"){
            shinji.stance(defends[note]);
            gorilla.stance(attacks[poki]);
        } else if(stage=="nN"){
            shinji.stance(defends[note]);
            gorilla.stance(defends[poki]);
            console.log("transfertime")
        }
        stagend.audienceCheer();
    }
}
function unnatural(){
    if(inmenu == true){ 
        ohmymy.couch.components.sound.playSound();
        if(singlefiredmenu==true){
            ohmymy.menuselect(jackiesquire);
            if(jackiesquire == "p" && ohmymy.menuchoice == 0 && ohmymy.menudepth1 == 2){
                secamMain.setAttribute("camera", "active", true);
                //secamMain.setAttribute("look-controls-enabled", "false");
                //secamMain.setAttribute("wasd-controls-enabled", "false");
                secamMain.setAttribute("rotation", "-20 20 0");
                timin.songdecide(ohmymy.menudepth2, ohmymy.menudepth3)
                stagend.setTheStageYo(ohmymy.menudepth2, ohmymy.menudepth3);
                shinji.getSuitedUpDawg(ohmymy.menudepth2, ohmymy.menudepth3);
                inmenu = false;
            }
            singlefiredmenu = false;
        }
    ohmymy.menuwindmechanic();
    } else if(inmenu == false){
        ohmymy.couch.components.sound.stopSound();
    }   
}


function attackread(esoteric){
    for(let i=0; i<playerKeyInput.length;i++){
        if(esoteric == playerKeyInput[i]){
            notas = playerKeyOutput[i];
            spacecowboy = true
            break;
        } else {
            notas = "pP";
        }
    }
    return notas;
}

function nothinginator(){
    nothing = nothing;
}

function sTc(a, b){
    let c;
    if(b == 0){
        if(a==0){
            c=songs.song1;
        }else if(a==1){
            c=songs.song2;
        }else if(a==2){
            c=songs.song3;
        } else if(a==3){
            c=songs.song4;
        }
    } else if(b==1){
        if(a==0){
            c=songs.song5;
        }else if(a==1){
            c=songs.songtest;
        }else if(a==2){
            c=songs.songtest;
        } else if(a==3){
            c=songs.songtest;
        }
    }
    return c;

}