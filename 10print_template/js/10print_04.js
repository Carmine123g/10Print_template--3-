function setup() {
    createCanvas(windowWidth, windowHeight);
   
  }
  
  function draw() {
    let step = 50; // Dimensioni delle celle
    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        if (random(1) < 0.5) {
          fill(random(0, 255), random(0, 255)); // Colore casuale fluorescente
          rect(x, y, step, step);
        } else{fill(random(0, 255), random(200, 255)); // Colore casuale fluorescente
          fill(x + step / 2, y + step /2, step, step); 
          
        }
          
      }
      
    }
  }
  