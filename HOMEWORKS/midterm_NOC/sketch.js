var bg = [];
var counter=0;
var numImg=4

movers = [];
attractors = [];

var densitySkipper = 6;



var a;
var z = 0;
var change = false;

function preload() {

bg[0] = loadImage("test.png");
 bg[1] = loadImage("square5.jpg");
 bg[2] = loadImage("square4.jpg");
 bg[2] = loadImage("square3.jpg");
 bg[3] = loadImage("square1.jpg");
}


function setup() {

 createCanvas(630, 630);

 //background(0);

 resetPoints(counter);
 
}

function resetPoints(z){
 
 image(bg[z], 0, 0);
 
 attractors=[];
 movers=[];

  bg[z].loadPixels();

  for (i = 0; i < bg[z].width; i += densitySkipper) {
   for (j = 0; j < bg[z].height; j += densitySkipper) {
    var pixelLoc = 4 * (i + (j * width));


    if (bg[z].pixels[pixelLoc] > 0 && bg[z].pixels[pixelLoc] < 244) {
     var loc = createVector(i, j);
     a = new Attractor(loc);
     attractors.push(a);

    }
   }
  }
  // println(height * width);
  // println(attractors.length)
  bg[z].updatePixels();

  fill(0)
  rect(0, 0, 630, 630)
  for (i = 0; i < attractors.length; i++) {
   var m = new Mover(random(0.1, 2), random(width), random(height));
   movers.push(m);

  }
 
}


function draw() {
 //image(bg, 0, 0);

 background(0, 10);


 for (i = 0; i < attractors.length; i++) {
  var attr = attractors[i]; /// 
  var mov = movers[i]; 
  var force = attr.attract(mov); 
  mov.applyForce(force);
  mov.run();
 }

 if (mouseIsPressed) {
  var mousePos = createVector(mouseX, mouseY);

  for (i = 0; i < movers.length; i++) { /// I'm totally not sure
   var tempMover = movers[i]; /// I'm totally not sure
   var distance = p5.Vector.sub(mousePos, tempMover.location);
   distance.normalize();
   tempMover.applyForce(distance);
  }
 }


 if (change == true) {


  z = z + 1




  updateImage();


  if (z > 6) {
   z = 0;
  }

  change = false;

 }

}

function keyPressed() {
 counter=(counter+1)%numImg;
 resetPoints(counter);
 
 
 
}

function updateImage() {

 console.log(z)

 for (z = 0; z < bg.length; z++) {
  image(bg[z], 0, 0);

  bg[z].loadPixels();


  bg[z].updatePixels();

  //redraw();

 }
}






