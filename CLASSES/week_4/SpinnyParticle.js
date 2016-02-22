var SpinnyParticle = function(position, mass) {

  Particle.call(this, position, mass);
  this.angle = 0;
  this.aVelocity = 0.01;
  this.aAcceleration = .001;

  this.updaet = function() {

    this.angle += this.aVelocity;
    this.aVelocity += this.aAcceleration;
    if (this.angle > TWO_PI * 3 || this.angle < 0) {
      this.aVelocity *= -1;
      this.aAcceleration *= -1;
    }


  }

  this.render = function() {
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    rect(0, 0, 50, 50);
    pop();




  }
}

SpinnyParticle.prototype = Object.create(AttractionParticle.prototype);
SpinnyParticle.constructor = SpinnyParticle;