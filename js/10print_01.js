let totalSquares;
let drawnSquares = 0;
let interval;
const displayTime = 8000; // 8 seconds

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Fermiamo draw() per eseguire solo quando necessario

  // Dimensioni del quadrato fissate a 30
  let squareSize = 30;
  let spacing = 30; // Spazio tra le colonne

  // Numero di righe e colonne che si adattano allo schermo
  let cols = floor((width + spacing) / ((3 * squareSize) + spacing));
  let rows = floor(height / (2 * squareSize));

  // Ricalcola la dimensione del quadrato per riempire lo schermo interamente
  squareSize = min((width - (cols - 1) * spacing) / (cols * 3), height / (rows * 2));

  // Calcolare il numero totale di quadrati
  totalSquares = cols * rows * 6;

  // Calcolare l'intervallo di tempo per disegnare ciascun gruppo di sei tavolette
  const intervalTime = displayTime / (totalSquares / 6);

  // Avviare il disegno delle tavolette sei alla volta
  interval = setInterval(drawNextGroup, intervalTime);
}

function drawNextGroup() {
  if (drawnSquares >= totalSquares) {
    clearInterval(interval); // Fermare l'intervallo quando tutte le tavolette sono disegnate
    return;
  }

  // Dimensioni del quadrato fissate a 30
  let squareSize = 30;
  let spacing = 30; // Spazio tra le colonne

  // Numero di righe e colonne che si adattano allo schermo
  let cols = floor((width + spacing) / ((3 * squareSize) + spacing));
  let rows = floor(height / (2 * squareSize));

  // Ricalcola la dimensione del quadrato per riempire lo schermo interamente
  squareSize = min((width - (cols - 1) * spacing) / (cols * 3), height / (rows * 2));

  // Disegna un gruppo di sei tavolette
  for (let i = 0; i < 6; i++) {
    if (drawnSquares >= totalSquares) {
      break;
    }

    // Calcolare la posizione della tavoletta da disegnare
    let row = floor(drawnSquares / (cols * 6));
    let col = floor((drawnSquares % (cols * 6)) / 6);
    let type = drawnSquares % 6;
    let offsetX = col * (3 * squareSize + spacing);
    let offsetY1 = row * 2 * squareSize;
    let offsetY2 = offsetY1 + squareSize;

    switch (type) {
      case 0:
        // Tavola 3 (primo quadrato)
        fill(0);
        noStroke();
        rect(offsetX, offsetY1, squareSize, squareSize);
        break;
      case 1:
        // Tavola 1 (secondo quadrato)
        fill(255);
        noStroke();
        rect(offsetX + squareSize, offsetY1, squareSize, squareSize);
        fill(0);
        let middleX1 = offsetX + squareSize * 1.5;
        let middleY1 = offsetY1 + squareSize / 2;
        triangle(offsetX + squareSize, offsetY1, offsetX + 2 * squareSize, offsetY1, middleX1, middleY1);
        triangle(offsetX + 2 * squareSize, offsetY1 + squareSize, offsetX + squareSize, offsetY1 + squareSize, middleX1, middleY1);
        fill(255);
        triangle(offsetX + 2 * squareSize, offsetY1, offsetX + 2 * squareSize, offsetY1 + squareSize, middleX1, middleY1);
        triangle(offsetX + squareSize, offsetY1 + squareSize, offsetX + squareSize, offsetY1, middleX1, middleY1);
        break;
      case 2:
        // Tavola 3 (terzo quadrato)
        fill(0);
        noStroke();
        rect(offsetX + 2 * squareSize, offsetY1, squareSize, squareSize);
        break;
      case 3:
        // Tavola 2 (primo quadrato della seconda fila)
        fill(255);
        noStroke();
        rect(offsetX, offsetY2, squareSize, squareSize);
        fill(255);
        let middleX2_1 = offsetX + squareSize / 2;
        let middleY2_1 = offsetY2 + squareSize / 2;
        triangle(offsetX, offsetY2, offsetX + squareSize, offsetY2, middleX2_1, middleY2_1);
        triangle(offsetX + squareSize, offsetY2 + squareSize, offsetX, offsetY2 + squareSize, middleX2_1, middleY2_1);
        fill(0);
        triangle(offsetX + squareSize, offsetY2, offsetX + squareSize, offsetY2 + squareSize, middleX2_1, middleY2_1);
        triangle(offsetX, offsetY2 + squareSize, offsetX, offsetY2, middleX2_1, middleY2_1);
        break;
      case 4:
        // Tavola 4 (secondo quadrato della seconda fila)
        fill(255);
        noStroke();
        rect(offsetX + squareSize, offsetY2, squareSize, squareSize);
        break;
      case 5:
        // Tavola 2 (terzo quadrato a della seconda fila)
        fill(255);
        noStroke();
        rect(offsetX + 2 * squareSize, offsetY2, squareSize, squareSize);
        fill(255);
        let middleX2_2 = offsetX + 2.5 * squareSize;
        let middleY2_2 = offsetY2 + squareSize / 2;
        triangle(offsetX + 2 * squareSize, offsetY2, offsetX + 3 * squareSize, offsetY2, middleX2_2, middleY2_2);
        triangle(offsetX + 3 * squareSize, offsetY2 + squareSize, offsetX + 2 * squareSize, offsetY2 + squareSize, middleX2_2, middleY2_2);
        fill(0);
        triangle(offsetX + 3 * squareSize, offsetY2, offsetX + 3 * squareSize, offsetY2 + squareSize, middleX2_2, middleY2_2);
        triangle(offsetX + 2 * squareSize, offsetY2 + squareSize, offsetX + 2 * squareSize, offsetY2, middleX2_2, middleY2_2);
        break;
    }

    drawnSquares++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawnSquares = 0; // Reset the count
  clearInterval(interval); // Clear any existing interval
  setup(); // Recalculate everything and restart
}
