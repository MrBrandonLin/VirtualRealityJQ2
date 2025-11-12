/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
  "----------------------",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  //for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  //}
  sexmachine = new daedalusparts("true", 1, -10, -5);
  loop();
})

function loop(){
  sexmachine.observation();

  window.requestAnimationFrame( loop );
}