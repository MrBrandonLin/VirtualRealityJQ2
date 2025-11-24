class dancemonkey{
    constructor(x, y, z, xs, zs){
        this.x = x, this.y = y, this.z = z;
        this.xs = xs/100, this.zs = zs/100;
        this.rx = 0, this.rtx = 5;
        this.newz = this.z;
        this.newx = this.x;
        this.alcapone;
        this.manwithnobeat = 0;
        this.alifewithoutregret = false;
        this.dancemonkey = document.createElement("a-entity");
        this.body = document.createElement("a-sphere");
        this.neckjoint = document.createElement("a-entity");
        this.head = document.createElement("a-sphere");
        this.secam = document.getElementById("secam");
        
        this.dancemonkey.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.head.setAttribute("interact", "");
        this.head.setAttribute("scale", ".5 .7 1");
        this.body.setAttribute("interact", "");
        this.neckjoint.setAttribute("position", "0 .7 0");
        this.head.setAttribute("position", "0 1 0");
        this.head.setAttribute("rotation", "0 -90 0");
        this.head.setAttribute("src", "zerorangutans.jpg");
        this.body.setAttribute("color", "#ffbb77");
        this.neckjoint.append(this.head);
        this.body.append(this.neckjoint);
        this.dancemonkey.append(this.body);
        scene.append(this.dancemonkey);
        this.head.addEventListener("click", ()=>{
            this.manwithnobeat += 1;
        })
        this.body.addEventListener("mouseleave", ()=>{
            this.alifewithoutregret = true;
        })
        this.body.addEventListener("mouseenter", ()=>{
            this.alifewithoutregret = false;
        })
    }
    chase(){
        this.alcapone = this.secam.rotationObj.y;
        if(this.alifewithoutregret == true){
            if(this.newz < this.secam.object3D.position.z && this.newx < this.secam.object3D.position.x){
                this.newz += this.zs;
                this.newx += this.xs;
                this.dancemonkey.setAttribute("position", {x:this.newx, y:this.y, z:this.newz});
            } else if (this.newz > this.secam.object3D.position.z && this.newx < this.secam.object3D.position.x){
                this.newz -= this.zs;
                this.newx += this.xs;
                this.dancemonkey.setAttribute("position", {x:this.newx, y:this.y, z:this.newz});
            } else if (this.newz < this.secam.object3D.position.z&& this.newx > this.secam.object3D.position.x){
                this.newz += this.zs;
                this.newx -= this.xs;
                this.dancemonkey.setAttribute("position", {x:this.newx, y:this.y, z:this.newz});
            } else if (this.newz > this.secam.object3D.position.z && this.newx > this.secam.object3D.position.x){
                this.newz -= this.zs;
                this.newx -= this.xs;
                this.dancemonkey.setAttribute("position", {x:this.newx, y:this.y, z:this.newz});
            } 
            this.dancemonkey.setAttribute("rotation", {x:0, y:this.alcapone, z:0});
        }
    }
    nod(){
        if(this.manwithnobeat%2 != 0){
            this.rx += this.rtx;
            this.neckjoint.setAttribute("rotation", {x:this.rx, y:0, z:0});
        } else {
            this.neckjoint.setAttribute("rotation", {x:this.rx, y:0, z:0});
        }
        if(this.rx > 60 || this.rx < -20){
            this.rtx = -this.rtx;
        }
    }
}