//https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.5;
let ellipseRate = 2;
let rectRatio = 1;
let strokeW = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);

  if(random(1)<randomValue){
    line(x,y,x+spacing,y+spacing);
  }else{
    line(x,y+spacing,x+spacing,y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}
