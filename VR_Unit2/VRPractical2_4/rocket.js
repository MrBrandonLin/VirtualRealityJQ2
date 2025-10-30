class rocket{
    constructor(x, y, z){
        this.a = y, this.da = 0.14, this.x = x, this.z = z;
        this.rocket = document.createElement("a-entity");
        this.body = document.createElement("a-cylinder");
        this.lowerbody = document.createElement("a-cylinder");
        this.garterbelt = document.createElement("a-cylinder");
        this.topper = document.createElement("a-cone");

        this.body.setAttribute("height", "7");
        this.body.setAttribute("color", "#e4d501");
        this.body.setAttribute("metalness", ".6");
        this.lowerbody.setAttribute("position", "0 -4 0 ");
        this.lowerbody.setAttribute("height", ".3");
        this.lowerbody.setAttribute("color", "#e4d501");
        this.lowerbody.setAttribute("metalness", ".6");
        this.garterbelt.setAttribute("position", "0 -3.7 0 ");
        this.garterbelt.setAttribute("height", "1");
        this.garterbelt.setAttribute("radius", ".80");
        this.garterbelt.setAttribute("color", "#e4dd01");
        this.topper.setAttribute("position", "0 7.5 0 ");
        this.topper.setAttribute("height", "8.5");
        this.topper.setAttribute("radius-bottom", ".90");
        this.topper.setAttribute("color", "#ffff00");
        this.topper.setAttribute("metalness", ".3");

        this.rocket.append(this.body);
        this.rocket.append(this.lowerbody);
        this.rocket.append(this.garterbelt);
        this.rocket.append(this.topper);
        this.rocket.setAttribute("position", {x:this.x, y:this.a, z:this.z});
        scene.append(this.rocket)
    }
    launch(){
        this.a+=this.da;
        this.rocket.setAttribute("position", {x:this.x, y:this.a, z:this.z})
    }
}