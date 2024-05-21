let size =3; // Dimensione dei quadrati
let positions = []; // Array per memorizzare le posizioni possibili
let index = 0; // Indice per tenere traccia del quadrato corrente
let startTime; // Tempo di inizio del disegno
let duration = 10; // Durata in secondi

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); // Rimuove i bordi dei quadrati
  // Calcola tutte le posizioni possibili per i quadrati
  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      positions.push({ x: x, y: y });
    }
  }
  shuffle(positions, true); // Mescola le posizioni
  frameRate(30); // Imposta il frame rate a 30 frame per secondo per velocizzare il disegno
  startTime = millis(); // Registra il tempo di inizio
}

function draw() {
  let currentTime = (millis() - startTime) / 100000; // Tempo trascorso in secondi
  let squaresPerSecond = positions.length / duration; // Numero di quadrati da disegnare al secondo
  let squaresToDraw = currentTime * squaresPerSecond; // Numero di quadrati da disegnare fino ad ora

  for (let i = 0; i < squaresToDraw; i++) {
    if (index < positions.length) {
      let pos = positions[index];
      let col = getColor(index);

      // Imposta il colore del quadrato
      fill(col);
      rect(pos.x, pos.y, size, size);

      index++;
    } else {
      noLoop(); // Ferma il disegno quando tutti i quadrati sono stati disegnati
      break; // Esci dal ciclo
    }
  }
}

// Funzione per ottenere il colore basato sulla posizione
function getColor(index) {
  let brightness = map(index, 0, positions.length, 100, 255);
  return color(random(brightness), random(brightness), random(brightness));
}
