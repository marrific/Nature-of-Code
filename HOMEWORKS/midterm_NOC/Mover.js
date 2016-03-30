function Mover(mass, x, y) {
 this.mass = mass;
 this.location = createVector(x, y);
 this.velocity = createVector(random(-1, 1), random(-1, 1));
 this.acceleration = createVector(0, 0);

 this.run = function() {

  this.update();
  this.display();
 }

 this.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
 }


 this.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.div(1.01);
  this.location.add(this.velocity);
  this.acceleration.mult(0);
 }

 this.display = function() {
  noStroke();
  // fill(0, 255, 0, 40);
  
  fill(this.location.y/2, this.location.x/2, this.location.x / 20, 180);
  ellipse(this.location.x, this.location.y, 2.1, 2.1);
 }
}