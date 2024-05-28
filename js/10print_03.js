function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Fermiamo draw() per eseguire solo quando necessario
}

function draw() {
  background(255);

  // Dimensioni del quadrato fissate a 30
  let squareSize = 30;
  let spacing = 30; // Spazio tra le colonne

  // Numero di colonne e righe che si adattano allo schermo
  let cols = floor((width + spacing) / ((3 * squareSize) + spacing));
  let rows = floor(height / (2 * squareSize));

  // Ricalcola la dimensione del quadrato per riempire lo schermo interamente
  squareSize = min((width - (cols - 1) * spacing) / (cols * 3), height / (rows * 2));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let offsetX = col * (3 * squareSize + spacing);
      let offsetY = row * 2 * squareSize;

      // Prima fila: Tavola 3, Tavola 1, Tavola 3
      // Tavola 3 (primo quadrato)
      let squareX3_1 = width / 2 - 1.5 * squareSize + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY3_1 = height / 4 - squareSize / 2 + offsetY - (rows * 2 * squareSize) / 2 + squareSize;

      fill(0);
      noStroke();
      rect(squareX3_1, squareY3_1, squareSize, squareSize);

      // Tavola 1 (secondo quadrato)
      let squareX1 = width / 2 - squareSize / 2 + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY1 = height / 4 - squareSize / 2 + offsetY - (rows * 2 * squareSize) / 2 + squareSize;
      let middleX1 = squareX1 + squareSize / 2;
      let middleY1 = squareY1 + squareSize / 2;

      fill(255);
      stroke(0);
      rect(squareX1, squareY1, squareSize, squareSize);

      fill(0); // Nero
      noStroke();
      triangle(squareX1, squareY1, squareX1 + squareSize, squareY1, middleX1, middleY1); // Triangolo superiore
      triangle(squareX1 + squareSize, squareY1 + squareSize, squareX1, squareY1 + squareSize, middleX1, middleY1); // Triangolo inferiore

      fill(255); // Bianco
      triangle(squareX1 + squareSize, squareY1, squareX1 + squareSize, squareY1 + squareSize, middleX1, middleY1); // Triangolo destro
      triangle(squareX1, squareY1 + squareSize, squareX1, squareY1, middleX1, middleY1); // Triangolo sinistro

      // Tavola 3 (terzo quadrato)
      let squareX3_2 = width / 2 + squareSize / 2 + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY3_2 = height / 4 - squareSize / 2 + offsetY - (rows * 2 * squareSize) / 2 + squareSize;

      fill(0);
      noStroke();
      rect(squareX3_2, squareY3_2, squareSize, squareSize);

      // Seconda fila: Tavola 2, Tavola 4, Tavola 2
      // Tavola 2 (primo quadrato)
      let squareX2_1 = width / 2 - 1.5 * squareSize + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY2_1 = squareY3_1 + squareSize; // Spostato subito sotto la prima fila
      let middleX2_1 = squareX2_1 + squareSize / 2;
      let middleY2_1 = squareY2_1 + squareSize / 2;

      fill(255);
      stroke(0);
      rect(squareX2_1, squareY2_1, squareSize, squareSize);

      fill(255); // Bianco
      triangle(squareX2_1, squareY2_1, squareX2_1 + squareSize, squareY2_1, middleX2_1, middleY2_1); // Triangolo superiore
      triangle(squareX2_1 + squareSize, squareY2_1 + squareSize, squareX2_1, squareY2_1 + squareSize, middleX2_1, middleY2_1); // Triangolo inferiore

      fill(0); // Nero
      triangle(squareX2_1 + squareSize, squareY2_1, squareX2_1 + squareSize, squareY2_1 + squareSize, middleX2_1, middleY2_1); // Triangolo destro
      triangle(squareX2_1, squareY2_1 + squareSize, squareX2_1, squareY2_1, middleX2_1, middleY2_1); // Triangolo sinistro

      // Tavola 4 (secondo quadrato)
      let squareX4 = width / 2 - squareSize / 2 + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY4 = squareY1 + squareSize; // Spostato subito sotto la prima fila

      fill(255);
      noStroke();
      rect(squareX4, squareY4, squareSize, squareSize);

      // Tavola 2 (terzo quadrato)
      let squareX2_2 = width / 2 + squareSize / 2 + offsetX - (cols * 3 * squareSize + (cols - 1) * spacing) / 2 + squareSize * 1.5;
      let squareY2_2 = squareY3_2 + squareSize; // Spostato subito sotto la prima fila
      let middleX2_2 = squareX2_2 + squareSize / 2;
      let middleY2_2 = squareY2_2 + squareSize / 2;

      fill(255);
      stroke(0);
      rect(squareX2_2, squareY2_2, squareSize, squareSize);

      fill(255); // Bianco
      triangle(squareX2_2, squareY2_2, squareX2_2 + squareSize, squareY2_2, middleX2_2, middleY2_2); // Triangolo superiore
      triangle(squareX2_2 + squareSize, squareY2_2 + squareSize, squareX2_2, squareY2_2 + squareSize, middleX2_2, middleY2_2); // Triangolo inferiore

      fill(0); // Nero
      triangle(squareX2_2 + squareSize, squareY2_2, squareX2_2 + squareSize, squareY2_2 + squareSize, middleX2_2, middleY2_2); // Triangolo destro
      triangle(squareX2_2, squareY2_2 + squareSize, squareX2_2, squareY2_2, middleX2_2, middleY2_2); // Triangolo sinistro
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); // Ridisegniamo quando la finestra viene ridimensionata
}
