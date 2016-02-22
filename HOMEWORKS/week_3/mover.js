
function Pendulum(origin_, r_) {
  
  this.origin = origin_;
  
  this.position = createVector();
  this.r = r_;
  this.angle = PI/1.2;
  
  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = 0.995;   // Arbitrary damping
  this.ballr = 28.0;      // Arbitrary ball radius

  this.dragging = false;
  

  this.go = function() {
    this.update();
    this.drag();    // for user interaction
    this.display();
  }

  // Function to update position
  this.update = function() {
    // As long as we aren't dragging the pendulum, let it swing!
    if (!this.dragging) {
      var gravity = 0.2;                                               // Arbitrary constant
      this.aAcceleration = (-.5 * gravity / this.r) * sin(this.angle);  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
      this.aVelocity += this.aAcceleration;                            // Increment velocity
      this.aVelocity *= this.damping;                                  // Arbitrary damping
      this.angle += this.aVelocity; 
      
// Increment angle
    }
  }

  this.display = function() {
    this.position.set(this.r*sin(this.angle), this.r*cos(this.angle), 0);         // Polar to cartesian conversion
    this.position.add(this.origin);                                               // Make sure the position is relative to the pendulum's origin

    stroke(200,0,100);
    strokeWeight(.2);
    // Draw the arm
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    noStroke();
    ellipseMode(CENTER);
    fill(180,0,100,20);
    if (this.dragging) fill(200);
    // Draw the ball
    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  }


  // The methods below are for mouse interaction

  // This checks to see if we clicked on the pendulum ball
  this.clicked = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.ballr) {
      this.dragging = true;
    }
  }

  // This tells us we are not longer clicking on the ball
  this.stopDragging = function() {
    this.aVelocity = 0; // No velocity once you let go
    this.dragging = false;
  }

  this.drag = function() {
    // If we are draging the ball, we calculate the angle between the 
    // pendulum origin and mouse position
    // we assign that angle to the pendulum
    if (this.dragging) {
      var diff = p5.Vector.sub(this.origin, createVector(mouseX, mouseY));      // Difference between 2 points
      this.angle = atan2(-1*diff.y, diff.x) - radians(90);                   // Angle relative to vertical axis
    }
  }
}


