function setup() {
  createCanvas(800, 800);
  background(255);
  stroke(0, 15);
  noFill();
  noLoop();
}

function draw() {
  translate(width/2, height/2);
  for (var t=0; t<1000; t++){
    beginShape();
    for (var i=0; i<200; i++) {
      var ang = TWO_PI * (t/1000 + i/200);
      var rad = 500 * noise(i*0.01, t*0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      curveVertex(x, y);
    }
    endShape(CLOSE);
  }  
}