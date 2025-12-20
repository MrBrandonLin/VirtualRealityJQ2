class menu{
    constructor(){
        this.menucamera = document.createElement("a-camera");
        this.room = document.createElement("a-box");
        this.couch = document.createElement("a-entity");

        this.menucamera.setAttribute("position", "0 1.4 51");
        this.menucamera.setAttribute("active", "true");
        this.menucamera.setAttribute("id", "secamMenu");
        this.menucamera.setAttribute("wasd-controls-enabled", "false");
        this.room.setAttribute("position", "0 1.5 50");
        this.room.setAttribute("scale", "3 2 3");
        this.room.setAttribute("side", "double");
        this.couch.setAttribute("position", ".3 .5 49.2");
        this.couch.setAttribute("rotation", "0 -20 0");
        this.couch.setAttribute("scale", ".008 .008 .008");
        this.couch.setAttribute("gltf-model", "#couch");
        this.couch.setAttribute("side", "double");

        scene.append(this.menucamera);
        scene.append(this.room);
        scene.append(this.couch);
    }
}