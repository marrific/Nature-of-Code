// p5.js looping star
var n, p, s1, s2, t, ang;
function setup() {
createCanvas(800, 800);
stroke(0, 120);
strokeWeight(2);
fill(0, 15);
n=int(random(12, 20));
p=[];
ang=0;
for (var i=0; i<n; i++) {
var a = lerp(0, TWO_PI, i/n);
p.push({x:0.5*width*cos(a), y:0.5*height*sin(a)});
} 
do {
s2 = [int(random(1,n)), int(random(1,n)), int(random(1,n))];
} while (n%s2[2]===0);
next();
}
function next() {
t=0;
s1=s2;
do {
s2 = [int(random(1, n)), int(random(1, n)), int(random(1, n))];
} while (n % s2[2] === 0);
}
function draw() {
background(255); 
translate(width/2, height/2);
rotate(ang);
ang+=0.01;
var i1=[0,0,0,0];
var i2=[0,0,0,0];
do {
i1 = [i1[0], (i1[0]+s1[0])%n, (i1[0]+s1[1])%n, (i1[0]+s1[2])%n];
i2 = [i2[0], (i2[0]+s2[0])%n, (i2[0]+s2[1])%n, (i2[0]+s2[2])%n];
var q=[];
beginShape();
for (var i=0; i<4; i++) {
q.push({x:lerp(p[i1[i]].x, p[i2[i]].x, t), y:lerp(p[i1[i]].y, p[i2[i]].y, t)});
curveVertex(q[i].x, q[i].y);
}
endShape(CLOSE);
bezier(q[0].x, q[0].y, q[1].x, q[1].y, q[2].x, q[2].y, q[3].x, q[3].y);
i1[0] = i1[2];
i2[0] = i2[2];
} while (i2[0] !== 0 && i1[0] !== 0); 
t += 0.01;
if (t >= 1.0) {
next();
}
}