var img;  // Declare variable 'img'.
var x, y;
var t = 0;

var z = 30; 
speed = 0;

var gravity = 0.05;

function setup() {
  createCanvas(720, 400);
  img = loadImage("assets/bee.svg");  // Load the image
  imgTwo = loadImage("assets/angrybee.png");  // Load the image
  

  x = width / 2;
  y = height / 2;
  background(0,122,163);
  
  
  
}

function draw() {
    background(0,122,163,100);
    t += 2;
  x = noise(t)*10 + width/7 ;
  y = noise(t*10)*0.7 + height/2 - 40;
  
  // Displays the image at point (0, height/2) at half size
  image(img, x, y, img.width/2, img.height/2);
  
  i = noise(t)*10 + width/7 ;
  j = noise(t*10)*0.7 + height/2
  
  // Displays the image at point (0, height/2) at half size
  image(imgTwo, 350 , z , img.width/2.4, img.height);
 
  z = z + speed;
  speed = speed + gravity;
  
  
  if (z > height - 180) {
  speed = speed * -1;
   if (z > 0 ) {
  speed = speed ;}
  }
  
}