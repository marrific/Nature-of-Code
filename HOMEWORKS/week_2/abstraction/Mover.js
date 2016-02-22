// function Line(_x, _y, _xx, _yy) {
//   this.x = _x;
//   this.y = _y;
//   this.xx = _xx;
//   this.yy = _yy;
// }

var Mover = function(position, _dia) {
  this.position = position;
  this.velocity = createVector(0, 0);
  this.topspeed = -15;
  this.dia = _dia;



  this.update = function() {

    this.mouse = createVector(mouseX * cos(0.1) * 7, mouseY * sin(0.1) * 2 + 67);
    var acceleration = p5.Vector.sub(this.mouse, this.position);
    acceleration.normalize();
    acceleration.mult(-.08);
    this.velocity.add(acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  this.display = function() {
    this.opacity = random(50, 200);


    if (this.position.x < width && this.position.y < (height / 5 * 1)) {

      this.r = 231;
      this.g = 2;
      this.b = 97;
    }
    if (this.position.x < width && this.position.y < height / 5 * 2 && this.position.y >= height / 5 * 1) {

      this.r = 54;
      this.g = 97;
      this.b = 214;
    }
    if (this.position.x < width && this.position.y >= height / 5 * 3 && this.position.y >= height / 5 * 2) {

      this.r = 236;
      this.g = 240;
      this.b = 241;
    }

    if (this.position.x < width && this.position.y >= height / 5 * 4 && this.position.y >= height / 5 * 3) {

      this.r = 231;
      this.g = 118;
      this.b = 0;
    }

    if (this.position.x < width && this.position.y >= height / 5 * 5 && this.position.y >= height / 5 * 4) {

      this.r = 41;
      this.g = 128;
      this.b = 185;
    }




    fill(this.r, this.g, this.b, 100);
    // console.log(this.g);

    noStroke();

    ellipse(this.position.x, this.position.y, this.dia, this.dia);
    stroke(255, 20);
    strokeWeight(0.27);
    line(this.position.x, this.position.y, width / 2, height / 2);
    //second


    //fill(random(255), random(255), random(220, 255), random(95, 200));
    noStroke();

    ellipse(this.position.x, this.position.y, this.dia, this.dia);
    stroke(255, 20);
    strokeWeight(0.27);
    line(this.position.x, this.position.y, 0 , height / 2);



    ellipse(this.position.x, this.position.y, this.dia, this.dia);
    stroke(255, 20);
    strokeWeight(0.27);
    line(this.position.x, this.position.y, width / 4, height / 2);

    noStroke();

    ellipse(this.position.x, this.position.y, this.dia, this.dia);
    stroke(255, 20);
    strokeWeight(0.27);
    line(this.position.x, this.position.y, (width / 4) * 3, height / 2);

    ellipse(this.position.x, this.position.y, this.dia, this.dia);
    stroke(255, 40);
    strokeWeight(0.27);
    line(this.position.x, this.position.y, (width / 4) * 4, height / 2);



  }

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }

    if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }


  }
}