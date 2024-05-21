let x = 0;
let y = 0;
let size = 20
; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(3);
  if (random(1) < 0.5) {
    
    arc(x + size/2, y + size/2, size, size, PI, PI + HALF_PI);
  } else {
    
    arc(x + size/2, y + size/2, size, size, HALF_PI, PI);
  }
  x += size;
  if (x > width) {
    x = 0;
    y += size;
  
  }
}
