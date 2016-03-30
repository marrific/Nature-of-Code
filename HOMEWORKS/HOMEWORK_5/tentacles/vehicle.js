function Vehicle(x, y,mass,dia) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(-5, 8);
  this.position = createVector(x, y);
  this.r = 6;
  this.maxspeed = 10;
  this.maxforce = 0.5;
  this.lifespan = 255;
  this.mass = mass;
  this.dia= dia;
  

  // Method to update location
  this.update = function() {
    this.dia -= .01;
    if (this.dia < 0) this.dia = 0;
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  this.applyForce = function(force) {
    // We could add mass here if we want A = F / M
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  // A method that calculates a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  this.seek = function(target) {

    var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target

    // Scale to maximum speed
    desired.setMag(this.maxspeed);

    // Steering = Desired minus velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force

    this.applyForce(steer);
  }

  this.display = function(colR,colG,colB) {
    // Draw a triangle rotated in the direction of velocity
    //var theta = this.velocity.heading() + PI / 2;
    
   this.colR = colR;
  this.colG = colG;
  this.colB = colB;
  this.col = color(this.colR,this.colG,this.colB)
   
   
    fill(this.col,this.lifespan);
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    // rotate(theta);
    // beginShape();
     ellipse(0,0,this.dia,this.dia);
    // vertex(0, -this.r * 2);
    // vertex(-this.r, this.r * 2);
    // vertex(this.r, this.r * 2);
    // endShape(CLOSE);
    pop();
  }


  this.isDead = function() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  };


}