class theevil{
    constructor(x, z, type){
        this.mapback = document.getElementById("mapback");
        this.secam = document.getElementById("secam");
        this.theevil = document.createElement("a-box");
        this.theevilmapicon = document.createElement("a-box");

        this.x = x, this.z = z, this.type = type, this.timin = 0, this.patra, this.somba;
        this.theevil.setAttribute("position", {x:this.x, y:2, z:this.z});
        this.theevil.setAttribute("scale", "1 4 1");
        this.theevilmapicon.setAttribute("position", "0 0 1");
        this.theevilmapicon.setAttribute("scale", ".04 .04 .04");
        this.theevilmapicon.setAttribute("color", "#ff55cd");
        this.theevil.setAttribute("src", "images/Heavy.png");
        

        this.mapback.append(this.theevilmapicon);
        scene.append(this.theevil);
    }
    track(){
        this.theevilmapicon.object3D.position.y = -this.theevil.object3D.position.z/100;
        this.theevilmapicon.object3D.position.x = this.theevil.object3D.position.x/100;
        this.timin += 1;
        if(this.timin == 200){
            if(this.x<this.secam.object3D.position.x && this.z <this.secam.object3D.position.z){
                this.patra = rnd(0, 5);
                this.x += this.patra;
                this.somba = rnd(0, 5);
                this.z += this.somba;
            } else if(this.x>this.secam.object3D.position.x && this.z <this.secam.object3D.position.z){
                this.patra = rnd(0, 5);
                this.x -= this.patra;
                this.somba = rnd(0, 5);
                this.z += this.somba;
            } else if(this.x<this.secam.object3D.position.x && this.z >this.secam.object3D.position.z){
                this.patra = rnd(0, 5);
                this.x += this.patra;
                this.somba = rnd(0, 5);
                this.z -= this.somba;
            } else if(this.x>this.secam.object3D.position.x && this.z >this.secam.object3D.position.z){
                this.patra = rnd(0, 5);
                this.x -= this.patra;
                this.somba = rnd(0, 5);
                this.z -= this.somba;
            }
            this.theevil.setAttribute("position", {x:this.x, y:2, z:this.z});
        } else if(this.timin > 300){
            this.timin = 0;
        }
    }
}

class blackout{
    constructor(){
        this.sexbox = document.createElement("a-sphere");
        this.sexbox.setAttribute("side", "double");
        this.sexbox.setAttribute("color", "#000000");
        this.bam = false;
        scene.append(this.sexbox);
        this.timin = 0, this.y = -3;
        this.secam = document.getElementById("secam");
        
    }
    blacking(){
        this.timin += 1;
        if(this.timin == 200){
            this.bam = true
            this.y = this.secam.object3D.position.y;
        } else if(this.timin > 300){
            this.y = -3;
            this.timin = 0;
        }
        this.sexbox.setAttribute("position", {x:this.secam.object3D.position.x , y:this.y , z:this.secam.object3D.position.z });
    }
}