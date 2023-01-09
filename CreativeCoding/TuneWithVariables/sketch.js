//create a program that can customize the number of squares in a grid

function setup() { //runs one time
  createCanvas(windowWidth, windowWidth); //canvas is 720 pixels by 720 pixels
  background(150, 83, 200); //background is RGB purple
}

function draw() { //runs in a loop
fill (200, 75, 205); //fills the quad pink
strokeWeight (1); //stroke weight 8 pixels

var num = 2; // number of squares in my array
var sideLength = windowWidth / num; // side length

for (var y = 0; y < windowWidth; y = y + sideLength){ //loop creates a row in the y direction
  for (var x = 0; x < windowWidth; x = x + sideLength){ //loop creates a row in the x direction
    quad (x,y,
          x + sideLength, y,
          x + sideLength, y + sideLength,
          x, y + sideLength);
}
}
}
