class tree{
    constructor(x, y, z, h){
        this.tree = document.createElement("a-entity");
        this.trunk = document.createElement("a-cylinder");
        this.layer1 = document.createElement("a-cone");
        this.layer2 = document.createElement("a-cone");
        this.layer3 = document.createElement("a-cone");

        this.trunk.setAttribute("height", "8");
        this.trunk.setAttribute("position", "0 3 0");
        this.trunk.setAttribute("color", "#865d04");
        this.layer1.setAttribute("position", "0 6 0");
        this.layer1.setAttribute("scale", "7 5 7");
        this.layer1.setAttribute("color", "#11ff88");
        this.layer2.setAttribute("position", "0 8 0");
        this.layer2.setAttribute("scale", "5 4 5");
        this.layer2.setAttribute("color", "#11ff88");
        this.layer3.setAttribute("position", "0 10 0");
        this.layer3.setAttribute("scale", "3 3 3");
        this.layer3.setAttribute("color", "#11ff88");


        this.tree.append(this.trunk);
        this.tree.append(this.layer1);
        this.tree.append(this.layer2);
        this.tree.append(this.layer3);

        this.tree.setAttribute("position", {x:x, y:y, z:z});
        this.tree.setAttribute("scale", {x:1, y:h, z:1});
        scene.append(this.tree);
    }
}