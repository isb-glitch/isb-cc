//FLOWER BLOOM

let handPose;
let video;
let predictions = [];

let numPetals = 18;
let angle = 360 / numPetals;
let petalSize = 240;
let bloomSize = 40;
let threshold = 100;

async function setup() {
  // Create the canvas
  createCanvas(880, 600);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  angleMode(DEGREES);


  print("Loading HandPose...");
  handPose = await ml5.handPose();
  console.log("HandPose loaded!");

  handPose.detectStart(video, gotHands);
}

function gotHands(results) {
  predictions = results;
}

function draw() {
  background('#1a006f');
  drawObject();
}
//flower
function drawObject() {
  let targetSize = 0;

  if (predictions.length > 0) {
  let prediction = predictions[0];

      let thumbTip = prediction.keypoints[4];
      let pinkyTip = prediction.keypoints[20];

      
      let distance = dist(
        thumbTip.x,
        thumbTip.y,
        pinkyTip.x,
        pinkyTip.y
      );

      // flower blooms when hand opens
      if (distance > threshold) {
        targetSize = 200;
      }
  }


  translate(width / 2, height / 2);

  noStroke();
  fill('#a07bff9d');

  bloomSize = lerp(bloomSize, targetSize, 0.1);

  // Draw each petal around the flower
  for (let i = 0; i < numPetals; i += 1) {
    circle(bloomSize, 0, petalSize);
    rotate(angle);
  }
}

// //WAVE PULL 


// let handPose;
// let video;
// let predictions = [];


// let p = []; //p for particles
// const num = 100; //# of points on screen
// const noiseScale = 0.01;
// var mySound;
// var smoothLevel = 0;
// var counter = 0;

// function setup() {

//   createCanvas(880, 600);
//   for(let i = 0; i < num; i++){
//     p.push(createVector(random(width), random(height)));
    
//     video = createCapture(VIDEO);
//     video.size(width, height);
//     video.hide();

//     handPose.detectStart(video, gotHands);
// }

// function gotHands(results) {
//   predictions = results;
// }
//   }
//   // stroke(100);
//   amp = new p5.Amplitude();

// function draw() {
//   background('#0414559b');
//   for(let i = 0; i < num; i++){
//     let c = p[i];
//     point(c.x, c.y)
//     // strokeWeight(2.3);
//     strokeWeight(random([0.8, 1.1, 1.4]));
// //  randomly change colors every 24 times the function is called
    
//     if(counter%24 == 0){
//        stroke(random(["#ffffff", "#80bad9", "#3D5588", "#3255A4", "#0074A2","#235BA8", "#375E77"]));
//     }
//     counter++;
//     print(counter);
//     stroke("#80bad9");

//   }
// }

// //check if the particles are on screen
// function onScreen(v){
//   return v.x >=0 && v.x <=width && v.y >=0 && v.y <=height;
// }

// //Wave Try Again

// let handPose;
// let video;
// let predictions = [];

// let p = []; //p for particles
// const num = 100; //# of points on screen
// const noiseScale = 0.01;
// var mySound;
// var smoothLevel = 0;
// var counter = 0;

// async function setup() {
//   // Create the canvas
//   createCanvas(880, 600);

//   video = createCapture(VIDEO);
//   video.size(width, height);
//   video.hide();

//   angleMode(DEGREES);


//   print("Loading HandPose...");
//   handPose = await ml5.handPose();
//   console.log("HandPose loaded!");

//   handPose.detectStart(video, gotHands);
// }

// function gotHands(results) {
//   predictions = results;
// }

// function draw() {
//   background('#0414559b');
//   drawObject();
// }


// //waves
// function draw() {
//   background('#0414559b');
//   for(let i = 0; i < num; i++){
//     let c = p[i];
//     point(c.x, c.y)
//     // strokeWeight(2.3);
//     strokeWeight(random([0.8, 1.1, 1.4]));
// //  randomly change colors every 24 times the function is called
    
//     if(counter%24 == 0){
//        stroke(random(["#ffffff", "#80bad9", "#3D5588", "#3255A4", "#0074A2","#235BA8", "#375E77"]));
//     }
//     counter++;
//     print(counter);
//     stroke("#80bad9");

//   }

//   if (predictions.length > 0) {
//   let prediction = predictions[0];

//       let thumbTip = prediction.keypoints[4];
//       let pinkyTip = prediction.keypoints[20];

      
//       let distance = dist(
//         thumbTip.x,
//         thumbTip.y,
//         pinkyTip.x,
//         pinkyTip.y
//       );

//       // tides pull when hand opens
//       if (distance > threshold) {
//         targetSize = 200;
//       }
//   }


//   translate(width / 2, height / 2);

//   noStroke();
//   fill('#a07bff9d', );

//   waveSize = lerp(waveSize, targetSize, 0.1);

//   // Draw each petal around the flower
//   for (let i = 0; i < numPetals; i += 1) {
//     circle(waveSize, 0, waveHeight);
//     rotate(angle);
//   }
// }