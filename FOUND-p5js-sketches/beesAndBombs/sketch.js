// attempt to reverse engineer bees and bombs in p5
// http://beesandbombs.tumblr.com/post/121790476454/fundots-bees-bombs-also-on-twitter-insta

var numRows;
var numCirclesPerRow;
var rad;
var speed;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  background(0);
  
  numRows = 30;
  numCirclesPerRow = 30;
  rad = 20;
  speed = 0.05;
}

function draw() {
  background(0);
      
  for (var r=0; r<numRows; r++) {
    for (var i=0; i<numCirclesPerRow; i++) {
      
      var cx = map(i, 0, numCirclesPerRow, -100, width+100);
      var cy = map(r, 0, numRows, -100, height+100);
      
      var distFromCenter = dist(cx, cy, width/2, height/2);
      var angle = frameCount*speed + distFromCenter*0.02 + i*0.1;
      
      var x = cx + rad * cos(angle);
      var y = cy + rad * sin(angle);
      
      var offset = map(frameCount, 0, TWO_PI/speed, 0, 255);
      var h_ = (distFromCenter + offset) % 255;
      var s_ = 200;
      var b_ = 200;
      
      fill(h_, s_, b_);
      ellipse(x, y, 12, 12);
    }  
  }
}