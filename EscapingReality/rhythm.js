//Developer Note: Everything here is running at 62.5 milliseconds 
//or a quarter of a quarter second or 1/16 of a second. You get it right?
class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");

        this.beatbox.setAttribute("position", "4 14 18");

        this.beatbox.setAttribute("sound", {src:songs.songtest.music, loop:true, refDistance:1000});
        this.beatmap = songs.songtest.beatmap;
        this.battlestage = songs.songtest.battlestage;

        this.songtime = 0;
        this.linetime = 0;
        this.standard4tick = 0;
        this.standard16tick = 0;
        this.standardALLtick = 0;
        this.play = false;

        scene.append(this.beatbox);
    }
    timering(){
        if(jackiesquire=="y"){
            this.play = true; 
        } else if(jackiesquire=="l"){
            console.log("quarter second  " + this.standardALLtick + " " + this.battlestage[this.linetime].substring(this.songtime*2, (this.songtime*2)+2))
        }
        if(this.linetime>=this.beatmap.length){
                this.play = false;
                this.standard4tick = 0;
                this.linetime = 0;
                this.songtime = 0;
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
                    console.log("full second");
                }
                note = this.beatmap[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
                stage = this.battlestage[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
                //console.log(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2));
                this.standard4tick=0;
                console.log("quarter second  " + this.standardALLtick + " " + this.battlestage[this.linetime].substring(this.songtime*2, (this.songtime*2)+2))
            }
            
            this.standard4tick+=.25;
            this.standardALLtick+=.25
        } else if(this.play != true){
            this.beatbox.components.sound.stopSound();
        }
    }
    songdecide(okay, okie){
        if(okie == 0){
            if(okay==0){
                this.beatbox.setAttribute("sound", {src:songs.song1.music, loop:true, refDistance:1000})
                this.beatmap = songs.song1.beatmap;
                this.battlestage = songs.song1.battlestage;
            }else if(okay==1){
                this.beatbox.setAttribute("sound", {src:songs.song2.music, loop:true, refDistance:1000})
                this.beatmap = songs.song2.beatmap;
            }else if(okay==2){
                this.beatbox.setAttribute("sound", {src:songs.song3.music, loop:true, refDistance:1000})
                this.beatmap = songs.song3.beatmap;
            } else if(okay==3){
                this.beatbox.setAttribute("sound", {src:songs.song4.music, loop:true, refDistance:1000})
                this.beatmap = songs.song4.beatmap;
            }
        } else if(okie==1){
            if(okay==0){
                this.beatbox.setAttribute("sound", {src:songs.song5.music, loop:true, refDistance:1000})
                this.beatmap = songs.song1.beatmap;
            }else if(okay==1){
                this.beatbox.setAttribute("sound", {src:songs.songtest.music, loop:true, refDistance:1000})
                this.beatmap = songs.songtest.beatmap;
            }else if(okay==2){
                this.beatbox.setAttribute("sound", {src:songs.songtest.music, loop:true, refDistance:1000})
                this.beatmap = songs.songtest.beatmap;
            } else if(okay==3){
                this.beatbox.setAttribute("sound", {src:songs.songtest.music, loop:true, refDistance:1000})
                this.beatmap = songs.songtest.beatmap;
            }
        }
    }
}