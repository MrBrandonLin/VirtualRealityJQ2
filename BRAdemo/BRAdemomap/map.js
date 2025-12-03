class map{
    constructor(){
        this.secam = document.getElementById("secam");
        this.mapback = document.createElement("a-box");
        this.mapicon = document.createElement("a-sphere");
        this.sexbox = document.createElement("a-box");

        this.sexbox.bam = false;

        this.mapback.setAttribute("position", {x:2.5, y:1, z:-2});
        this.mapback.setAttribute("scale", {x:1, y:1, z:.01});
        this.mapback.setAttribute("id", "mapback");
        this.mapicon.setAttribute("position", {x:0, y:0, z:1});
        this.mapicon.setAttribute("color", "#ff2222");
        this.mapicon.setAttribute("scale", {x:.02, y:.02, z:.02});
        this.sexbox.setAttribute("color", "#000000");

        this.sexbox.addEventListener("click", ()=>{
            this.sexbox.bam = true;
            console.log("clicked");
        })

        this.mapback.append(this.mapicon);
        this.secam.append(this.mapback);
        scene.append(this.sexbox);
    }
    track(){
        this.mapicon.object3D.position.y = -this.secam.object3D.position.z/100;
        this.mapicon.object3D.position.x = this.secam.object3D.position.x/100;
    }
    ad(){
        if(this.sexbox.bam == true){
            this.sexbox.setAttribute("position", {x:this.secam.object3D.position.x, y:this.secam.object3D.position.y, z:this.secam.object3D.position.z});
            this.sexbox.setAttribute("side", "double");
        }
    }
}