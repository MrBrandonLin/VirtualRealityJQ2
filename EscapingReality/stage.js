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
        this.sTc = sTc(beep, bop)
        this.setChildren[1].setAttribute("color", this.sTc.stageColors[0])
        for(let i=0;i<3;i++){
            this.setChildren[i+2].setAttribute("color", this.sTc.stageColors[1])
        }
        for(let i=0;i<9;i++){
            this.setChildren[i+5].setAttribute("color", this.sTc.stageColors[2])
        }
        for(let i=0;i<5;i++){
            this.setChildren[i+14].setAttribute("color", this.sTc.stageColors[3])
        }
    }
}