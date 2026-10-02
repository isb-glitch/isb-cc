function setup() {
  createCanvas(400, 400);
  noLoop();
  randomSeed(100);

}

function draw() {
  //background(220);
  circle(random(width), random(height), 50);

}

function keyPressed(){

  if(key === 'r'){
    redraw();
  }

}