class theevil{
    constructor(x, z){
        this.mapback = document.getElementById("mapback");
        this.secam = document.getElementById("secam");
        this.theevil = document.createElement("a-box");
        this.theevilmapicon = document.createElement("a-box");

        this.x = x, this.z = z, this.timin = 0, this.patra, this.somba;
        this.theevil.setAttribute("position", {x:this.x, y:2, z:this.z});
        this.theevil.setAttribute("scale", "1 4 1");
        this.theevilmapicon.setAttribute("position", "0 0 1");
        this.theevilmapicon.setAttribute("scale", ".04 .04 .04");
        this.theevilmapicon.setAttribute("color", "#ff55cd");

        this.mapback.append(this.theevilmapicon);
        scene.append(this.theevil);
    }
    track(){
        this.theevilmapicon.object3D.position.y = -this.theevil.object3D.position.z/100;
        this.theevilmapicon.object3D.position.x = this.theevil.object3D.position.x/100;
        this.timin += 1;
        if(this.timin == 100){
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
        } else if(this.timin > 100){
            this.timin = 0;
        }
    }
}