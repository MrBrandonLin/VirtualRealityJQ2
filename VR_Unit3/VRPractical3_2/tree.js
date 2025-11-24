class tree{
    constructor(x, y, z, h){
        this.tree = document.createElement("a-entity");
        this.trunk = document.createElement("a-cylinder");
        this.layer1 = document.createElement("a-cone");
        this.layer2 = document.createElement("a-cone");
        this.layer2 = document.createElement("a-cone");
        this.trunk.setAttribute("height", "8");
        this.trunk.setAttribute("position", "0 3 0");
        this.tree.append(this.trunk);
        this.tree.append(this.layer1);
        this.tree.append(this.layer2);
        this.tree.append(this.layer3);
        this.tree.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.tree);
    }
}