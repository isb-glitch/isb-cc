
// MY SOUND KEYBOARD - Week 10
// A / S / D / F = play sounds
// SPACE = pause or resume
// Only one sound plays at a time

let scratch;
let beat;
let lick;
let synth;

let currentSound = null;
let activeKey = '';

function preload() {
  scratch = loadSound('610676__liftpizzas__scratch-4x.wav');
  beat = loadSound('low tempo drum.wav');
  lick = loadSound('crunchy lick.wav');
  synth = loadSound('738820__mariannadeoliveira__swell-with-light-piano.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#3a071c');

  fill(255);
  noStroke();
  textSize(24);
  text('elevator music', width / 2, 50);

  textSize(18);
  fill(175);
  text('press (to) play', width / 2, 75);

  drawKey('a', 'scratch', 55, '#e8ff9c');
  drawKey('s', 'beat', 155, '#411c54');
  drawKey('d', 'lick', 255, '#b33535');
  drawKey('f', 'synth', 355, '#95c3f8be');
}


function keyPressed() {
  userStartAudio();

  // SPACE pauses or resumes
  if (keyCode === 32) {
    if (currentSound) {

      if (currentSound.isPlaying()) {
        currentSound.pause();
      } else if (currentSound.isPaused()) {
        currentSound.play();
      }
    }

    return false;
  }
}
function drawKey(letter, name, x, keyColor) {

  if (activeKey === letter && currentSound &&
      currentSound.isPlaying()) {
    fill(keyColor);
  } else {
    fill(65);
  }

  noStroke();
  rect(x, 110, 90, 70, 10);

  fill(255);
  textSize(28);
  text(letter, x + 45, 145);

  textSize(13);
  text(name, x + 45, 199);
}

function keyPressed() {
  userStartAudio();
 
  if (key === 'a' || key === 'A') {
    playSound(scratch, 'a');
  }

  if (key === 's' || key === 'S') {
    playSound(beat, 's');
  }

  if (key === 'd' || key === 'D') {
    playSound(lick, 'd');
  }

  if (key === 'f' || key === 'F') {
    playSound(synth, 'f');
  }
}

// Stop previous sound and play new sound
function playSound(newSound, letter) {

  if (currentSound) {
    currentSound.stop();
  }

  currentSound = newSound;
  activeKey = letter;

  currentSound.play();
}