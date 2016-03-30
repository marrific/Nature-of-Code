var angle = 6;
var angle2 = 10;
var radius = 100;
var radius2 = 170;
var dia = 10;
var v = [];

function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(0, 4);
  var offset = height / 2;
  angle += 0.04;



  var x = cos(angle) * radius + offset + 100;
  var y = sin(angle) * radius + offset;
  fill(0);
  ellipse(x, y, 1, 1);


  catchMe = createVector(x, y)


  // Draw an ellipse at the mouse location
  noFill();
  noStroke();
  ellipse(catchMe.x, catchMe.y, 1, 1);
  var a = cos(angle) * radius2 * 3 + offset;
  var b = sin(angle) * radius2 * 3 + offset;


  v.push(new Vehicle(width / 2, offset, random(2, 5), random(1, 5)));
  v.push(new Vehicle(width / 2, offset, random(-3, 3), random(1, 5)));
  v.push(new Vehicle(width / 2, offset, 1, dia));
  // v.push(new Vehicle(width / 2, offset, -4, dia));
  // v.push(new Vehicle(width / 2, offset, -5, dia));
  // v.push(new Vehicle(width / 2, offset, -1, dia));



  for (var i = v.length - 1; i >= 0; i--) {

    // var g = 10;
    colorMode(HSB, 255);




    var p = v[i];
    p.update();
    p.display(i / 6, 255, 255);
    p.seek(catchMe);
    var gravity = createVector(0, 0.1);
    p.applyForce(gravity);
    if (p.isDead()) {
      print('DIED');
      //remove the particle
      v.splice(i, 1);
    }
  }

  //console.log(v.length);
  // Call the appropriate steering behaviors for our agents
  // v.seek(mouse);
  // v.update();
  // v.display();

};