//Developer Note: Everything here is running at 62.5 milliseconds 
//or a quarter of a quarter second or 1/16 of a second. You get it right?
class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");

        this.beatbox.setAttribute("position", "4 14 18");

        this.beatbox.setAttribute("sound", {src:songs.songtest.music, loop:true, refDistance:1000});
        this.beatmap = songs.songtest.beatmap;
        this.battleform = songs.songtest.battleform;
        this.battlestage = songs.songtest.battlestage;

        this.songtime = 0;
        this.linetime = 0;
        this.standard4tick = 0;
        this.standard16tick = 0;
        this.standardALLtick = 0;
        this.play = false;
        this.songend = false;

        scene.append(this.beatbox);
    }
    timering(){
        if(jackiesquire=="y"){
            this.play = true; 
        } else if(jackiesquire=="t"){
            console.log(console.log(this.standardALLtick + " " + this.battlestage[this.linetime].substring(this.songtime*2, (this.songtime*2)+2) + " " + this.battleform[this.linetime].substring(this.songtime*2, (this.songtime*2)+2)))
        }
        if(this.songend == true){
            this.play = false;
            this.standard4tick = 0;
            this.standardALLtick = 0;
            this.linetime = 0;
            this.songtime = 0;
            loading += 1
            if(loading >= 20){
                secamMain.setAttribute("camera", "active", false);
                inmenu = true;
                ohmymy.menudepth1 = 1;
                jinsen.healthgone = false;
                jinsen.playerhealth = 100;
                jinsen.playerstamina = 100;
                jinsen.gamewin = false;
                this.songend = false;
            }
        }
        if(this.play){
            this.beatbox.components.sound.playSound();
            if(this.standard4tick==1){
                this.standard16tick+=.25;
                this.songtime+=1;
                if(this.songtime>(this.beatmap[this.linetime].length/2)-1){
                    this.songtime = 0;
                    this.linetime += 1;
                }
                if(this.standard16tick==1){
                    this.standard16tick = 0;
                }
                note = this.beatmap[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
                form = this.battleform[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
                stage = this.battlestage[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
                notef = this.beatmap[this.linetime+1].substring(this.songtime*2, (this.songtime*2)+2);
                formf = this.battleform[this.linetime+1].substring(this.songtime*2, (this.songtime*2)+2);
                stagef = this.battlestage[this.linetime+1].substring(this.songtime*2, (this.songtime*2)+2);
                this.standard4tick=0;
                if(note == "gG"){
                    this.play = false;
                    this.songend = true;
                }
            }
            this.standard4tick+=.25;
            this.standardALLtick+=.25
        } else if(this.play != true){
            this.beatbox.components.sound.stopSound();
        }
    }
    songdecide(okay, okie){
        this.sTc = sTc(okay, okie);
        this.beatbox.setAttribute("sound", {src:this.sTc.music, loop:true, refDistance:1000})
        this.beatmap = this.sTc.beatmap;
        this.battleform = this.sTc.battleform;
        this.battlestage = this.sTc.battlestage;
    }
}