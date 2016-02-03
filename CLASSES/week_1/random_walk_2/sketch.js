var x, y;
var t = 0;

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  x = width / 2;
  y = height / 2;

}

function draw() {
  //Calculate random walk

  var choice = floor(random(4));

  x = x + random(-1, 1);
  y = y + random(-1, 1);


  t += 1
  x = noise(t) * width;
  y = noise(t*10) * height;
  noStroke();
  fill(50, 255, 0, 10);
  ellipse(x, y, 50, 50);

  x++;
  y++;

}