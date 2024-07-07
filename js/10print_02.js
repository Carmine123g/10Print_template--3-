let columnGapFraction = 0.5; // Frazione della larghezza di una colonna da utilizzare come spazio tra le colonne
let numColumns = 0;
let yellowSquareSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateColumnParameters();
  drawColumns();
}

function calculateColumnParameters() {
  numColumns = floor(width / (height / 8)); // Calcola il numero di colonne in base alla larghezza della finestra
  yellowSquareSize = (height - (8 + 1) * yellowSquareSize * columnGapFraction) / 8; // Calcola la dimensione dei quadrati gialli in base all'altezza della finestra
}

function drawColumns() {
  background(255); // Rimuove lo sfondo grigio

  // Disegna le colonne di quadrati
  for (let col = 0; col < numColumns; col++) {
    // Calcola la posizione x della colonna corrente
    let yellowSquareX = yellowSquareSize * col + yellowSquareSize * columnGapFraction * (col + 1);

    // Disegna i quadrati nella colonna corrente
    for (let i = 0; i < 8; i++) {
      let yellowSquareY = yellowSquareSize * i + yellowSquareSize * columnGapFraction * (i + 1);

      // Disegna il quadrato giallo più grande
      noStroke();
      fill(255);
      rect(yellowSquareX, yellowSquareY, yellowSquareSize, yellowSquareSize);

      // Dimensioni del quadrato blu più piccolo senza contorno
      let blueSquareSize = yellowSquareSize * 0.48;
      let blueSquareX = yellowSquareX + (yellowSquareSize - blueSquareSize) / 2;
      let blueSquareY = yellowSquareY + (yellowSquareSize - blueSquareSize) / 2;

      fill(255);
      rect(blueSquareX, blueSquareY, blueSquareSize, blueSquareSize);

      // Dimensioni delle croci
      let crossSize = blueSquareSize * 0.7;

      // Disegna una croce in ogni angolo del quadrato blu
      drawCross(blueSquareX, blueSquareY, crossSize);
      drawCross(blueSquareX + blueSquareSize, blueSquareY, crossSize);
      drawCross(blueSquareX, blueSquareY + blueSquareSize, crossSize);
      drawCross(blueSquareX + blueSquareSize, blueSquareY + blueSquareSize, crossSize);

      // Disegna un rombo al centro del quadrato giallo
      drawDiamond(yellowSquareX + yellowSquareSize / 2, yellowSquareY + yellowSquareSize / 2, yellowSquareSize * 0.4);
    }

    // Disegna linee nere agli estremi della colonna
    stroke(0);
    strokeWeight(2);
    let startX = yellowSquareX;
    let endX = yellowSquareX + yellowSquareSize;
    let startY = yellowSquareSize * columnGapFraction * 0.5;
    let endY = height - yellowSquareSize * columnGapFraction * 0.5;
    line(startX, startY, startX, endY);
    line(endX, startY, endX, endY);
    noStroke();
  }
}

function drawCross(x, y, size) {
  let centerX = x;
  let centerY = y;

  fill(0);
  noStroke();

  ellipse(centerX, centerY, size, size * 0.4);
  ellipse(centerX, centerY, size * 0.4, size);
}

function drawDiamond(x, y, size) {
  noStroke();
  fill(0);
  beginShape();
  vertex(x, y - size / 2.5);
  vertex(x + size / 2.5, y);
  vertex(x, y + size / 2.5);
  vertex(x - size / 2.5, y);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateColumnParameters();
  drawColumns();
}


