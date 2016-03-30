var speed = 15;
var n = 120;

var numgenerations = [];
var angle = [];
var max_xmargin = [];
var max_ymargin = [];
var prev = [];
var pos = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  
  for (var i = 0; i < n; i++) {
    angle.push(map(i, 0, n, 0, TWO_PI));
    numgenerations.push(int(random(3200, 7800)));    
    max_xmargin.push(random(120, 240));
    max_ymargin.push(random(120, 240));
    pos.push(createVector(0, 0));
    prev.push(createVector(0, 0));
  }
}

function draw() {
  translate(width/2, height/2);

  for (var i = 0; i < n; i++) {
    for (var s = 0; s < speed; s++) {
      var t = map(speed * frameCount + s, 0, numgenerations[i], 0, 1);
      if (t > 1.0) continue; 
      var rad = lerp(0, 400, t);
      pos[i].x = rad * cos(angle[i]) + lerp(0, max_xmargin[i], t) * (noise(15*i+0.001*(frameCount*speed+s)) - 0.5);
      pos[i].y = rad * sin(angle[i]) + lerp(0, max_ymargin[i], t) * (noise(25*i+0.001*(frameCount*speed+s)) - 0.5);
      stroke(255, lerp(20, 0, t));      
      strokeWeight(lerp(6, 0, t));
      stroke(255, lerp(20, 0, t));      
      strokeWeight(lerp(6, 0, t));
      line(prev[i].x, prev[i].y, pos[i].x, pos[i].y);
      prev[i].x = pos[i].x;
      prev[i].y = pos[i].y;
    }
  }
}

