<<<<<<< HEAD
p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false;

function setup() {
  createCanvas(1240, 1754);
}

function keyPressed(){

  if (key == 's'){
    bDoExportSvg = true;
  }
}




function draw() {
  background(220);
  if (bDoExportSvg){
    beginRecordSVG("moire.svg");
  }

 
  for(let i =0;i<1000;i+=10){
    noFill()
    strokeWeight(0.5)
    ellipse(350,250,i,i)

    noFill(1)
    strokeWeight(.5)
    ellipse(200,200,500-i,500-i)

    noFill()
    triangle(40, 40, 40+i, 80+i, 100-i, 30+i)
  }

  if (bDoExportSvg){
    endRecordSVG();
    bDoExportSvg = false;
  }

}



=======
// This is the sketch.js file.
// Press 's' to export the SVG.
// Note that p5.js is used in 'global mode'. 

p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 

function setup(){
  // These canvas dimensions are 8.5"x11" at 96 dpi
  createCanvas(816, 1056); 
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  // Draw stuff here, such as:
  line(0,0, mouseX, mouseY); 

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}
>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38
