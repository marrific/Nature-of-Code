var movers = [];

var s= 1;

// Liquid
var liquid;

function setup() {
  // Must be before createGraphics
  var text = createP("click mouse to reset");

  createCanvas(530, 800);
  reset();
  // Create liquid object
  liquid = new Liquid(0, 620, width, height, 0.1,0,600);

  // Here we call methods of each element to set the position and id, try changing these values.
  text.position(10, 365);

}

function draw() {
  background(127);


  var current = createVector(0.4, 0);

  
  liquid.display();
  
  console.log(s);


  for (var i = 0; i < movers.length; i++) {

    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      var dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
      movers[i].applyForce(current);
      //movers[i].applyForce(current);
    }

    // Gravity is scaled by mass here!
    var gravity = createVector(0, 0.1 * movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }

}


// Not working???
function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Mover(random(0.5, 3), 40 + i * 70, 0);
  }
}