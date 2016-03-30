var circles = [];


function setup() {
  createCanvas(800, 500);

  circles.push( new Circle(width * 1 / 4, height / 2, 5, 0) );
  circles.push( new Circle(width * 3 / 4, height / 2, -5, 0) );
}


function draw() {
  background(0);

  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();

    for (var j = 0; j < circles.length; j++) {
      if (i != j) {
        circles[i].isCollided(circles[j]);
      }
    }

  }
}


function Circle(_x, _y, _xSpd, _ySpd) {

  this.x = _x;
  this.y = _y;
  this.r = random(20, 80);

  this.xSpd = _xSpd;
  this.ySpd = _ySpd;

  this.update = function() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  this.display = function() {
    stroke(255);
    fill(255, 150);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  this.isCollided = function(other) {
    var dst = dist(this.x, this.y, other.x, other.y);

    if (dst < this.r + other.r) {
        
      // simple but wrong - I am going to explain this during the workshop
      // this.xSpd *= -1;
      // this.ySpd *= -1;
      // other.xSpd *= -1;
      // other.ySpd *= -1;
      
      // not perfect but useful
      var restitution = 0.001;
      this.xSpd = (this.x - other.x) * restitution;
      this.ySpd = (this.y - other.y) * restitution;
      other.xSpd = (other.x - this.x) * restitution;
      other.ySpd = (other.y - this.y) * restitution;
    }
  }


}