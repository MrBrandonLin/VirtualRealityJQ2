class House{
    constructor(x, y, z){
        this.house = document.createElement("a-entity");
  
        let housebase = document.createElement("a-box");
        housebase.setAttribute("position","0 0 0");
        housebase.setAttribute("height",".5");
        housebase.setAttribute("color","orange");
        this.house.append( housebase );

        let housewalls = document.createElement("a-box");
        housewalls.setAttribute("position","0 .5 0");
        housewalls.setAttribute("width",".9");
        housewalls.setAttribute("depth",".9");
        housebase.setAttribute("height",".5");
        housewalls.setAttribute("color","yellow");
        this.house.append( housewalls );

        let houseroof = document.createElement("a-cone");
        houseroof.setAttribute("position","0 1.2 0");
        houseroof.setAttribute("rotation","0 45 0");
        houseroof.setAttribute("segments-radial","4");
        houseroof.setAttribute("height",".5");
        houseroof.setAttribute("width",".2");
        houseroof.setAttribute("color","blue");
        this.house.append( houseroof );

        this.house.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.house )
    }
}