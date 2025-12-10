class rocknbowl{
    constructor(x, z, scale){
        this.x = x;
        this.z = z;
        this.scale = scale;
        this.rock = document.createElement("a-dodecahedron");
        this.rock.setAttribute("position", {x:this.x, y:1, z:this.z});
        this.rock.setAttribute("scale", {x:this.scale, y:this.scale, z:this.scale});
        this.rock.setAttribute("color", "#b37400");
        scene.append(this.rock);
        
    }
}