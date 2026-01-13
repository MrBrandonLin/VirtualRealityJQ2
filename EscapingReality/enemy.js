class tot{
    constructor(){
        this.character = document.getElementById("character");
        this.tt = this.character.cloneNode(true);
        this.tt.setAttribute("position", "0 8 0");
        this.collection = this.tt.children;
        console.log(this.collection);
        //scene.append(this.tt);
    }
    freak(){
        this.tt.addEventListener("click", ()=>{
            this.collection[0].object3D.position.y = 10;
        })
    }
}