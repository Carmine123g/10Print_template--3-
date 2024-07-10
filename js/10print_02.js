let columnGapFraction = 0.5; // Frazione della larghezza di una colonna da utilizzare come spazio tra le colonne
let numColumns = 0;
let yellowSquareSize = 0;
let adjustedSquareSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateColumnParameters();
  drawColumns();
}

function calculateColumnParameters() {
  yellowSquareSize = height / 8; // Calcola la dimensione dei quadrati gialli in base all'altezza della finestra
  numColumns = floor(width / (yellowSquareSize * (1 + columnGapFraction))); // Calcola il numero di colonne in base alla larghezza della finestra e alla frazione di spazio
  adjustedSquareSize = width / (numColumns * (1 + columnGapFraction)); // Calcola la nuova dimensione dei quadrati per adattarsi alla larghezza
}

function drawColumns() {
  background(255); // Rimuove lo sfondo grigio

  // Disegna le colonne di quadrati
  for (let col = 0; col < numColumns; col++) {
    // Calcola la posizione x della colonna corrente, includendo il gap tra le colonne
    let yellowSquareX = adjustedSquareSize * col * (1 + columnGapFraction);

    // Disegna i quadrati nella colonna corrente
    for (let i = 0; i < 8; i++) {
      let yellowSquareY = adjustedSquareSize * i;

      // Disegna il quadrato bianco più grande
      noStroke();
      fill(255); // Colore bianco
      rect(yellowSquareX, yellowSquareY, adjustedSquareSize, adjustedSquareSize);

      // Dimensioni delle croci
      let crossSize = adjustedSquareSize * 0.48 * 0.7;

      // Posizione delle croci (senza modifiche)
      let blueSquareX = yellowSquareX + (adjustedSquareSize * 0.52) / 2;
      let blueSquareY = yellowSquareY + (adjustedSquareSize * 0.52) / 2;

      // Disegna una croce in ogni angolo del quadrato bianco
      drawCross(blueSquareX, blueSquareY, crossSize);
      drawCross(blueSquareX + adjustedSquareSize * 0.48, blueSquareY, crossSize);
      drawCross(blueSquareX, blueSquareY + adjustedSquareSize * 0.48, crossSize);
      drawCross(blueSquareX + adjustedSquareSize * 0.48, blueSquareY + adjustedSquareSize * 0.48, crossSize);

      // Disegna un rombo al centro del quadrato bianco
      drawDiamond(yellowSquareX + adjustedSquareSize / 2, yellowSquareY + adjustedSquareSize / 2, adjustedSquareSize * 0.4);
    }

    // Disegna linee nere agli estremi della colonna
    stroke(0);
    strokeWeight(2);
    let startX = yellowSquareX;
    let endX = yellowSquareX + adjustedSquareSize;
    let startY = 0;
    let endY = height;
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
