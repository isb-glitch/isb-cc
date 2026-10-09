let position = 0;
let speed = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightpink');

}


function draw() {
//background('lightpink');
//let s = second();
//let m = millis();

//speed * s * 0.01;
//position += speed;

//console.log('second is' + s);
//console.log('second is' + speed);
//console.log('millis is' + m);

//position = s * 10;
//let x = frameCount % position

//x % 10; //0 + 1



let _minute = minute(); // 0 - 59

let mappedMinute = map( second() %_minute, 0, _minute, 0, width);
fill(255,255,255,second() * 10);
circle(mappedMinute + (frameCount & _minute), height/2, 100);

}
