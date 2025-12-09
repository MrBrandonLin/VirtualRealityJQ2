class rifle{
    constructor(){
        this.secam = document.getElementById("secam");
        this.barrel = document.createElement("a-cylinder");
        this.barrel.setAttribute("position", "0 -.4 -1");
        this.barrel.setAttribute("rotation", "90 0 0");
        this.barrel.setAttribute("scale", ".2 2 .2");
        this.barrel.setAttribute("color", "#a5a6b5");
        this.ammo = 6;
        this.ammocounter = document.createElement("a-text");
        this.ammocounter.setAttribute("position", {x: -.2, y:.3, z:-1.8});
        this.ammocounter.setAttribute("rotation", "-90 0 0");
        this.ammocounter.setAttribute("value", `6/6`);
        this.ammocounter.setAttribute("color", "#03c6fc");
        this.ammocounter.setAttribute("side", "double");
        this.barrel.append(this.ammocounter);
        this.secam.append(this.barrel);
    }
    count(){
        this.ammocounter.setAttribute("value", `${this.ammo}/6`);
    }
}