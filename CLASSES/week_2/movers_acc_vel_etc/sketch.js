var position;
var velocity; //strength of speeed no direction
var mover;
var mass;

var movers = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  movers.length = 10;

  for (var i = 0; i < movers.length; i++) {

    movers[i] = new Mover(createVector(random(width / 2, 0)), random(1, 4));

  }
}


function draw() {
  background(0);

  var wind = createVector(1, 0);
  var gravity = createVector(0, 1);


  for (var i = 0; i < 10; i++) {
    // movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].bounce();
    movers[i].render();
  }



}