let x = 0;
let y = 0;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  strokeWeight(2);
  if (random(1) < 0.5) {
    fill(0);
    rect(x, y, size, size);
  } else {
    fill(255);
    fill(x + size / 2, y + size / 2, size, size);
  }
  x += size;
  if (x > width) {
    x = 0;
    y += size;
    if (y > height) {
      noLoop(); // Stop drawing once the canvas is filled
    }
  }
}
