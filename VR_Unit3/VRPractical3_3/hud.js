class map{
    constructor(){
        this.secam = document.getElementById("secam");
        this.mapback = document.createElement("a-box");
        this.mapicon = document.createElement("a-sphere");
        this.mapback.setAttribute("position", {x:2.5, y:1, z:-2});
        this.mapback.setAttribute("scale", {x:1, y:1, z:.01});
        this.mapback.setAttribute("id", "mapback");
        this.mapicon.setAttribute("position", {x:0, y:0, z:1});
        this.mapicon.setAttribute("color", "#ff2222");
        this.mapicon.setAttribute("scale", {x:.02, y:.02, z:.02});

        this.mapback.append(this.mapicon);
        this.secam.append(this.mapback);
    }
    track(){
        this.mapicon.object3D.position.y = -this.secam.object3D.position.z/100;
        this.mapicon.object3D.position.x = this.secam.object3D.position.x/100;
    }
}
