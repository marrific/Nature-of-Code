/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/2363*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */
// Gravity Swarm
// Claudio Gonzales, June 2009
// Albuquerque, New Mexico

var numParticles;
var colour;
var Z = [];
var mouseHeld;

function setup() {
  mouseHeld = false;
  numParticles = 1000;
  colour = random(1);
  
  createCanvas(500,500);  
  background(255);
  smooth();
  
  for(var i = 0; i < numParticles; i++) {
    Z.push(new particle( random(width), random(height), 0, 0, 1 ));
  }
  
  //frameRate(60);
  colorMode(RGB,255);

}

function draw() {
  
  filter(INVERT);

  var r;

  stroke(0);
  fill(255);
  rect(0,0,width,height);
  
  colorMode(HSB,1);
  for(var i = 0; i < Z.length; i++) {
    if( mouseHeld && mouseButton == LEFT ) {
      Z[i].gravitate( new particle( mouseX, mouseY, 0, 0, 1 ) );
    }
    else if(mouseHeld && mouseButton == RIGHT ) {
      Z[i].repel( new particle( mouseX, mouseY, 0, 0, 1 ) );
    }
    else {
      Z[i].deteriorate();
    }
    Z[i].update();
    r = i/Z.length;
    stroke( colour, pow(r,0.1), 1-r, 0.15 );
    Z[i].display();
  }
  colorMode(RGB,255);
  
  colour+=random(0.01);
  if( colour > 1 ) { 
    colour = colour%1;
  }

  filter(INVERT);
}

function mousePressed(x, y) {
  mouseHeld = true;
}

function mouseReleased(x, y) {
  mouseHeld = false;
}
