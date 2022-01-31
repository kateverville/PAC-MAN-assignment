// THIS IS YOUR CODE AFTER REFACTORING (not passing in NextTech, but working in the browser) 

// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
// STEP 1: remove the global variable pageWidth
//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  // STEP 3: checkPageBounds only acceps three arguments, remove the last one (null)
  direction = checkPageBounds(direction, imgWidth, pos);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

// STEP 2: Remove unused parameter pageWidth
function checkPageBounds(direction, imgWidth, pos) { 
  if(pos > window.innerWidth - imgWidth){
    direction = 1;
  }else if(pos < 0){
    direction = 0;
  }
  return direction;
}

// This function determines the direction of PacMan based on screen edge detection. 

setInterval(Run, 200);

//Please do not change
module.exports = checkPageBounds;
