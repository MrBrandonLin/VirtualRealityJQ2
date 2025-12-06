class map{
    constructor(){
        this.secam = document.getElementById("secam");
        this.mapback = document.createElement("a-box");
        this.mapicon = document.createElement("a-sphere");
        this.mapback.setAttribute("position", {x:2.5, y:1, z:-2});
        this.mapback.setAttribute("scale", {x:1, y:1, z:.01});
        this.mapback.setAttribute("id", "mapback");
        this.mapicon.setAttribute("position", {x:0, y:0, z:1});
        this.mapicon.setAttribute("color", "#ff2222");
        this.mapicon.setAttribute("scale", {x:.02, y:.02, z:.02});

        this.mapback.append(this.mapicon);
        this.secam.append(this.mapback);
    }
    track(){
        this.mapicon.object3D.position.y = -this.secam.object3D.position.z/100;
        this.mapicon.object3D.position.x = this.secam.object3D.position.x/100;
    }
}

class rifle{
    constructor(){
        this.barrel = document.createElement("a-cylinder");
        this.secam = document.getElementById("secam");
        this.ammocounter = document.createElement("a-text");
        this.barrel.setAttribute("position", {x: 1, y:-.5, z:-3});
        this.barrel.setAttribute("rotation", "90 90 90");
        this.barrel.setAttribute("scale", ".3 3 .3");
        this.ammocounter.setAttribute("position", {x: .7, y:-.1, z:-3});
        this.ammocounter.setAttribute("value", `6/6`);
        this.ammocounter.setAttribute("color", "#03c6fc");
        this.ammocounter.setAttribute("side", "double");
        
        this.secam.append(this.barrel);
        this.secam.append(this.ammocounter);

        this.ammo = 6, this.qt = false;
        
    }
    ammocount(){
        window.addEventListener("click", function(){
            this.ammo -= 1;
        })
        window.addEventListener("keypress", (e)=>{
            if(e.key == `r`){
                this.ammo = 6;
            }
        })
        
        if(this.ammo < 1){
            this.ammocounter.setAttribute("value", `!!!/6`);
        } else {
            this.ammocounter.setAttribute("value", `${this.ammo}/6`);
        }
    }
}