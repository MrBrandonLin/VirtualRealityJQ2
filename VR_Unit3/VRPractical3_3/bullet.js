class Bullet{
  constructor(){
    this.secam = document.getElementById("secam");
    this.bulletin = document.createElement("a-cone");
    this.bulletin.setAttribute("radius",0.5);
    this.bulletin.setAttribute("scale", ".1 .5 .1");
    this.bulletin.setAttribute("color", "#e4d501");
    this.bulletin.setAttribute("metalness", ".6");
    let pos = camera.object3D.position;
    this.bulletin.setAttribute("position",{x:pos.x,y:pos.y-.3,z:pos.z});
    this.bulletin.setAttribute("rotation", {x:this.secam.rotationObj.x-90, y:0, z:this.secam.rotationObj.y});
    console.log(this.secam.rotationObj.y);
    scene.append(this.bulletin);
    
    let theta = camera.object3D.rotation.y + Math.PI;
    let phi = camera.object3D.rotation.x;
    let v = 0.5
    let v_xz = v * Math.cos(phi);
    this.dz = v_xz * Math.cos(theta);
    this.dx = v_xz * Math.sin(theta);
    this.dy = v * Math.sin(phi);
    this.donezo = false;
  }
  fire(){
    if(this.donezo == false){
      this.bulletin.object3D.position.x += this.dx;
      this.bulletin.object3D.position.y += this.dy;
      this.bulletin.object3D.position.z += this.dz; 
    } else {
      console.log("Chip Da Rapper");
    }

    //this.bulletin.object3D.rotation.y = this.theta - Math.PI/2;
  }
}