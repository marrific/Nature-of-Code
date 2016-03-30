var angle = 6;
var radius  = 100;
var size;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rectMode(CENTER);
  
}

function draw() {
  
var offset =height/2;
  //background(0);
  angle += 0.1;

   size = 5;
   
   var x = cos(angle)*radius + offset;
   var y = sin(angle)*radius + offset;
   fill(0);
   rect(x,y,size,size);
   size ++
     
     
   
  
}