function Mover(position, nass) {

  this.position = position;
  this.velocity = createVector(0,0);
  this.mass = mass;
  this.acceleration = createVector(createVector(0,0));
  
  this.applyForce = function(force) {
    
    this.acceleration.add (p5.Vector.div(force, this.mass)); //+= doesnt work with vectors
    
    
  }

  this.update = function() {

    
    //this.velocity.limit(5);
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);

  }

  this.bounce = function() {

    if (this.position.y > height || this.position.y < 0) {

      this.velocity.y *= -1;
    }

  }

  this.render = function() {

    ellipse(this.position.x, this.position.y, 50, 50);

  }


}
