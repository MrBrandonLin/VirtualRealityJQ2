class menu{
    constructor(){
        this.menucamera = document.createElement("a-camera");
        this.menucursor = document.createElement("a-cursor");
        this.room = document.createElement("a-box");
        this.ceiling = document.createElement("a-plane");
        this.floor = document.createElement("a-plane");
        this.couch = document.createElement("a-entity");
        this.title = document.createElement("a-image");
        this.start = document.createElement("a-cylinder");
        this.settings = document.createElement("a-cylinder");
        this.credits = document.createElement("a-cylinder");

        this.menucamera.setAttribute("position", "0 1.4 51"); this.menucamera.setAttribute("active", "true"); 
        this.menucamera.setAttribute("wasd-controls-enabled", "true");
        this.room.setAttribute("position", "0 1.5 50"); this.room.setAttribute("scale", "3 2 3");
        this.room.setAttribute("side", "double"); this.room.setAttribute("position", "0 1.5 50");
        this.room.setAttribute("src", "#whitebricktexture");
        this.ceiling.setAttribute("position", "0 2.49 50"); this.ceiling.setAttribute("rotation", "90");
        this.ceiling.setAttribute("scale", "3 3 0");
        this.ceiling.setAttribute("src", "#asbestostexture");
        this.floor.setAttribute("position", "0 .51 50"); this.floor.setAttribute("rotation", "-90");
        this.floor.setAttribute("scale", "3 3 0"); this.floor.setAttribute("repeat", "4 4");
        this.floor.setAttribute("src", "#woodtexture");
        this.couch.setAttribute("position", ".3 .5 49.2"); this.couch.setAttribute("rotation", "0 -20 0");
        this.couch.setAttribute("scale", ".008 .008 .008"); this.couch.setAttribute("gltf-model", "#couch");
        this.couch.setAttribute("side", "double");
        this.title.setAttribute("position", ".2 1.7 49"); this.title.setAttribute("scale", "1.5 .80");
        this.title.setAttribute("src", "#title");
        this.start.setAttribute("position", "-.5 1.6 50"); this.start.setAttribute("scale", ".2 .2 .2");
        this.start.setAttribute("color", "#ffff00");
        this.settings.setAttribute("position", "-.5 1.4 50"); this.settings.setAttribute("scale", ".2 .2 .2");
        this.settings.setAttribute("color", "#ff0000"); 
        this.credits.setAttribute("position", "-.5 1.2 50"); this.credits.setAttribute("scale", ".2 .2 .2");
        this.credits.setAttribute("color", "#ff0000");

        scene.append(this.menucamera);
        this.menucamera.append(this.menucursor);
        scene.append(this.room);
        scene.append(this.ceiling);
        scene.append(this.floor);
        scene.append(this.couch);
        scene.append(this.title);
        scene.append(this.start);
        scene.append(this.settings);
        scene.append(this.credits);

        this.menuchoice = 0;
    }
    thereare5secondsoftitlecard(){

    }
    menuselect(key){
        if(key=="o"){
            this.menuchoice += 1;
            if(this.menuchoice > 2){
                this.menuchoice = 0;
            }
        } else if(key=="i"){
            this.menuchoice -= 1;
            if(this.menuchoice < 0){
                this.menuchoice = 2;
            }
        }
        if(this.menuchoice == 0){
            this.start.setAttribute("color", "#ffff00");
            this.settings.setAttribute("color", "#ff0000");
            this.credits.setAttribute("color", "#ff0000");
        } else if(this.menuchoice == 1){
            this.start.setAttribute("color", "#ff0000");
            this.settings.setAttribute("color", "#ffff00");
            this.credits.setAttribute("color", "#ff0000");
        } else if(this.menuchoice == 2){
            this.start.setAttribute("color", "#ff0000");
            this.settings.setAttribute("color", "#ff0000");
            this.credits.setAttribute("color", "#ffff00");
        }

    }
}