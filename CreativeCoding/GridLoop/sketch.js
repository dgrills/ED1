function setup() { //runs one time
  createCanvas(720, 720); //canvas is 720 pixels by 720 pixels
  background(201, 83, 230); //background is RGB purple
}

function draw() { //runs in a loop
fill (255, 0, 255); //fills the quad pink
strokeWeight (1); //stroke weight 8 pixels

for (var y = 0; y < 720; y = y + 360){ //loop creates a row in the y direction
  for (var x = 0; x < 720; x = x + 360){ //loop creates a row in the x direction
    quad (x,y,
          x + 360, y,
          x + 360, y + 360,
          x, y + 360);
}
}
}
