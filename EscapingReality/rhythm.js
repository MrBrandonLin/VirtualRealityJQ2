class timer{
    constructor(){
        this.beatbox = document.createElement("a-box");
        this.beatbox.setAttribute("sound", {src:"#Song1", loop:true, refDistance:1000})
        this.song = ["pPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPpP",
                     "pPpPpPpPpPpPpPpPpPpPpPpP1LpPpPpPpPpPpPpP",
                     "NNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
                     "PPPPPPPPPPPPPPPPPPPPPPPP",
                     "PPPPPPPPPPPPPPPPPPPPPPPP",
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
        console.log(this.s);
        if(this.linetime>=this.song.length){
                this.play = false;
        }
        if(this.play){
            this.beatbox.components.sound.playSound();
            this.s+=.25;
            this.songtime+=1;
            if(this.songtime>this.song[this.linetime].length/2){
                this.songtime = 0;
                this.linetime += 1;
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