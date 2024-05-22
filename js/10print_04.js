let baseColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); // Rimuove i bordi dei quadrati
  baseColor = color(random(255), random(255), random(255)); // Imposta il colore di base casuale
}

function draw() {
  background(255); // Cancella lo schermo a ogni frame
  let step = 5; // Dimensioni delle celle
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      let c = lerpColor(baseColor, color(255), random()); // Calcola una sfumatura del colore di base
      fill(c);
      rect(x, y, step, step);
    }
  }
}

function mousePressed() {
  baseColor = color(random(255), random(255), random(255)); // Cambia il colore di base al click del mouse
}