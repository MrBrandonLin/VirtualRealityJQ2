//Developer Note: Everything here is running at 62.5 milliseconds 
//or a quarter of a quarter second or 1/16 of a second. You get it right?
class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");
        this.noteboxL = document.createElement("a-box");
        this.noteboxR = document.createElement("a-box");

        this.beatbox.setAttribute("position", ".5 7 -4");
        this.noteboxL.setAttribute("position", "2 7 -4");
        this.noteboxR.setAttribute("position", "-1 7 -4");

        this.beatbox.setAttribute("sound", {src:songs.song1.music, loop:true, refDistance:1000});
        this.beatmap = songs.song1.beatmap;

        this.songtime = 0;
        this.linetime = 0;
        this.standard4tick = 0;
        this.standard16tick = 0;
        this.standardALLtick = 0;
        this.play = false;

        this.beatbox.addEventListener("click", ()=>{
            this.play = true;
        })
        scene.append(this.noteboxL);
        scene.append(this.noteboxR);
        scene.append(this.beatbox);
    }
    timering(){
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
                //console.log(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2));
                console.log("quarter second  " + this.standardALLtick);
                this.standard4tick=0;
            }
            this.standard4tick+=.25;
            this.standardALLtick+=.25
        } else if(this.play != true){
            this.beatbox.components.sound.stopSound();
        }
    }
}