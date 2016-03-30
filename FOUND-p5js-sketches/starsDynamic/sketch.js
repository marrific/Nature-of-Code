var n;
var p;
var s1;
var s2;
var t;
var rotAngle;

function setup() {
  createCanvas(800, 800);
  stroke(0, 120);
  strokeWeight(2);
  fill(0, 15);
  refresh();
}

function refresh(){
  rotAngle = 0;
  n = int(random(12, 20));
  p = [];
  for (var i = 0; i < n; i++) {
    var ang = lerp(0, TWO_PI, i / n);
    p.push({x: 0.5*width*cos(ang), y: 0.5*height*sin(ang)});
  }  
  do {
    s2 = [ int(random(1, n)), int(random(1, n)), int(random(1, n)) ];
  } 
  while (n % s2[2] === 0);
  next();
}

function next() {
  t = 0;
  s1 = s2;
  do {
    s2 = [ int(random(1, n)), int(random(1, n)), int(random(1, n)) ];
  } 
  while (n % s2[2] === 0);
}

function draw() {
  background(255);   
  translate(width/2, height/2);
  rotate(rotAngle);
  rotAngle += 0.01;
  
  var i11 = 0;
  var i21 = 0;
  do {
    var i12 = (i11 + s1[0]) % n;
    var i13 = (i11 + s1[1]) % n;
    var i14 = (i11 + s1[2]) % n;
    
    var i22 = (i21 + s2[0]) % n;
    var i23 = (i21 + s2[1]) % n;
    var i24 = (i21 + s2[2]) % n;
    
    var p1 = {x: lerp(p[i11].x, p[i21].x, t), y: lerp(p[i11].y, p[i21].y, t)};
    var p2 = {x: lerp(p[i12].x, p[i22].x, t), y: lerp(p[i12].y, p[i22].y, t)};
    var p3 = {x: lerp(p[i13].x, p[i23].x, t), y: lerp(p[i13].y, p[i23].y, t)};
    var p4 = {x: lerp(p[i14].x, p[i24].x, t), y: lerp(p[i14].y, p[i24].y, t)};
    
    beginShape();
      curveVertex(p1.x, p1.y);
      curveVertex(p2.x, p2.y);
      curveVertex(p3.x, p3.y);
      curveVertex(p4.x, p4.y);
    endShape(CLOSE);
    
    bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    
    i11 = i13;
    i21 = i23;
  } 
  while (i21 !== 0 && i11 !== 0); 
  
  t += 0.01;
  if (t >= 1.0) {
    next();
  }
}

function mousePressed() {
  refresh();
}