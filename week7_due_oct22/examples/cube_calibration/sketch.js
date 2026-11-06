let pMapper;
<<<<<<< HEAD
let img;
=======
>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // create mapper object
  pMapper = createProjectionMapper(this);
  // loads calibration in the "maps" directory
<<<<<<< HEAD

  quadLeft = pMapper.createQuadMap(400, 400); // quads should be proportionate to the physical object you are projecting onto
  quadRight = pMapper.createQuadMap(400, 400);
  quadTop = pMapper.createQuadMap(400,400);

  pMapper.load("maps/map.json");
  let surfacenum = pMapper.surfaces.length;
  console.log("Number of surfaces: " + surfacenum);

  //loadImage("assets/sponge.png", (loadedImg) => {
    //img = loadedImg;
  //});
=======
  pMapper.load("maps/map.json");
>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38

}

function draw() {
  background(0);

  pMapper.surfaces.forEach((surface, i) => {
    // displaySketch only passes pg to its callback, so wrap it to pass the index too
    surface.displaySketch((pg) => drawCoords(pg, i));
  });
<<<<<<< HEAD

  pMapper.surfaces.forEach((surface, i) => {
    // displaySketch only passes pg to its callback, so wrap it to pass the index too
    surface.displaySketch((pg) => dots(pg)); // this is the function that draws the dots on the surface
  });
  quadLeft.displaySketch((pg) => mySketch(pg))
  
  

}
let myCircle=[]
function mySketch(pg) {//for left quad
  //pg.background('#FFFA00');
  randomSeed(0);
  pg.push();
  pg.fill('#a4a63b');
  pg.noStroke();
  for (let i = 0; i < 60; i++) {
    pg.ellipse(random(width), random(height), random(10,80));
  }
  //image(img, 0, 0);
  pg.circle(mouseX,mouseY,50);
  if(mouseIsPressed){
    myCircle.push([mouseX,mouseY])
  }
  //Plan to draw and how to trace it


}
=======
}

>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38
function keyPressed() {
  switch (key) {
    case 'c':
      pMapper.toggleCalibration();
      break;
    case 'f':
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("maps/map.json");
      break;
    case 'q':
      pMapper.createQuadMap(400,400);
      console.log(pMapper.surfaces);
      break;
    case "s":
      pMapper.save();
      break;
  }
}
function drawCoords(pg, mapIndex) {
  pg.clear();
  pg.push();
  // one color per surface, wrapping around if there are more surfaces than colors
  let colors = [
<<<<<<< HEAD
    color('#FFFA00'),
    color('#FFFA00'),
    color('#FFFA00'),
=======
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38
    color(255, 255, 0),
    color(255, 0, 255),
    color(0, 255, 255)
  ];
  let bgColor = colors[mapIndex % colors.length];
  pg.background(bgColor);
  pg.fill(0);

  for (let i = 0; i < 1000; i += 50) {
    pg.text(i, i, 150);
    pg.text(i, 150, i);
  }
  pg.fill(255);
  pg.ellipse(mouseX, mouseY, 50);
  pg.pop();
<<<<<<< HEAD
}

function mouseClicked() {
  circle(mouseX, mouseY, 50);
}

function dots(pg){
  randomSeed(0);
  pg.clear();
  pg.push();
  pg.background('#FFFA00')
  pg.fill('#c0cd0c');
  pg.noStroke();
  for (let i = 0; i < 60; i++) {
    pg.ellipse(random(width), random(height), random(10,80));
  }
  pg.pop();

=======
>>>>>>> 8ed282bb7430de096fb54e575e18ed68915d8c38
}