
var debug = false;

// Flowfield object
var flowfield;
// An ArrayList of vehicles
var vehicles = [];

function setup() {
 background(0);

  createCanvas(800, 800);
  // Make a new flow field with "resolution" of 16
  flowfield = new FlowField(20);
  // Make a whole bunch of vehicles with random maxspeed and maxforce values
  for (var i = 0; i < 120; i++) {
    vehicles.push(new Vehicle(random(width), random(height), random(-2, 5), random(2, 10), random(0.1, 0.5),i,140+i,155+i*2,255- i));
  }
}

function draw() {
 background(51,14);
  // Display the flowfield in "debug" mode
  if (debug) flowfield.display();
  // Tell all the vehicles to follow the flow field

 // var gravity = createVector(0, 0.1*vehicles[i].mass);

  for (var i = 0; i < vehicles.length; i++) {
      var gravity = createVector(0, 0.1*vehicles[i].mass);

    vehicles[i].applyForce(gravity);
    vehicles[i].follow(flowfield);
    vehicles[i].run();
    vehicles[i].separate(vehicles);
  
    if (mouseIsPressed) {
      vehicles[i].applyBehaviors();
      
      
    }
    
    
  }

}

 

 
function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}

// Make a new flowfield
function mousePressed() {
  flowfield.init();
}
