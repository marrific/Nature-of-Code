function ParticleSystem(origin) {
  this.origin = origin;
  this.particles = [];


  this.addParticle = function() {
    if(random(1) > .5){
    
    this.particles.push(new AttractionParticle(this.origin, random(1)));
  }
  else{
  this.particles.push(new SpinnyParticle(this.origin,random(1)));
  }
}
  this.run = function() {
    for (var i = 0; i < this.particles.length; i++) {
      var gravity = createVector(0, 0.05 * this.particles[i].mass);
      this.particles[i].applyForce(gravity);
      
      for(var j = 0; j < this.particles.length; j++) {
        if(i!=j) {
          var force = this.particles[j].attract(this.particles[i]);
          this.particles[i].applyForce(force);
        }
      }
      
      this.particles[i].update();
      this.particles[i].render();

      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}