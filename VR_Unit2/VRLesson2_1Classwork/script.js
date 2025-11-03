window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  this.dodecahedron = document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  this.dodecahedron.setAttribute("position", "0 3 -3");
  this.dodecahedron.setAttribute("radius", "2");
  this.dodecahedron.setAttribute("color", "#7171dd");
  scene.append(this.dodecahedron);
})