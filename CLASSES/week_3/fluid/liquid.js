// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Liquid = function(x, y, w, h, c,_waterX,_waterY) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
  this.waterX = _waterX;
  this.waterY = _waterY;

  // Is the Mover in the Liquid?
  this.contains = function(m) {
    var l = m.position;
    return l.x > this.x && l.x < this.x + this.w &&
      l.y > this.y && l.y < this.y + this.h;
  };

  // Calculate drag force
  this.calculateDrag = function(m) {
    // Magnitude is coefficient * speed squared
    var speed = m.velocity.mag();
    var dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    var dragForce = m.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  };

  this.display = function() {
    noStroke();
    fill(161, 231, 255);
    rect(this.waterX, this.waterY, this.w, this.h);
  };
};