class column{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.column = document.createElement("a-cylinder");
        this.columnbase = document.createElement("a-cylinder");
        this.columntop = document.createElement("a-cylinder");
        this.column.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.columnbase.setAttribute("position", {x:this.x, y:this.y-1.4, z:this.z});
        this.columntop.setAttribute("position", {x:this.x, y:this.y+1.6, z:this.z});
        this.column.setAttribute("radius", ".7");
        this.column.setAttribute("scale", "1 3 1");
        this.columnbase.setAttribute("scale", "1 .3 1");
        this.columntop.setAttribute("scale", "1 .3 1");
        this.column.setAttribute("src", "#columns");
        this.columnbase.setAttribute("src", "#columns");
        this.columntop.setAttribute("src", "#columns");
        this.column.setAttribute("side", "double");
        this.column.setAttribute("segments-radial", "12");
        this.columnbase.setAttribute("segments-radial", "12");
        this.columntop.setAttribute("segments-radial", "12");
        this.columnbase.setAttribute("color", "#cccccc");
        this.columntop.setAttribute("color", "#cccccc");
        scene.append(this.column);
        scene.append(this.columnbase);
        scene.append(this.columntop);
    }
}