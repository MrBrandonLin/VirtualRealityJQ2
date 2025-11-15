class barrier{
    constructor(x, y, z){
        this.x = x, this.y = y, this.z = z; 
        this.finalpos, this.barrierfp = [];
        this.xr = [10.0, 9.3969, 7.6604, 5.0, 1.7365, -1.7365, -5.0, -7.6604, -9.3969,
      -10.0, -9.3969, -7.6604, -5.0, -1.7365, 1.7365, 5.0, 7.6604, 9.3969];
        this.zr = [0.0, 3.4202, 6.4279, 8.6603, 9.8481, 9.8481, 8.6603, 6.4279, 3.4202,
      0.0, -3.4202, -6.4279, -8.6603, -9.8481, -9.8481, -8.6603, -6.4279, -3.4202];
        this.barrierf = document.createElement("a-entity");
        for(let i = 0; i < 18; i++){
            this.finalpos = this.x**2 + this.z**2;
            this.barrierp = document.createElement("a-box");
            this.barrierp.setAttribute("position", {x:this.xr[i]*3 ,y:this.y ,z:this.zr[i]*3});
            this.barrierp.setAttribute("rotation", {x:0 ,y:(i*-20) ,z:0});
            this.barrierp.setAttribute("scale", "3 9 8");
            this.barrierp.setAttribute("src", "#smoothstone");
            this.barrierp.setAttribute("side", "double");
            this.barrierfp.push(this.barrierp);
            this.barrierf.append(this.barrierfp[i]);
        }
        this.barrierf.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.barrierf);
    }
    timestress(){
      for(let i = 0; i<18; i++){
        if(this.xr[i]<0){
          this.xr[i] += .0025;
        } else if(this.xr[i]>0){
          this.xr[i] -= .0025;
        } else if(this.xr[i]==0){
          this.xr[i]=0;
        }
        if(this.zr[i]<0){
          this.zr[i] += .0025;
        } else if(this.zr[i]>0){
          this.zr[i] -= .0025;
        } else if(this.zr[i]==0){
          this.zr[i]=0;
        }
        this.barrierfp[i].setAttribute("position", {x:this.xr[i]*3 ,y:this.y ,z:this.zr[i]*3});
      }
    }
}