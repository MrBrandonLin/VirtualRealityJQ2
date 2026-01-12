class menu{
    constructor(){
        this.menucamera = document.createElement("a-camera");
        this.menucursor = document.createElement("a-cursor");
        this.menumenu = document.createElement("a-plane");
        this.room = document.createElement("a-box");
        this.ceiling = document.createElement("a-plane");
        this.floor = document.createElement("a-plane");
        this.couch = document.createElement("a-entity");
        this.title = document.createElement("a-image");
        this.start = document.createElement("a-cylinder");
        this.stats = document.createElement("a-cylinder");
        this.credits = document.createElement("a-cylinder");
        this.top = document.createElement("a-sphere");
        this.bottom = document.createElement("a-sphere");
        this.song1 = document.createElement("a-box");
        this.song2 = document.createElement("a-box");
        this.song3 = document.createElement("a-box");
        this.song4 = document.createElement("a-box");
        this.song5 = document.createElement("a-box");
        this.song6 = document.createElement("a-box");
        this.songselector = document.createElement("a-box");


        this.menucamera.setAttribute("position", "0 1.4 50.6"); this.menucamera.setAttribute("active", "true"); 
        this.menucamera.setAttribute("wasd-controls-enabled", "true");
        this.menumenu.setAttribute("position", "-.3 1.4 50"); this.menumenu.setAttribute("geometry", {width: 0}); 
        this.menumenu.setAttribute("scale", "1 .7 1"); 
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
        this.couch.setAttribute("sound", {src:"#SongMenu", loop:true, refDistance:1000})
        this.title.setAttribute("position", ".2 1.7 49"); this.title.setAttribute("scale", "1.5 .80");
        this.title.setAttribute("src", "#title");
        this.start.setAttribute("position", "-.5 1.6 50"); this.start.setAttribute("rotation", "0 -24 0"); 
        this.start.setAttribute("scale", ".2 .2 .2");
        this.start.setAttribute("src", "#start2"); this.start.setAttribute("repeat", "3"); 
        this.stats.setAttribute("position", "-.5 1.4 50"); this.stats.setAttribute("rotation", "0 -22 0"); 
        this.stats.setAttribute("scale", ".2 .2 .2");
        this.stats.setAttribute("src", "#stats1"); this.stats.setAttribute("repeat", "3"); 
        this.credits.setAttribute("position", "-.5 1.2 50"); this.credits.setAttribute("rotation", "0 -22 0"); 
        this.credits.setAttribute("scale", ".2 .2 .2"); 
        this.credits.setAttribute("src", "#credits1"); this.credits.setAttribute("repeat", "3"); 
        this.top.setAttribute("position", "-.5 1.7 50"); this.top.setAttribute("scale", ".2 .2 .2");
        this.top.setAttribute("src", "#leathertexture"); this.top.setAttribute("repeat", "4 2"); 
        this.bottom.setAttribute("position", "-.5 1.1 50"); this.bottom.setAttribute("scale", ".2 .2 .2");
        this.bottom.setAttribute("src", "#leathertexture"); this.bottom.setAttribute("repeat", "4 2"); 
        this.song1.setAttribute("position", "0 -2 0");
        this.song1.setAttribute("scale", ".2 .3 .2"); this.song1.setAttribute("color", "#138328");
        this.song2.setAttribute("position", "0 -2 0");
        this.song2.setAttribute("scale", ".2 .3 .2"); this.song2.setAttribute("color", "#ff02ff")
        this.song3.setAttribute("position", "0 -2 0");
        this.song3.setAttribute("scale", ".2 .3 .2"); this.song3.setAttribute("color", "#f31234")
        this.song4.setAttribute("position", "0 -2 0");
        this.song4.setAttribute("scale", ".2 .3 .2"); this.song4.setAttribute("color", "#ff00ff")
        this.song5.setAttribute("position", "0 -2 0");
        this.song5.setAttribute("scale", ".2 .3 .2"); this.song5.setAttribute("color", "#a331ba")
        this.song6.setAttribute("position", "0 -2 0");
        this.song6.setAttribute("scale", ".2 .3 .2"); this.song6.setAttribute("color", "#ff7777")
        this.songselector.setAttribute("position", "-.05 2 -.1");
        this.songselector.setAttribute("scale", ".25 .35 .25"); this.songselector.setAttribute("color", "#1fff00");

        scene.append(this.menucamera);
        this.menucamera.append(this.menucursor);
        scene.append(this.menumenu);
        scene.append(this.room);  scene.append(this.ceiling); scene.append(this.floor);
        scene.append(this.couch);
        scene.append(this.title);
        scene.append(this.start); scene.append(this.stats); scene.append(this.credits);
        scene.append(this.top); scene.append(this.bottom);
        this.menumenu.append(this.song1); this.menumenu.append(this.song2); this.menumenu.append(this.song3);
        this.menumenu.append(this.song4); this.menumenu.append(this.song5); this.menumenu.append(this.song6);
        this.menumenu.append(this.songselector);

        this.menuchoice = 0; this.menudepth1 = 0; this.menudepth2 = 0; 
        this.menuwinder = false; this.menuwind = 0, this.menuwindment = .1;

        window.addEventListener("click", ()=>{
            this.couch.components.sound.playSound();
        })
    }
    thereare5secondsoftitlecard(){

    }
    menuselect(key){

        if(key=="o"){
            if(this.menudepth1 == 0){
                this.menuchoice += 1;
                if(this.menuchoice > 2){
                    this.menuchoice = 0;
                }
            } else if(this.menudepth1 == 1){
                this.menudepth2 += 1;
                if(this.menudepth2 > 3){
                    this.menudepth2 = 0;
                }
            }
            
        } else if(key=="i"){
            if(this.menudepth1 == 0){
                this.menuchoice -= 1;
                if(this.menuchoice < 0){
                    this.menuchoice = 2;
                }
            } else if(this.menudepth1 == 1){
                this.menudepth2 -= 1;
                if(this.menudepth2 < 0){
                    this.menudepth2 = 3;
                }
            }
        }
        if(key=="p"){
            this.menuwinder = true;
            this.menudepth1 += 1;
            this.menuwindment = .1; 
        }
        if(key=="u"){
            this.menuwinder = true;
            this.menudepth1 -= 1;
            this.menuwindment = -.1;
            if(this.menudepth1<=0){
                this.menudepth1 = 0;
            }
        }
        if(this.menuchoice == 0){
            this.start.setAttribute("src", "#start2");
            this.stats.setAttribute("src", "#stats1");
            this.credits.setAttribute("src", "#credits1");
            if(this.menudepth1 == 1){
                this.song1.setAttribute("position", "-.05 .2 -.05"); this.song2.setAttribute("position", ".25 .2 -.05");
                this.song3.setAttribute("position", "-.05 -.2 -.05"); this.song4.setAttribute("position", ".25 -.2 -.05");
                if(this.menudepth2 == 0){
                    this.songselector.setAttribute("position", "-.05 .2 -.1");
                } else if(this.menudepth2 == 1){
                    this.songselector.setAttribute("position", ".25 .2 -.1");
                } else if(this.menudepth2 == 2){
                    this.songselector.setAttribute("position", "-.05 -.2 -.1");
                } else if(this.menudepth2 == 3){
                    this.songselector.setAttribute("position", ".25 -.2 -.1");
                }
            } else if(this.menudepth1 == 0){
                this.song1.setAttribute("position", "-.05 2 -.05"); this.song2.setAttribute("position", ".25 2 -.05");
                this.song3.setAttribute("position", "-.05 -2 -.05"); this.song4.setAttribute("position", ".25 -2 -.05");
                this.songselector.setAttribute("position", "-.05 2 -.1");
            }
        } else if(this.menuchoice == 1){
            this.start.setAttribute("src", "#start1");
            this.stats.setAttribute("src", "#stats2");
            this.credits.setAttribute("src", "#credits1");
        } else if(this.menuchoice == 2){
            this.start.setAttribute("src", "#start1");
            this.stats.setAttribute("src", "#stats1");
            this.credits.setAttribute("src", "#credits2");
        }
        console.log(this.menuchoice + ", " + this.menudepth1 + ", " + this.menudepth2);

    }
    menuwindmechanic(){
        if(this.menuwinder == true){
            this.menuwind += this.menuwindment;
            this.menumenu.setAttribute("geometry", {width: this.menuwind});
            this.menumenu.setAttribute("position", {x:-.5+(this.menuwind*.5), y:1.4, z:50});
            if(this.menuwind > .8 || this.menuwind < 0){
                this.menuwinder = false;
            }
        }
    }
}