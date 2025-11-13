class column{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.column = document.createElement("a-cylinder");
        this.column.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.column.setAttribute("radius", ".7");
        scene.append(this.column);
    }
}