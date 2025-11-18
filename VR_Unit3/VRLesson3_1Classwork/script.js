window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  let myCylinder = document.querySelector("#fredericwilliamson");


  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })
  myBox.addEventListener("mouseleave",function(){
    this.setAttribute("height",1);
  })


  myCylinder.addEventListener("click",function(){
    this.setAttribute("opacity",0);
  })
})
