var noiseFactor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0, 18);
  noFill();
    
  noiseFactor = 0.001;
}

function draw() {
  var x1 = width * noise(noiseFactor * frameCount, 15);
  var x2 = width * noise(noiseFactor * frameCount, 25);
  var x3 = width * noise(noiseFactor * frameCount, 35);
  var x4 = width * noise(noiseFactor * frameCount, 45);
  var y1 = height * noise(noiseFactor * frameCount, 55);
  var y2 = height * noise(noiseFactor * frameCount, 65);
  var y3 = height * noise(noiseFactor * frameCount, 75);
  var y4 = height * noise(noiseFactor * frameCount, 85);
  
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}