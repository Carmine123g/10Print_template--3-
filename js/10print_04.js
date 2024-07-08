let columnCounter = 0;
let rowCounter = 0;
let numberOfReplications = 7; // Numero di volte che vogliamo replicare il disegno
let maxDrawingHeight;
let sideLength = 200; // lunghezza originale del lato del quadrato
let scaleFactor;
let scaledColumnWidth;
let columnSpacing;
let columns;

function setup() {
  createCanvas(windowWidth, windowHeight); // crea un canvas di dimensioni variabili
  maxDrawingHeight = windowHeight / numberOfReplications; // Altezza massima per ogni disegno
  scaleFactor = maxDrawingHeight / (2 * sideLength); // Calcola il fattore di scala per adattare il disegno all'altezza disponibile
  scaledColumnWidth = 2 * sideLength * scaleFactor; // Calcola la larghezza di una colonna ridimensionata
  columnSpacing = scaledColumnWidth / 2; // Imposta lo spazio tra le colonne come metà della larghezza di una colonna ridimensionata
  columns = floor(windowWidth / (scaledColumnWidth + columnSpacing)); // Calcola il numero effettivo di colonne che si adattano alla larghezza dello schermo
  frameRate(2); // Imposta il frame rate a 2 fps (ogni frame dura 0.5 secondi)
}

function draw() {
  background(255); // sfondo bianco
  
  // Disegna le colonne e le righe
  for (let j = 0; j <= columnCounter; j++) {
    for (let i = 0; i < numberOfReplications; i++) {
      if (i <= rowCounter || j < columnCounter) { // Disegna solo fino alla riga e alla colonna attuali
        let offsetY = i * maxDrawingHeight; // Offset verticale per ogni ripetizione
        
        push();
        scale(scaleFactor); // Applica il fattore di scala
        translate(j * (scaledColumnWidth + columnSpacing) / scaleFactor, offsetY / scaleFactor); // Trasla orizzontalmente e verticalmente tenendo conto della scala

        // Primo disegno: quadrato nero con semicerchio bianco sotto
        let squareX1 = 0; // posizione x del primo quadrato
        let squareY1 = 0; // posizione y del primo quadrato
        
        // Calcola la posizione del centro del cerchio in modo che il lato sinistro coincida con il lato sinistro del quadrato
        let circleX1 = squareX1; // posizione x del centro del cerchio
        let circleY1 = squareY1 + sideLength / 2; // posizione y del centro del cerchio
        
        // Disegna un quadrato nero
        fill(0); // riempimento nero
        rect(squareX1, squareY1, sideLength, sideLength); // quadrato posizionato a (0, 0), lato pari a sideLength
        
        // Disegna la metà sinistra del cerchio bianco sotto il quadrato
        fill(255); // riempimento bianco
        noStroke(); // senza contorno
        
        // Calcola gli angoli per disegnare la metà sinistra del cerchio
        let startAngle1 = PI + HALF_PI; // angolo di inizio (180 gradi)
        let endAngle1 = PI + HALF_PI + PI; // angolo di fine (360 gradi)
        
        // Disegna l'arco (metà sinistra del cerchio)
        arc(circleX1, circleY1, sideLength, sideLength, startAngle1, endAngle1, CHORD);
        
        // Secondo disegno: quadrato nero con semicerchio bianco sopra
        let squareX2 = 200; // posizione x del secondo quadrato
        let squareY2 = 0; // posizione y del secondo quadrato
        
        // Calcola la posizione del centro del cerchio in modo che il lato sinistro coincida con il lato sinistro del quadrato
        let circleX2 = squareX2; // posizione x del centro del cerchio
        let circleY2 = squareY2 + sideLength / 2; // posizione y del centro del cerchio
        
        // Disegna un quadrato nero
        fill(0); // riempimento nero
        rect(squareX2, squareY2, sideLength, sideLength); // quadrato posizionato a (200, 0), lato pari a sideLength
        
        // Disegna la metà sinistra del cerchio bianco sopra il quadrato
        fill(255); // riempimento bianco
        
        // Calcola gli angoli per disegnare la metà sinistra del cerchio
        let startAngle2 = HALF_PI; // angolo di inizio (90 gradi)
        let endAngle2 = 3 * HALF_PI; // angolo di fine (270 gradi)
        
        // Disegna l'arco (metà sinistra del cerchio)
        arc(circleX2, circleY2, sideLength, sideLength, startAngle2, endAngle2, CHORD);
      
        // Modifica il rettangolo arancione in un rettangolo nero
        fill(0); // riempimento nero
        rect(0, 200, 400, 200); // rettangolo nero posizionato a (0, 200), larghezza 400, altezza 200
        
        // Copie dei semicerchi sopra il rettangolo arancione
      
        // Terzo disegno: copia della metà inferiore del cerchio rosso in bianco
        fill(255); // riempimento bianco
        arc(300, 0, 200, 200, 0, PI, CHORD);
      
        // Quarto disegno: copia della metà superiore del cerchio in bianco
        arc(300, 200, 200, 200, PI, TWO_PI, CHORD);
      
        // Spostare i semicerchi sopra il rettangolo arancione di 200 unità verso sinistra
        // Quinto disegno: copia della metà inferiore del cerchio rosso in bianco, spostata di 200 unità verso sinistra
        arc(300 - 200, 200, 200, 200, 0, PI, CHORD);
      
        // Sesto disegno: copia della metà superiore del cerchio in bianco, spostata di 200 unità verso sinistra
        arc(300 - 200, 400, 200, 200, PI, TWO_PI, CHORD);
      
        // Cerchio bianco di diametro 200, spostato di 100 unità a sinistra
        let circleX3 = 400; // posizione x del centro del cerchio bianco
        let circleY3 = 300; // posizione y del centro del cerchio
        
        // Disegna la metà sinistra del cerchio colorata di bianco
        fill(255); // riempimento bianco
        arc(circleX3, circleY3, 200, 200, HALF_PI, 3 * HALF_PI, PIE);
        
        // Disegna la metà destra del cerchio colorata di bianco e spostata a sinistra di 200 unità
        arc(circleX3 - 200, circleY3, 200, 200, 3 * HALF_PI, HALF_PI, PIE);

        pop();
      }
    }
  }

  // Aggiorna il contatore per le righe e le colonne
  rowCounter += 1; // Aumenta di una riga ogni frame
  if (rowCounter >= numberOfReplications) {
    rowCounter = 0;
    columnCounter++;
    if (columnCounter >= columns) {
      noLoop(); // Ferma il ciclo draw una volta che tutte le colonne sono state disegnate
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  columnCounter = 0;
  rowCounter = 0;
  maxDrawingHeight = windowHeight / numberOfReplications; // Ricalcola l'altezza massima per ogni disegno
  scaleFactor = maxDrawingHeight / (2 * sideLength); // Ricalcola il fattore di scala per adattare il disegno all'altezza disponibile
  scaledColumnWidth = 2 * sideLength * scaleFactor; // Ricalcola la larghezza di una colonna ridimensionata
  columnSpacing = scaledColumnWidth / 2; // Ricalcola lo spazio tra le colonne
  columns = floor(windowWidth / (scaledColumnWidth + columnSpacing)); // Ricalcola il numero effettivo di colonne
  loop(); // Riprende il ciclo draw in caso di ridimensionamento della finestra
}
