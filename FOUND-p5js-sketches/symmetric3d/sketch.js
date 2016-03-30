function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  var t1x = 0;//map(sin(0.012 * frameCount + 5), -1, 1, -200, 200);
  var t1y = map(sin(0.011 * frameCount + 10), -1, 1, -200, 200);
  var t1z = 0;//map(sin(0.014 * frameCount + 30), -1, 1, -200, 200);
  var t2x = map(sin(0.0013 * frameCount + 15), -1, 1, -200, 200);
  var t2y = 0;//map(sin(0.009 * frameCount + 20), -1, 1, -200, 200);
  var t2z = map(sin(0.015 * frameCount + 35), -1, 1, -200, 200);
  
  var xang = map(sin(0.008 * frameCount + 40), -1, 1, 0, TWO_PI);
  var sx = map(sin(0.046 * frameCount + 25), -1, 1, 0, 200);
  var sy = map(sin(0.018 * frameCount + 55), -1, 1, 0, 200);
  var sz = map(sin(0.021 * frameCount + 65), -1, 1, 0, 200);

  translate(0, 0, -200);
  rotateY(0.008*frameCount);

  for (var i=0; i<6; i++) {
    push();
    rotateZ(map(i, 0, 6, 0, TWO_PI));
    translate(t1x, t1y, t1z);
    for (var j=0; j<5; j++) {
      push();
      rotateY(map(j, 0, 5, 0, TWO_PI));
      translate(t2x, t2y, t2z);
      box(sx, sy, sz);
      pop();
    }
    pop();
  }  
}