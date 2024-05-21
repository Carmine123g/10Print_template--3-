let x = 0;
let y = 0;
let size = 50; // Definisci la dimensione dei triangoli

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(2);
  if (random(1) < 0.5) {
    // Disegna un triangolo con vertici in alto a sinistra, in basso a sinistra e in basso a destra
    triangle(x, y, x, y + size, x + size, y + size);
  } else {
    // Disegna un triangolo con vertici in alto a sinistra, in alto a destra e in basso a destra
    triangle(x, y, x + size, y, x + size, y + size);
  }
  x += size;
  if (x > width) {
    x = 0;
    y += size;
    if (y > height) {
      noLoop(); // Interrompi il disegno una volta riempito il canvas
    }
  }
}
