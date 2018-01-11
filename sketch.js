var value = 0;
var threshold = 1;

function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    frameRate(12);
}

function draw() {
  setShakeThreshold(threshold);
  background(255-value);
    fill('black');
    textSize(20);
    textAlign(CENTER);
    text('Shake it',width/2,40);
    fill('white');
    ellipse(value,threshold,40);

}

function deviceShaken() {
  value ++;
  threshold += 3;
}