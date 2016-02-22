function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.mouse = createVector(mouseX, mouseY);
  this.acceleration = p5.Vector.sub(this.mouse, this.position);
  this.acceleration.normalize();
  this.acceleration.mult(2);
  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  };
    
    this.checkEdges = function() {
    if (this.position.x > width && this.position.y < 620  ) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    // if (this.position.y > 620 && this.position.x > width) {
    //   this.velocity.y = 1;
    // // this.position.y = height;
    // }
    if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }
    
    
  };

}