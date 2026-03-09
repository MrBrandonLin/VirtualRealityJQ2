let rnd = (l,u) => Math.random() * (u-l) + l
let radiator = (d) => d*(Math.PI/180)
let note = "", form = "", stage = ""; nothing ="";
inmenu = true; singlefiredmenu = false; spacecowboy = false; cameleyetea = false;
jackiesquire = ""; gi=""; joe=0; loading = 0;
notas=""; fotas=""; iroow=""; 
poki="pP"; hwai="wW";
dead = false; babble = false;
loading = 0;

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
    jinsen = new headsupdisplay();
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
    hwai = formread(jackiesquire);
    if(inmenu==false){
        timin.timering();
        if(stage=="aA"){
            shinji.stance(attacks[form][note]);
            gorilla.stance(defends[hwai][poki]);
            hitRegister();
            jinsen.hudtrack();
        } else if(stage=="dD"){
            shinji.stance(defends[form][note]);
            gorilla.stance(attacks[hwai][poki]);
            hitRegister();
            jinsen.hudtrack();
        } else if(stage=="eU" || "uE"){
            shinji.stance(defends[form][note]);
            gorilla.stance(defends[hwai][poki]);
            hitRegister();
            jinsen.hudtrack();
        }
        stagend.audienceCheer();
    }
    dead = jinsen.healthgone;
    if(dead == true || (jinsen.gamewin == true && timin.songend == true)){
        note = "pP"
        timin.play = false;
        timin.standard4tick = 0;
        timin.standardALLtick = 0;
        timin.linetime = 0;
        timin.songtime = 0;
        loading += 1
        jinsen.statusupdates.setAttribute("position", "0 0 -.49");
        if(loading >= 20){
            secamMain.setAttribute("camera", "active", false);
            inmenu = true;
            ohmymy.menudepth1 = 1;
            jinsen.healthgone = false;
            jinsen.playerhealth = 100;
            jinsen.playerstamina = 100;
            jinsen.enemyhealth = 100;
            loading = 0;
        }
    }
}
function unnatural(){
    if(inmenu == true){ 
        ohmymy.couch.components.sound.playSound();
        if(singlefiredmenu==true){
            ohmymy.menuselect(jackiesquire);
            if(jackiesquire == "p" && ohmymy.menuchoice == 0 && ohmymy.menudepth1 == 2){
                secamMain.setAttribute("camera", "active", true);
                secamMain.setAttribute("look-controls-enabled", "false");
                secamMain.setAttribute("wasd-controls-enabled", "false");
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
    for(let i=0; i<playerActInput.length;i++){
        if(esoteric == playerActInput[i] && jinsen.playerstamina > 0 && jinsen.staminaready){
            notas = playerActOutput[i];
            spacecowboy = true
            break;
        } else { notas = "pP"; }
    }
    return notas;
}
function formread(esoteric){
    for(let i=0; i<playerFormInput.length;i++){
        if(esoteric == playerFormInput[i]){
            fotas = playerFormOutput[i];
            spacecowboy = true
            iroow = playerFormOutput[i];
            break;
        } else { fotas = iroow; }
    }
    return fotas;
}

function nothinginator(){
    nothing = nothing;
}

function sTc(a, b){
    let c;
    if(b == 0){
        if(a==0){ c=songs.song1; }
        else if(a==1){ c=songs.song2; }
        else if(a==2){ c=songs.song3; } 
        else if(a==3){ c=songs.song4; }
    } else if(b==1){
        if(a==0){ c=songs.song5; }
        else if(a==1){ c=songs.song6; }
        else if(a==2){ c=songs.song7; } 
        else if(a==3){ c=songs.songtest; }
    }
    return c;
}

function hitRegister(){
    if(stage=="aA"){
        let axlementamen = eAu[form][note][hwai];
        for(let axle of axlementamen){
            if(axle == poki){
                jinsen.playerhealth -= 1;
            } else {
                jinsen.playerhealth = jinsen.playerhealth;
            }
        }
    } else if(stage=="dD"){
        let tonkotsu = uAe[hwai][poki][form];
        for(let ton of tonkotsu){
            if(ton == note){
                jinsen.enemyhealth -= 1;
                console.log("hit")
            } else {
                jinsen.enemyhealth = jinsen.enemyhealth;
            }
        }
    } else {
        nothinginator();
    }
}