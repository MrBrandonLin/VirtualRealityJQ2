class mrskellybones{
    constructor(x, y, z, ry, rz){
        this.x = x;
        this.y = y;
        this.z = z;
        this.ry = ry;
        this.rz = rz;
        this.mrskellybones = document.createElement("a-entity");
        this.mrskellybones.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.mrskellybones.setAttribute("rotation", {x:-90, y:this.ry, z:this.rz});
        this.mrskellybones.setAttribute("scale", ".2 .2 .2");
        this.mrskellybones.setAttribute("gltf-model", "#skeleton");
        scene.append(this.mrskellybones);
    }
}