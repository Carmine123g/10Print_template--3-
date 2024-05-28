function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);

  // Dimensione del quadrato (usato per calcolare il raggio del cerchio)
  let squareSize = 30;
  
  // Calcola il raggio del cerchio (metà della diagonale del quadrato)
  let circleRadius = squareSize / sqrt(2);

  // Distanza tra i centri delle stelle
  let spacing = squareSize * 1.5;

  // Disegna le stelle in una griglia
  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      drawStar(x, y, circleRadius);
    }
  }
}

function drawStar(centerX, centerY, circleRadius) {
  // Disegna il cerchio
  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(centerX, centerY, circleRadius * 2, circleRadius * 2);

  // Disegna la stella a otto punte
  let numPoints = 8;
  let angle = TWO_PI / numPoints;
  let halfAngle = angle / 2.0;
  let starRadiusOuter = circleRadius;
  let starRadiusInner = circleRadius / 2;

  fill(0);
  noStroke();
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = centerX + cos(a) * starRadiusOuter;
    let sy = centerY + sin(a) * starRadiusOuter;
    vertex(sx, sy);
    sx = centerX + cos(a + halfAngle) * starRadiusInner;
    sy = centerY + sin(a + halfAngle) * starRadiusInner;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
