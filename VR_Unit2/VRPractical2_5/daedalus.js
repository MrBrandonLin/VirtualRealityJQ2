class daedalusparts{
    constructor(schrodinger, x, y, z){
        this.x = x;
        this.y = y;
        this.z = z; 
        this.m = 0.2;
        this.cat = schrodinger;
        this.wallcom = [], this.wallpar;
        for(let i = 0; i < 9; i++){
            this.wallpar = document.createElement("a-box");
            this.wallpar.setAttribute("position", {x:this.x, y:i, z:this.z});
            this.wallcom.push(this.wallpar);
            scene.append(this.wallcom[i])
        }
    }
    observation(){
        this.secam = document.getElementById("secam");
        if(this.cat == "true" && (this.secam.object3D.position.x > this.x-5 || this.secam.object3D.position.x < this.x+5) && (this.secam.object3D.position.z > this.z-5 || this.secam.object3D.position.z < this.z+5)){
            this.y += this.m;
            for(let i = 0; i < 9; i++){
                this.wallcom[i].setAttribute("position", {x:this.x, y:this.y, z:this.z});
            }
        }
        console.log(this.secam.object3D.position.x);
    }
}

