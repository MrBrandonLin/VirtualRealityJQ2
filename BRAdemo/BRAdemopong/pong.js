class pong{
    constructor(x, y, z){
        this.x = x, this.y = y, this.z = z;
        this.m = 0.3;
        this.secam = document.getElementById("secam");
        this.pongwall = document.createElement("a-entity");
        this.pongwall1 = document.createElement("a-box");
        this.pongwall1.setAttribute("scale", "3 12 3");
        this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.pongwall.setAttribute("id", "wall")
        this.pongwall.append(this.pongwall1);
        scene.append(this.pongwall);
    }
    upndown(){
        if(this.secam.object3D.position.z > 0){
            this.y += this.m;
            this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        } else if(this.secam.object3D.position.z < 0){
            this.y -= this.m;
            this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        }
    }
}

class ball{
    constructor(x, y, z){
        this.x = x, this.y = y, this.z = z;
        this.m = 0.5;
        this.pongwall = document.getElementById("wall");
        this.ball = document.createElement("a-sphere");
        this.ball.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.ball);
    }
    movement(){
        this.x -= this.m;
        if(((this.x < this.pongwall.object3D.position.x+2 && this.x > this.pongwall.object3D.position.x-2)&& (this.y < this.pongwall.object3D.position.y+4 && this.y > this.pongwall.object3D.position.y-4)) || this.x > 20){
            this.m = -this.m;
        }
        if(this.x < -50){
            this.x=9;
        }
        this.ball.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}

class button{
    constructor(x, y, z){
        this.button = document.createElement("a-box");
        this.button.setAttribute("position", {x:x, y:y, z:z});
        this.button.setAttribute("scale", {x:2, y:2, z:1});
        scene.append(this.button);

    }
}