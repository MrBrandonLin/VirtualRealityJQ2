class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");
        this.noteboxL = document.createElement("a-box");
        this.noteboxR = document.createElement("a-box");

        this.beatbox.setAttribute("sound", {src:"#Song1", loop:true, refDistance:1000})
        this.noteboxL.setAttribute("position", "-1 1 -3");
        this.noteboxR.setAttribute("position", "1 1 -3");
        this.song = ["pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP1L1RpPpP",
                     "pPpPpPpP1L1RpPpPpPpPpPpP1L1RpPpPpPpPpPpP",
                     "1L1RpPpPpPpPpP1L1RpPpPpPpPpPpPpP1LpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
        ];
        this.songtime = 0;
        this.linetime = 0;
        this.s = 0;
        this.play = false;

        this.beatbox.addEventListener("click", ()=>{
            this.play = true;
        })
        scene.append(this.noteboxL);
        scene.append(this.noteboxR);
        scene.append(this.beatbox);
    }
    timering(){
        console.log(this.s);
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
            if(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2)=="1L"){
                this.noteboxL.setAttribute("position", "-1 2 -3");
            } else {
                this.noteboxL.setAttribute("position", "-1 1 -3");
            }
            if(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2)=="1R"){
                this.noteboxR.setAttribute("position", "1 2 -3");
            } else {
                this.noteboxR.setAttribute("position", "1 1 -3");
            }
            console.log(this.song[this.linetime].substring(this.songtime*2, (this.songtime*2)+2));
            if(this.s%.5 == 0){
            }
            if(this.s%1 == 0){
            }
        } else if(this.play != true){
            this.beatbox.components.sound.stopSound();
        }
    }
}