class map{
    constructor(){
        this.secam = document.getElementById("secam");
        this.mapback = document.createElement("a-box");
        this.mapicon = document.createElement("a-sphere");
        this.mapback.setAttribute("color", "#7BC8A4");
        this.mapback.setAttribute("position", {x:2.5, y:1, z:-2});
        this.mapback.setAttribute("scale", {x:1, y:1, z:.01});
        this.mapback.setAttribute("id", "mapback");
        this.mapicon.setAttribute("position", {x:0, y:0, z:1});
        this.mapicon.setAttribute("color", "#0000ff");
        this.mapicon.setAttribute("scale", {x:.02, y:.02, z:.02});
        this.enemy = 30, this.cur= 120, this.curmin = 2, this.cursec= 0;
        this.enemycounter = document.createElement("a-text");
        this.enemycounter.setAttribute("position", {x: -.5, y: -.6, z:0});
        this.enemycounter.setAttribute("value", `${this.enemy} enemies remain`);
        this.enemycounter.setAttribute("color", "#03c6fc");
        this.enemycounter.setAttribute("side", "double");
        this.timin = document.createElement("a-text");
        this.timin.setAttribute("value", `${this.curmin}:${this.cursec}`);
        this.timin.setAttribute("position", {x: -.25, y: 1.5, z:-2});
        this.timin.setAttribute("color", "#03c6fc");
        this.mapback.append(this.enemycounter);
        this.mapback.append(this.mapicon);
        this.secam.append(this.mapback);
        this.secam.append(this.timin);
    }
    track(){
        this.mapicon.object3D.position.y = -this.secam.object3D.position.z/100;
        this.mapicon.object3D.position.x = this.secam.object3D.position.x/100;
        this.enemycounter.setAttribute("value", `${this.enemy} remain`);
    }
    time(){
        this.cur -= 1;
        this.cursec-=1;
        if(this.cursec<1){
            this.curmin-=1;
            this.cursec=60;
        } else if(this.cursec<10) {
            this.timin.setAttribute("value", `${this.curmin}:0${this.cursec}`);
        } else {
            this.timin.setAttribute("value", `${this.curmin}:${this.cursec}`);
        }

    }
}
