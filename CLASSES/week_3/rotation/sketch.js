var angle = 6;
var radius  = 100;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rectMode(CENTER);
  
}

function draw() {
  
var offset =height/2;
  //background(0);
  angle += 0.01;
  // push();
  // translate(width/2,height/2);
  // rotate(angle);
  // rect(0,0,50,50); // if you add 100 to x it will rotate - 100 from x 
  // pop();
  
  // var x = cos(angle)*radius + width/2; // radius = how big the circle is
  // var y = sin(2*angle)*radius + height/2; //angle - how rapidly im going around
  // ellipse(x,y,50,50)
   
   // adding - dispalys 
   //multiplying 
   
  // var x = cos(3.5*angle)*radius + width/2; // radius = how big the circle is
  // var y = sin(2*angle*noise(angle))*radius*noise(angle) + height/2; //angle - how rapidly im going around
  // ellipse(x,y,50,50)
   
   // sin(frequency) * (amplitude)
   
   
   var x = cos(angle)*3*radius + offset;
   var y = sin(2*angle)*2*radius + offset;
   fill(0);
   ellipse(x,y,1,1);
     
     
   
  
}