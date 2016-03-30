/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/8941*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */
var curlx;
var curly;
var f;
var deley;
var growth;
var growthTarget;
 
function setup() 
{ 
  createCanvas(950,450); 
  
  curlx = 0;
  curly = 0;
  f = sqrt(2)/2.0; 
  deley = 10;
  growth = 0;
  growthTarget = 0;
} 

function draw() 
{ 
  background(250); 
  stroke(0); 
  curlx += (radians(360./height*mouseX)-curlx)/deley; 
  curly += (radians(360./height*mouseY)-curly)/deley; 
  translate(width/2,height/3*2); 
  line(0,0,0,height/2); 
  branch(height/4.,17); 
  growth += (growthTarget/10-growth+1.)/deley; 
} 
 
function mouseWheel(delta) 
{ 
  growthTarget += delta; 
} 
 
function branch(len, num) 
{ 
  len *= f; 
  num -= 1; 
  if((len > 1) && (num > 0)) 
  { 
    push(); 
    rotate(curlx); 
    line(0,0,0,-len); 
    translate(0,-len); 
    branch(len,num); 
    pop(); 
    
    /* 
    push(); 
    line(0,0,0,-len); 
    translate(0,-len); 
    branch(len); 
    pop(); 
    */
    
    len *= growth; 
    push(); 
    rotate(curlx-curly); 
    line(0,0,0,-len); 
    translate(0,-len); 
    branch(len,num); 
    pop(); 
    //len /= growth; 
  } 
} 

