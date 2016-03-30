function setup() {
  createCanvas(800, 800);
  smooth();
  background(0);
  ellipseMode(CENTER);
}

function draw() {
  stroke(255,20);
  noFill();
  
  push();
  translate(width/2,height/2);
  rotate(map(sin(0.001*frameCount),-4, 1, 0, PI));
  rect(0,0,720,random(70));
  pop();
}