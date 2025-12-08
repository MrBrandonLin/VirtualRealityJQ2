class Bullet{
  constructor(){
    this.bulletin = document.createElement("a-sphere");
    this.bulletin.setAttribute("radius",0.5)
    let pos = camera.object3D.position;
    this.bulletin.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    scene.append(this.bulletin);
    
    let theta = camera.object3D.rotation.y + Math.PI;
    let phi = camera.object3D.rotation.x;
    let v = 0.1
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