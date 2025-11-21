class dancemonkey{
    constructor(x, y, z){
        this.x = x, this.y = y, this.z = z;
        this.rx = 0, this.rtx = 1;

        this.dancemonkey = document.createElement("a-entity");
        this.body = document.createElement("a-sphere");
        this.head = document.createElement("a-sphere");


        
        this.dancemonkey.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.dancemonkey.setAttribute("scale", "1 1.4 1.1");
        this.head.setAttribute("scale", "1 .5 .5");
        this.head.setAttribute("position", "0 1.4 0");
        this.head.setAttribute("src", "zerorangutans.jpg");
        this.body.append(this.head);
        this.dancemonkey.append(this.body);
        scene.append(this.dancemonkey);
    }
    nod(){
        this.rx += this.rtx;
        this.head.setAttribute("rotation", {x:0, y:0, z:this.rx});
    }
}