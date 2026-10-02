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
  

  if (bDoExportSvg){
    beginRecordSVG("moire.svg");
  }

  // Draw stuff here, such as:
  // line(0,0, mouseX, mouseY);
  for(let i=0; i<width; i+=20){
    for(let j=0; j<height; j+=4){
      rect(i,j, 9);
    }
  }

  translate (width/2, height/2);
  for(let i=0; i<width; i+=20){
    for(let j=0; j<height; j+=4){
      circle(i,j, 2);
    }
  }



  if (bDoExportSvg){
    endRecordSVG();
    bDoExportSvg = false;
  }


