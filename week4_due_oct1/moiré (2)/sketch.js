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

  




  if (bDoExportSvg){
    beginRecordSVG("myOutput.svg");
  }

  // Draw stuff here, such as:
  // line(0,0, mouseX, mouseY);
  noFill();
  stroke(0);
  strokeWeight(0.4);
  for(let i=0; i<width; i+=10){
    for(let j=0; j<height; j+=5){
      circle(i,j, 4);
    }
  }

  translate (3, 10);
  for(let i=0; i <width; i+=8){
  for(let j=0; j<height; j+=4){
    rect(i,j, 8, 3);
  }
}


  if (bDoExportSvg){
    endRecordSVG();
    bDoExportSvg = false;
  }
}

