class Box{
 constructor(x,y,z){
   this.obj = document.createElement("a-box");
   this.obj.setAttribute('sound', {src:"#f", loop:true});
   this.boom = false;

   this.obj.setAttribute("position",{x:x,y:y,z:z});
   scene.append(this.obj);
   scene.append(this.bj);
   this.obj.addEventListener("click", ()=>{
      this.boom = true;
   })
 } 
 blast(){
   if(this.boom){
     this.obj.object3D.position.y += 0.02;
     this.obj.components.sound.playSound();
   }
 }
}