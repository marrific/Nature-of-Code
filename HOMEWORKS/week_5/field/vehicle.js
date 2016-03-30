// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// The "Vehicle" class

function Vehicle(x, y, mass, ms, mf,colR,colG,colB,opa) {
  this.position = createVector(x, y);
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.r = 4;
  this.dia = random(2, 14);
  this.mass = mass;
  this.maxspeed = ms || 4;
  this.maxforce = mf || 0;
 

 // console.log(this.seekMouse.desired) 


 this.colR = colR;
  this.colG = colG;
  this.colB = colB;
  this.opa = opa;
  this.col = color(this.colR,this.colG,this.colB, this.opa)
  


  this.run = function() {
    this.update();
    this.borders();
    this.display();
  };

  // Implementing Reynolds' flow field following algorithm
  // http://www.red3d.com/cwr/steer/FlowFollow.html
  this.follow = function(flow) {
    // What is the vector at that spot in the flow field?
    var desired = flow.lookup(this.position);
    // Scale it up by maxspeed
    desired.mult(this.maxspeed);
    // Steering is desired minus velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    this.applyForce(steer);
  };

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);

    this.acceleration.add(f);
  };


  this.separate = function(vehicles) {
    var desiredseparation = this.r * 5;
    var sum = createVector();
    var count = 0;
    // For every boid in the system, check if it's too close
    for (var i = 0; i < vehicles.length; i++) {
      var d = p5.Vector.dist(this.position, vehicles[i].position);
   
   //console.log(d)
   
     
// if (d >4 && d < 8) {
//     this.colR = 0;
//   this.colG = 2;
//   this.colB = 55;
   
   
// }
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        var diff = p5.Vector.sub(this.position, vehicles[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        sum.add(diff);
        count++; // Keep track of how many
      }
      
      
      
    }
    // Average -- divide by how many
    if (count > 0) {
      sum.div(count);
      // Our desired vector is the average scaled to maximum speed
      sum.normalize();
      sum.mult(this.maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      var steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  };









this.seekMouse = function(target) {
    var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target

    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus velocity
    var steer = p5.Vector.sub(desired,this.velocity);
    steer.limit(this.maxforce);  // Limit to maximum steering force
    return steer;
    
  //console.log(desired)               < WHY ?
  

    
  };
  




this.applyBehaviors = function(vehicles) {

   //  var separateForce = this.separate(vehicles);
     var seekForce = this.seekMouse(createVector(mouseX,mouseY));

     //separateForce.mult(slider1.value());
     seekForce.mult(22);

    // this.applyForce(separateForce);
     this.applyForce(seekForce);
  };










  // Method to update location
  this.update = function() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  };

  // Wraparound
  this.borders = function() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  };

  this.display = function() {
    // Draw a triangle rotated in the direction of velocity
    var theta = this.velocity.heading() + PI / 2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    noStroke();
    stroke(this.col)
    noFill();
    ellipse(0, 0, this.dia, this.dia);
    pop();
  };
}