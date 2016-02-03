var x, y;

function setup() {
 
  createCanvas(window.innerWidth, window.innerHeight);
 background(0);
  x = width / 2;
  y = height / 2;

}

function draw() {
  //Calculate random walk

  var choice = floor(random(4));

  x = x + random(-1, 1);
  y = y + random(-1, 1);






  // if (choice == 0) {

  //   //going up
  //   y = y - 1;
  // }
  // if (choice == 1) {
  //   //going right
  //   x = x + 1;
  // }
  // if (choice == 2) {
  //   //going left
  //   x = x - 1;
  // } else {
  //   //going down
  //   y = y + 1;
  // }
  // //display

  //Gausian Blur

  var mean = width / 2;
  var standardDeviation = width / 4;
  x = randomGaussian(mean, standardDeviation)


  fill(255, 40);
  ellipse(x, y, 50, 50);

}