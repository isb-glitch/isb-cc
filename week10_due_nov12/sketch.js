let sounds = [null,null,null,null]
let names = [' synth', 'crunch', 'drums', 'scratch']
let keys = ['a', 's', 'd', 'f'];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textAlign(CENTER,CENTER);
  textSize(20);
  noStroke();

  bg = await loadImage('bg.jpg');
sounds[0] = await loadSound('1.738820__mariannadeoliveira__swell-with-light-piano.wav');
sounds[1] = await loadSound('2.crunchy lick.wav');
sounds[2] = await loadSound('3.low tempo drum.wav');
sounds[3] = await loadSound('4.610676__liftpizzas__scratch-4x.wav');
}


function draw() {
  background(220);
 
  let keyWidth = width / sounds.length;
  for (let i = 0; i < sounds.length; i++) {
    let x = i * keyWidth;
    let y = keyWidth *1.5;
    let hues = [55, 195, 330, 25];
    if (sounds[i].isPlaying()){
      y = y -10;
      fill(hues[i], 35, 100);
    } else {
      fill(hues[i], 70, 95);
    }

    rect(x+6, y, keyWidth - 12, keyWidth * 2,20);
  
    fill(0,0,100);
    text(keys[i], x + keyWidth / 2, y + keyWidth* 0.7);
    textSize(12);
    text(names[i], x + keyWidth / 2, y + keyWidth * 1.4);
    textSize(20);
  }
}

function keyPressed() {

  userStartAudio();
  if (keyIsDown('a')) {
    if (!sounds[0].isPlaying()) {
      sounds[0].play();
    }
  } else if (keyIsDown('s')) {
    if (!sounds[1].isPlaying()) {
      sounds[1].play();
    }
  } else if (keyIsDown('d')) {
    if (!sounds[2].isPlaying()) {
      sounds[2].play();
    }
  } else if (keyIsDown('f')) {
    if (!sounds[3].isPlaying()) {
      sounds[3].play();
    }
  }
}