var position;
var speed;

function setup() {

  createCanvas(window.innerWidth, window.innerHeight)
  position = createVector(width / 2, height / 2);
  speed = createVector(0, 5);
}

function draw() {
  background(0);


  position.add(speed);

  if (position.y < 0 || position.y > height) {
    // speed.y *= -1;
    // speed *= -1;
    speed.mult(-1);
  }

  ellipse(position.x, position.y, 10, 10)
}