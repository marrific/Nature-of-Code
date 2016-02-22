var angle = 6;
var radius = 10;




var oscillators = [];
var p;

function setup() {
  createCanvas(600, 600);
  var x = width / 2;
  var y = 0 ;
  

  // Make a new Pendulum with an origin location and armlength
  p = new Pendulum(createVector(x, y), 350);
  x++;

  for (var i = 0; i < 50; i++) {
    oscillators.push(new Oscillator());

  }


}

function draw() {
  background(22,3);
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display(p);
  }
  p.go();
}

function mousePressed() {
  p.clicked(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}