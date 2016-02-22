var Particle = function(position, mass) {
  this.position = position.copy();
  this.velocity = createVector(random(-2, 2), random(-2, 0));
  this.acceleration = createVector();
  this.mass = mass;

  Particle.prototype.applyForce = function(f) {
    this.acceleration.add(p5.Vector.div(f, this.mass));
  }

  Particle.prototype.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);

  }

  Particle.prototype.render = function() {
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, 5 * this.mass, 5 * this.mass);
  }

  Particle.prototype.isDead = function() {
    return this.position.y > height || this.position.x > width || this.position.x < 0;
  }


}