class world{
    constructor(){
        this.set = document.getElementById("set")
        this.setChildren = this.set.children;
        scene.append(this.set);
    }   
    audienceCheer(){
        for(let i = 0; i<5; i++){
            this.setChildren[i+14].object3D.position.y += rnd(-5, 5)/50;
            if(this.setChildren[i+14].object3D.position.y<(7+i*4)){
                this.setChildren[i+14].object3D.position.y += rnd(0, 5)/50;
            } else if(this.setChildren[i+14].object3D.position.y>(12+i*4)){
                this.setChildren[i+14].object3D.position.y += rnd(-5, 0)/50;
            }
        }
    }
    setTheStageYo(beep, bop){
        if(bop == 0){
            if(beep==0){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            }else if(beep==1){
                this.setChildren[1].setAttribute("color", songs.song2.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song2.stageColors[1])
                }
                for(let i=0;i<3;i++){
                    this.setChildren[i*3+5].setAttribute("color", songs.song2.stageColors[4])
                }
                for(let i=0;i<3;i++){
                    this.setChildren[i*3+6].setAttribute("color", songs.song2.stageColors[3])
                }
                for(let i=0;i<3;i++){
                    this.setChildren[i*3+7].setAttribute("color", songs.song2.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song2.stageColors[1])
                }
            }else if(beep==2){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            } else if(beep==3){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            }
        } else if(bop==1){
            if(beep==0){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            }else if(beep==1){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            }else if(beep==2){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            } else if(beep==3){
                this.setChildren[1].setAttribute("color", songs.song1.stageColors[0])
                for(let i=0;i<3;i++){
                    this.setChildren[i+2].setAttribute("color", songs.song1.stageColors[1])
                }
                for(let i=0;i<9;i++){
                    this.setChildren[i+5].setAttribute("color", songs.song1.stageColors[2])
                }
                for(let i=0;i<5;i++){
                    this.setChildren[i+14].setAttribute("color", songs.song1.stageColors[3])
                }
            }
        }
    }
}