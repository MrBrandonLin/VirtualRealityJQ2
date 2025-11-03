class alienpasture{
    constructor(x, y, z, s){
        this.x = x;
        this.a = y;
        this.z = z;
        this.da = s;
        this.roty = 0;
        this.rotdy = 2;

        this.alienpasture = document.createElement("a-entity");
        this.body = document.createElement("a-box");
        this.base = document.createElement("a-box");
        this.cornice1 = document.createElement("a-box");
        this.cornice2 = document.createElement("a-box");
        this.cornice3 = document.createElement("a-box");
        this.cornice4 = document.createElement("a-box");
        this.cornice5 = document.createElement("a-box");
        this.cornice6 = document.createElement("a-box");
        this.cornice7 = document.createElement("a-box");
        this.cornice8 = document.createElement("a-box");
        this.lightshaft1 = document.createElement("a-box");
        this.lightshaft2 = document.createElement("a-box");
        this.tophat1 = document.createElement("a-box");
        this.tophat2 = document.createElement("a-box");
        this.CX = -1, this.CZ = -1;

        this.body.setAttribute("scale", "1.4 3 1.4");
        this.body.setAttribute("color", "#0c0066");
        this.base.setAttribute("position", "0 -1.4 0");
        this.base.setAttribute("scale", "1.7 .2 1.7");
        this.base.setAttribute("color", "#0c0066");
        this.cornice1.setAttribute("position", ".7 .2 .7");
        this.cornice1.setAttribute("scale", ".2 3 .2");
        this.cornice1.setAttribute("color", "#0c0066");
        this.cornice2.setAttribute("position", "-.7 .2 .7");
        this.cornice2.setAttribute("scale", ".2 3 .2");
        this.cornice2.setAttribute("color", "#0c0066");
        this.cornice3.setAttribute("position", ".7 .2 -.7");
        this.cornice3.setAttribute("scale", ".2 3 .2");
        this.cornice3.setAttribute("color", "#0c0066");
        this.cornice4.setAttribute("position", "-.7 .2 -.7");
        this.cornice4.setAttribute("scale", ".2 3 .2");
        this.cornice4.setAttribute("color", "#0c0066");
        this.cornice5.setAttribute("position", ".7 .2 0");
        this.cornice5.setAttribute("scale", ".2 3 .2");
        this.cornice5.setAttribute("color", "#0c0066");
        this.cornice6.setAttribute("position", "0 .2 -.7");
        this.cornice6.setAttribute("scale", ".2 3 .2");
        this.cornice6.setAttribute("color", "#0c0066");
        this.cornice7.setAttribute("position", "-.7 .2 0");
        this.cornice7.setAttribute("scale", ".2 3 .2");
        this.cornice7.setAttribute("color", "#0c0066");
        this.cornice8.setAttribute("position", "0 .2 .7");
        this.cornice8.setAttribute("scale", ".2 3 .2");
        this.cornice8.setAttribute("color", "#0c0066");
        this.lightshaft1.setAttribute("position", "0 1 0");
        this.lightshaft1.setAttribute("scale", "1.47 .5 1.1");
        this.lightshaft2.setAttribute("position", "0 1 0");
        this.lightshaft2.setAttribute("scale", "1.1 .5 1.47");
        this.tophat1.setAttribute("position", "0 1.5 0");
        this.tophat1.setAttribute("scale", "1.8 .2 1.8");
        this.tophat1.setAttribute("color", "#0c0066");
        this.tophat2.setAttribute("position", "0 1.6 0");
        this.tophat2.setAttribute("scale", "1.6 .2 1.6");
        this.tophat2.setAttribute("color", "#0c0066");

        this.alienpasture.append(this.body);
        this.alienpasture.append(this.base);
        this.alienpasture.append(this.cornice1);
        this.alienpasture.append(this.cornice2);
        this.alienpasture.append(this.cornice3);
        this.alienpasture.append(this.cornice4);
        this.alienpasture.append(this.cornice5);
        this.alienpasture.append(this.cornice6);
        this.alienpasture.append(this.cornice7);
        this.alienpasture.append(this.cornice8);
        this.alienpasture.append(this.lightshaft1);
        this.alienpasture.append(this.lightshaft2);
        this.alienpasture.append(this.tophat1);
        this.alienpasture.append(this.tophat2);
        this.alienpasture.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.alienpasture);

    }
    crash(){
        if(this.a <= 2){
            this.da = 0;
            this.rotdy = 0;
        }
        this.a-=this.da;
        this.roty+=this.rotdy;
        this.alienpasture.setAttribute("position", {x:this.x, y:this.a, z:this.z})
        this.alienpasture.setAttribute("rotation", {x:0, y:this.roty, z:0})
    }
}