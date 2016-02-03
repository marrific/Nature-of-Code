function Vector(x,y) {
  
  this.x = x;
  this.y = y;
  
  this.add = function(other){
    this.x += other.x;
    this.y += other.y;
    
  }
  
  this.sub = function(other) {
    this.x -= other.x;
    this.y -= other.y;
    
  }
  
}

function draw() {
  
}