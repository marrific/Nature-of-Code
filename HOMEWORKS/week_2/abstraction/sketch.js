var movers= [];

function setup() {
  background(0);
  createCanvas(window.innerWidth, window.innerHeight);
  for(var i = 0; i < 70; i++) {
    var xx = createVector(random(width), random(height));
    
   
    movers[i] = new Mover(xx, random(2,15));
    //movers[i].positionTwo = createVector(movers[i+1].position);
    
  
  }

}


function draw() {
  
  background(5,11,54,6.8);
  for(var i = 0; i < movers.length; i++) {
    
    var m = movers[i];
    
    m.update();
    m.checkEdges();
    m.display();
  }
}
