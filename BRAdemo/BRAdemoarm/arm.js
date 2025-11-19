class arm{
    constructor(){
        this.arm1 = document.createElement("a-entity");
        this.arm2 = document.createElement("a-entity");
        this.armupper = document.createElement("a-box");
        this.armfore = document.createElement("a-box");
        this.rotary1 = document.createElement("a-cylinder");
        this.rotary2 = document.createElement("a-cylinder");

        this.armupper.setAttribute("position", "0 -.8 0");
        this.armupper.setAttribute("scale", ".4 1 .3");
        this.armfore.setAttribute("position", "0 .8 0");
        this.armfore.setAttribute("scale", ".4 1 .3");
        this.rotary1.setAttribute("rotation", "90 0 0")
        this.rotary1.setAttribute("scale", ".4 .4 .4")
        this.rotary2.setAttribute("rotation", "90 0 0")
        this.rotary2.setAttribute("scale", ".4 .4 .4")
        this.rotary2.setAttribute("position", "0 -1.6 0");
        this.arm2.setAttribute("position", "0 -1.6 0")

        this.arm1.append(this.rotary1);
        this.arm1.append(this.armupper);
        this.arm1.append(this.rotary2);
        this.arm1.append(this.arm2);
        this.arm2.append(this.armfore);

        this.arm1.setAttribute("position", "0 3 -2");
        scene.append(this.arm1);

        this.r1 = 0;
        this.rt1 = 1;
        this.r2 = 90;
        this.rt2 = 2;
    }
    bend(){
        if(this.r1 < -180 || this.r1 > 0){
            this.rt1 = -this.rt1;
        }
        if(this.r2 < 45 || this.r2 > 180){
            this.rt2 = -this.rt2;
        }
        this.r1 -= this.rt1;
        this.r2 -= this.rt2;
        this.arm1.setAttribute("rotation", {x:0, y:0, z:this.r1});
        this.arm2.setAttribute("rotation", {x:0, y:0, z:this.r2});
    }
}