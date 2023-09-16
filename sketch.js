var canvas
// let currentPage;

function setup() {
  canvas = createCanvas(windowWidth -20, document.body.clientHeight -100);
canvas.position(0,0)

// document.addEventListener('spanHovered', doSomething);
}

function draw() {
  // background(250);
  
  // Example: Change stroke color based on the current page
  if (currentPage === "index") {
    stroke('green'); // Green stroke color for eng.html
 
  } else {
    stroke('black'); // Default stroke color for other pages
   
  }
  
  strokeWeight(8)

point(mouseX,mouseY)
}

function doSomething() {
  // Your functionality here
  // For example, change the background color when hovering
  
  console.log('arrivato');
}

function mouseClicked(){

  background(255)
}