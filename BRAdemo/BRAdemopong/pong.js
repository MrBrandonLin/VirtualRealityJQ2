let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

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

    up(){
        this.y += this.m;
        if(this.y > 25){
            this.y = 24.5;
        }
        this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
    down(){
        this.y -= this.m;
        if(this.y < -25){
            this.y = -24.5;
        }
        this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
    neutral(){
        this.y += 0;
        this.pongwall.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}

class ball{
    constructor(x, y, z){
        this.x = x, this.y = y, this.z = z;
        this.m = 0.4;
        this.my = 0;
        this.pongwall = document.getElementById("wall");
        this.ball = document.createElement("a-sphere");
        this.ball.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.ball);
    }
    movement(){
        this.x -= this.m;
        this.y -= this.my/100;
        if(((this.x < this.pongwall.object3D.position.x+2 && this.x > this.pongwall.object3D.position.x-2) && (this.y < this.pongwall.object3D.position.y+6 && this.y > this.pongwall.object3D.position.y-6)) || this.x > 30){
            this.m = -this.m;
            this.my = rnd(-50, 50)
        }
        if(this.x < -50){
            this.x=28;
        }
        if(this.y <-30 || this.y>30){
            this.my = -this.my;
        }
        this.ball.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}