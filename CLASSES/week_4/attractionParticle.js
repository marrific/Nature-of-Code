var AttractionParticle = function(position, mass) {
  Particle.call(this, position, mass);
  this.G = .01;
  
  AttractionParticle.prototype.attract = function(other) {
    var force = p5.Vector.sub(this.position, other.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    var strength = this.G*this.mass*other.mass / distance*distance;
    force.setMag(strength);
    return force;
  }
  
}

AttractionParticle.prototype = Object.create(Particle.prototype);
AttractionParticle.constructor = AttractionParticle;