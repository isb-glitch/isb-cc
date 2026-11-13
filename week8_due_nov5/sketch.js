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