class arm{
    constructor(){
        this.secam = document.getElementById("secam");
        this.centerpoint = document.createElement("a-entity");
        this.arm1 = document.createElement("a-entity");
        this.arm2 = document.createElement("a-entity");
        this.armupper = document.createElement("a-box");
        this.armfore = document.createElement("a-box");
        this.rotary1 = document.createElement("a-cylinder");
        this.rotary2 = document.createElement("a-cylinder");
        this.fist = document.createElement("a-sphere");

        this.arm2.setAttribute("position", "0 -1.6 0")
        this.armupper.setAttribute("position", "0 -.8 0");
        this.armupper.setAttribute("scale", ".4 1 .3");
        this.armfore.setAttribute("position", "0 .8 0");
        this.armfore.setAttribute("scale", ".4 1 .3");
        this.rotary1.setAttribute("rotation", "90 0 0")
        this.rotary1.setAttribute("scale", ".4 .4 .4")
        this.rotary2.setAttribute("rotation", "90 0 0")
        this.rotary2.setAttribute("scale", ".4 .4 .4")
        this.rotary2.setAttribute("position", "0 -1.6 0");
        this.fist.setAttribute("position", "0 1.5 0");
        this.fist.setAttribute("scale", ".7 .4 .5");
        

        this.arm1.append(this.rotary1);
        this.arm1.append(this.armupper);
        this.arm1.append(this.rotary2);
        this.arm1.append(this.arm2);
        this.arm2.append(this.armfore);
        this.arm2.append(this.fist);
        this.arm1.setAttribute("position", "-.5 3 -1");
        this.centerpoint.append(this.arm1)
        this.secam.append(this.centerpoint);
        scene.append(this.centerpoint);

        this.rz1 = -30, this.rz2 = 80, this.curen = 0;
    }
    bend(){
        if(this.action == "punch"){
            if(this.rz1 < -90 || this.rz1 > -30){
                this.rzt1 = -this.rzt1;
                this.curen += 1;
            }
            if(this.rz2 < 80 || this.rz2 > 180){
                this.rzt2 = -this.rzt2;
            }
            if(this.curen > 1){
                this.rzt1 = 0, this.rzt2 = 0;
                this.action = "neutral";
            }
            this.rz1 -= this.rzt1;
            this.rz2 -= this.rzt2;
            this.arm1.setAttribute("rotation", {x:0, y:0, z:this.rz1});
            this.arm2.setAttribute("rotation", {x:0, y:0, z:this.rz2});
        } else if(this.action == "cross"){
            if(this.r1 < 0 || this.r1 > 90){
                this.rt1 = -this.rt1;
                this.curen += 1;
            }
            if(this.r2 < 80 || this.r2 > 180){
                this.rt2 = -this.rt2;
            }
            if(this.curen > 1){
                this.rt1 = 0, this.rt2 = 0;
                this.action = "neutral";
            }
            this.r1 -= this.rt1;
            this.r2 -= this.rt2;
            this.arm1.setAttribute("rotation", {x:this.r1, y:0, z:0});
        }

    }
    follow(){
        //this.centerpoint.setAttribute("position", {x: this.secam.object3D.position.x, y:this.secam.object3D.position.y-3, z:this.secam.object3D.position.z});
        //this.centerpoint.setAttribute("rotation", {x:0, y:this.secam.rotationObj.y-90, z:0});
    }
}