var boxes = [];
var world;

function setup() {
  createCanvas(800,500);
  world = createWorld();
  
  for (var i=0; i<20; i++) {
    //boxes[i] = new Box(random(width), 0);
    boxes.push( new Box(random(width), 0) );
  }
}


function draw() {
  background(0);
  var timeStep = 1.0/30;
  world.Step(timeStep,10,10);
  
  //world.Step(timeStep,velocity, position iterations)
  
  for (var i=0; i<boxes.length; i++) {
    boxes[i].update();
    boxes[i].display();
  }
}


function Box(_x,_y) {
  
  this.x = _x;
  this.y = _y;
  
  this.update = function() {
    this.y++;
  }
  this.display = function() {
    stroke(255);
    fill(255,150);
    rect(this.x, this.y, 10, 10);
  }
  
}


function mousePressed() {
  boxes.push( new Box( mouseX, mouseY) );
}
