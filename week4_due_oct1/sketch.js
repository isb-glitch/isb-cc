// This is the sketch.js file.
// Press 's' to export the SVG.
// Note that p5.js is used in 'global mode'.

p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

function setup(){
  // These canvas dimensions are 8.5'x11' at 96 dpi
  createCanvas(816, 1056);

  //randomSeed(100);
  //noLoop();
}

function keyPressed(){
  
  if (key == 's'){
    bDoExportSvg = true;
 }
}

function draw(){
  background(255);
}







//call drawCircles here
drawCircles(3);
drawLines( xOff );

if (bDoExportSvg){
  endRecordSvg();
  bDoExportSvg = false;
}


//draws (3) circles
//drawCircles
function drawCircles(num){
  for(let i = 0; i <= num; i++){
    noFill();
    circle(width/2, height/2, i * 100);
  }
}


function drawLines( lineOffsetX ){
  // Draw stuff here, such as:
  for(let x = 0; x < width; x+=10){
    line(x + lineOffsetX, 0, x * 2, height);
  }
}






