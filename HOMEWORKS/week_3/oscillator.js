



var Oscillator = function() {
  this.angle = createVector();
  this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  this.amplitude = createVector(random(60, 90 ), random(20, 60));


  this.oscillate = function() {
    this.angle.add(this.velocity);
  };

  this.display = function(m) {
    var r = 200;
var b = random(100,120);
    
    var x = cos(this.angle.x) * this.amplitude.x;
    var y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(m.position.x, m.position.y);
   
    noStroke();
    fill(r, 0,b);
    line(0, 0, x, y);
    noStroke();
    ellipse(x, y, 5, 5);
    pop();

   // this.amplitude.add(m.position);

  };
}