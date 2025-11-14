class daedalusparts{
    constructor(schrodinger, orientation, x, y, z){
        this.x = x;
        this.y = y;
        this.z = z; 
        this.m = 0.05;
        this.blockbuilderx = -2;
        this.blockbuildery = 0;
        this.cat = schrodinger;
        this.orientation = orientation;
        if(orientation=="normal"){
            this.x1 = this.x-2.1;
            this.x2 = this.x+2.1;
            this.z1 = this.z-1.2;
            this.z2 = this.z+1.2;
        } else {
            this.x1 = this.x-1.2;
            this.x2 = this.x+1.2;
            this.z1 = this.z-2.1;
            this.z2 = this.z+2.1;
        }
        this.wallcom = document.createElement("a-entity"), this.wallpar;
        for(let i = 0; i < 9; i++){
            if((i)%3==0){
                this.blockbuildery += 1;
                this.blockbuilderx = -2;
            }
            this.blockbuilderx += 1;
            this.wallpar = document.createElement("a-box");
            this.wallpar.setAttribute("position", {x:this.blockbuilderx, y:this.blockbuildery, z:0});
            this.wallpar.setAttribute("src", "#smoothstone");
            this.wallpar.setAttribute("side", "double");
            this.wallcom.append(this.wallpar);
        }
        if(this.orientation != "normal"){
            this.wallcom.setAttribute("rotation", "0 90 0");
        }
        this.wallcom.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.wallcom)
    }
    observation(){
        this.secam = document.getElementById("secam");
        if(this.cat == "true" && (this.secam.object3D.position.x < this.x2 && this.secam.object3D.position.x > this.x1) && (this.secam.object3D.position.z < this.z2 && this.secam.object3D.position.z > this.z1)){
            this.m = 0.05;
            if(this.y<-3.3){
                this.m = 0;
            }
            this.y -= this.m;
            this.wallcom.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        } else {
            this.m = 0.05;
            if(this.y>-1){
                this.m = 0;
            }
            this.y += this.m;
            this.wallcom.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        }
    }
}

