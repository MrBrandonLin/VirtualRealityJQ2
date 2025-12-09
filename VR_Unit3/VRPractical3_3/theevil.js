class theevil{
    constructor(x, z, type){
        this.mapback = document.getElementById("mapback");
        this.secam = document.getElementById("secam");
        this.theevil = document.createElement("a-entity");
        this.theevilbase = document.createElement("a-box");
        this.theevilcutout = document.createElement("a-image");
        this.theevilmapicon = document.createElement("a-box");

        this.x = x, this.z = z, this.type = type, this.life = true, this.timin = 0, this.patra, this.somba, this.flerm;
        this.theevil.setAttribute("position", {x:this.x, y:1, z:this.z});
        this.theevilbase.setAttribute("scale", "1 2 .1");
        this.theevilcutout.setAttribute("scale", "1 2 1");
        this.theevilmapicon.setAttribute("position", "0 0 1");
        this.theevilmapicon.setAttribute("scale", ".04 .04 .04");
        this.theevilmapicon.setAttribute("color", "#ff0000");
        this.theevilcutout.setAttribute("src", "images/Scout.png");
        this.theevilbase.setAttribute("src", "images/cardboard.webp");
        this.theevilcutout.setAttribute("position", "0 0 .06");
        

        this.mapback.append(this.theevilmapicon);
        this.theevil.append(this.theevilbase);
        this.theevil.append(this.theevilcutout);
        scene.append(this.theevil);
    }
    track(){
        this.theevilmapicon.object3D.position.y = -this.theevil.object3D.position.z/100;
        this.theevilmapicon.object3D.position.x = this.theevil.object3D.position.x/100;
        this.timin += 1;
        if(this.timin == 200 && this.life == true){
            if(this.x<this.secam.object3D.position.x && this.z <this.secam.object3D.position.z){
                this.patra = rnd(5, 15);
                this.somba = rnd(5, 15);
            } else if(this.x>this.secam.object3D.position.x && this.z <this.secam.object3D.position.z){
                this.patra = rnd(-15, -5);
                this.somba = rnd(5, 15);
            } else if(this.x<this.secam.object3D.position.x && this.z >this.secam.object3D.position.z){
                this.patra = rnd(5, 15);
                this.somba = rnd(-15, -5);
            } else if(this.x>this.secam.object3D.position.x && this.z >this.secam.object3D.position.z){
                this.patra = rnd(-15, -5);
                this.somba = rnd(-15, -5);
            }
            this.flerm = rnd(-20, 20);
            this.x += this.patra;
            this.z += this.somba;
            this.theevil.setAttribute("rotation", {x:0, y:(this.secam.rotationObj.y+this.flerm), z:0});
            this.theevil.setAttribute("position", {x:this.x, y:1, z:this.z});
        } else if(this.timin > 220){
            this.timin = 0;
        } else if(this.life == false){
            this.theevilcutout.setAttribute("src", "images/skeletin.webp");
            this.theevilmapicon.setAttribute("color", "#000000");
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
        } else if(this.timin > 220){
            this.y = -3;
            this.timin = 0;
        }
        this.sexbox.setAttribute("position", {x:this.secam.object3D.position.x , y:this.y , z:this.secam.object3D.position.z });
    }
}