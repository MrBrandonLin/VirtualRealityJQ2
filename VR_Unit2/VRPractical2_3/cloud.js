class Cloud{
    constructor(x, y, z){
        this.cloud = document.createElement("a-entity");
  
        let cloud1 = document.createElement("a-sphere");
        cloud1.setAttribute("position","0 0 0");
        this.cloud.append( cloud1 );

        let cloud2 = document.createElement("a-sphere");
        cloud2.setAttribute("position","1.5 0 0");
        this.cloud.append( cloud2 );
        let cloud3 = document.createElement("a-sphere");
        cloud3.setAttribute("position",".5 .5 0");
        this.cloud.append( cloud3 );

        this.cloud.setAttribute("position",{x:x, y:y, z:z});
        this.cloud.setAttribute("rotation",{x:y, y:z, z:x});
        scene.append( this.cloud )
    }
}