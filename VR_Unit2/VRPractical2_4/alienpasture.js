class alienpasture{
    constructor(x, y, z){
        this.alienpasture = document.createElement("a-entity");
        this.body = document.createElement("a-box");
        this.base = document.createElement("a-box");
        this.cornices = [];
        this.CX = -1, this.CZ = -1;
        for(let i=0; i<4; i++){
            this.cornice = document.createElement("a-box");
            this.cornices.push(this.cornice);
            this.cornices[i].setAttribute("position", {x:CX, y:0, z:CZ});
            this.alienpasture.append(this.cornices[i]);
        }

        this.body.setAttribute("scale", "1.5 3 1.5");
        this.body.setAttribute("color", "#3d23ff");
        this.base.setAttribute("position", "0 -1.4 0");
        this.base.setAttribute("scale", "1.6 .2 1.6");
        this.base.setAttribute("color", "#3d23ff");

        this.alienpasture.append(this.body);
        this.alienpasture.append(this.base);
        this.alienpasture.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.alienpasture);

    }
}