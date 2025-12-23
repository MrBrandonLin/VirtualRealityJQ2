class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");
        this.noteboxL = document.createElement("a-box");
        this.noteboxR = document.createElement("a-box");

        this.beatbox.setAttribute("position", ".5 7 -4")
        this.beatbox.setAttribute("sound", {src:"#Song1", loop:true, refDistance:1000})
        this.song = ["pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP1L1RpPpP",
                     "pPpPpPpP1L2RpPpPpPpPpPpP2L1RpPpPpPpPpPpP", "1L1RpPpPpPpPpP1L1RpPpPpPpPpPpPpP1LpPpPpP",
                     "pPpPpP1L1RpPpPpPpPpP1L1RpPpPpPpPpPpPpP1L", "1RpPpPpPpPpP2L2RpPpPpPpPpP2L1RpPpPpPpPpP",
                     "1L2RpPpPpPpPpPpP2L1RpPpPpPpPpP1L2RpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpP1LpP1L1R2LpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP", "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                    
        ];
        this.songtime = 0;
        this.linetime = 0;
        this.s = 0;
        this.play = false;

        this.beatbox.addEventListener("click", ()=>{
            this.play = true;
        })
        scene.append(this.beatbox);
    }
    timering(){
        if(this.linetime>=this.song.length){
                this.play = false;
                this.s = 0;
                this.linetime = 0;
                this.songtime = 0;
        }
        if(this.play){
            this.beatbox.components.sound.playSound();
            this.s+=.25;
            this.songtime+=1;
            if(this.songtime>(this.song[this.linetime].length/2)-1){
                this.songtime = 0;
                this.linetime += 1;
            }
            note = this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2);
            //console.log(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2));
        } else if(this.play != true){
            this.beatbox.components.sound.stopSound();
        }
    }
}