var t1x, t1y, t1z;
var t2x, t2y, t2z;
var t1x2, t1y2, t1z2;
var t2x2, t2y2, t2z2;

var xang, sx, sy, sz;
var xang2, sx2, sy2, sz2;
  
function setup() {
  createCanvas(800, 800, WEBGL);
  
  t1x2 = random(-200, 200);
  t1y2 = random(-200, 200);
  t1z2 = random(-200, 200);
  t2x2 = random(-200, 200);
  t2y2 = random(-200, 200);
  t2z2 = random(-200, 200);
  t1x = 0;
  t1y = 0;
  t1z = 0;
  t2x = 0;
  t2y = 0;
  t2z = 0;
  
  
  xang2 = random(TWO_PI);
  sx2 = random(200);
  sy2 = random(200);
  sz2 = random(200);
  
  xang = 0;
  sx = 0;
  sy = 0;
  sz = 0;
}

function draw() {
  
  if (frameCount % 10 == 0) {
    var idx = floor(random(10));
    if      (idx == 0) t1x2 = random(-200, 200);
    else if (idx == 1) t1y2 = random(-200, 200);
    else if (idx == 2) t1z2 = random(-200, 200);
    else if (idx == 3) t2x2 = random(-200, 200);
    else if (idx == 4) t2y2 = random(-200, 200);
    else if (idx == 5) t2z2 = random(-200, 200);

    else if (idx == 6) xang2 = random(TWO_PI);
    else if (idx == 7) sx2 = random(200);
    else if (idx == 8) sy2 = random(200);
    else if (idx == 9) sz2 = random(200);
  }
  
  t1x = lerp(t1x, t1x2, 0.02);
  t1y = lerp(t1y, t1y2, 0.02);
  t1z = lerp(t1z, t1z2, 0.02);
  t2x = lerp(t1x, t1x2, 0.02);
  t2y = lerp(t1y, t1y2, 0.02);
  t2z = lerp(t1z, t1z2, 0.02);
  
  xang = lerp(xang, xang2, 0.02);
  sx = lerp(sx, sx2, 0.02);
  sy = lerp(sy, sy2, 0.02);
  sz = lerp(sz, sz2, 0.02);
  /*
  var xang = map(sin(0.008 * frameCount + 40), -1, 1, 0, TWO_PI);
  var sx = map(sin(0.046 * frameCount + 25), -1, 1, 0, 200);
  var sy = map(sin(0.018 * frameCount + 55), -1, 1, 0, 200);
  var sz = map(sin(0.021 * frameCount + 65), -1, 1, 0, 200);
  */

  translate(0, 0, -200);
  rotateY(0.01*frameCount);

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