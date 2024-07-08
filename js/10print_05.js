let cols = 10; // Numero di gruppi di colonne (rombi + spazi bianchi)
let diamondsPerRow = 3; // Numero di rombi per riga
let w, h; // Larghezza e altezza di un rombo
let currentRow = 0; // La riga corrente che stiamo disegnando
let drawSpeed = 0.5; // Velocità di disegno in secondi per riga

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width / (cols * (diamondsPerRow + 1)); // Calcola la larghezza di un rombo
  h = w * 2; // Calcola l'altezza di un rombo
  background(255);
  stroke(0); // Linee più scure (nero)
  strokeWeight(4); // Linee più spesse
  frameRate(1 / drawSpeed); // Imposta il frame rate per controllare la velocità di disegno
}

function draw() {
  if (currentRow < height / h) { // Controlla se ci sono ancora righe da disegnare
    drawRow(currentRow);
    currentRow++; // Passa alla riga successiva per il prossimo ciclo di draw()
  } else {
    noLoop(); // Ferma il disegno quando tutte le righe sono disegnate
  }
}

function drawRow(row) {
  for (let i = 0; i < cols; i++) {
    let xOffset = i * (diamondsPerRow + 1) * w; // Offset orizzontale considerando lo spazio bianco
    for (let k = 0; k < diamondsPerRow; k++) {
      drawDiamond(xOffset + k * w, row * h, w, h);
    }
  }
}

function drawDiamond(x, y, w, h) {
  beginShape();
  vertex(x + w / 2, y);
  vertex(x + w, y + h / 2);
  vertex(x + w / 2, y + h);
  vertex(x, y + h / 2);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w = width / (cols * (diamondsPerRow + 1));
  h = w * 2;
  background(255);
  currentRow = 0; // Ricomincia il disegno delle righe
  frameRate(1 / drawSpeed); // Aggiorna il frame rate quando la finestra è ridimensionata
}
