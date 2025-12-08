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
        this.barrel.setAttribute("position", {x: 0, y:-.5, z:-3});
        this.barrel.setAttribute("rotation", "90 90 90");
        this.barrel.setAttribute("scale", ".3 3 .3");
        this.ammocounter.setAttribute("position", {x: -.2, y:-.1, z:-3});
        this.ammocounter.setAttribute("value", `6/6`);
        this.ammocounter.setAttribute("color", "#03c6fc");
        this.ammocounter.setAttribute("side", "double");
        
        this.secam.append(this.barrel);
        this.secam.append(this.ammocounter);

        this.ammo = 6, this.shotfired = false;
        
    }
    ammocount(){
        window.addEventListener("click", ()=>{
            this.shotfired = true;
        })
        window.addEventListener("keypress", (e)=>{
            if(e.key == `r`){
                this.ammo = 6;
            }
        })
        if(this.shotfired){
            this.ammo -= 1;
            this.shotfired = false;
        }
        if(this.ammo < 1){
            this.ammocounter.setAttribute("value", `!!!/6`);
        } else {
            this.ammocounter.setAttribute("value", `${this.ammo}/6`);
        }
        console.log(this.ammo);
    }
}

class bullet{
    constructor(){
        this.bullet = document.createElement("a-cone");
        this.secam = document.getElementById("secam");
        this.magazine = []
        this.bullet = document.createElement("a-cone");
        this.bullet.setAttribute("position", {x:this.secam.object3D.position.x, y: this.secam.object3D.position.y-.5, z:this.secam.object3D.position.z-3});
        this.bullet.setAttribute("rotation", {x:-90, y:this.secam.rotationObj.y, z:0});
        this.bullet.setAttribute("scale", ".2 2 .2");
        this.bullet.setAttribute("color", "#e4d501");
        this.bullet.setAttribute("metalness", ".6");
        scene.append(this.bullet);
        this.magazine.push(this.bullet);
        this.zt = .2, this.shotfired = false;

        let theta = this.secam.rotationObj.y + Math.PI;
        let phi = this.secam.rotationObj.x;
        let v = 0.1
        let v_xz = v * Math.cos(phi);
        this.dz = v_xz * Math.cos(theta);
        this.dx = v_xz * Math.sin(theta);
        this.dy = v * Math.sin(phi);
    }

    unloaded(){
        this.obj.object3D.position.x += this.dx;
        this.obj.object3D.position.y += this.dy;
        this.obj.object3D.position.z += this.dz; 
    }
    
}