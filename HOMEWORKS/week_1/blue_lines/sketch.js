var speed = 0;

var Walker = function(_t, _x, _y, _dia, _xspeed, _yspeed) {
  this.t = _t,
    this.x = _x;
  this.y = _y;
  this.dia = _dia;
  this.xspeed = _xspeed; //random(-1, 1);
  this.yspeed = _yspeed; //random(-1, 5);

  this.step = function() {

    // this.xspeed = _xspeed; //random(-1, 1);
    // this.yspeed = _yspeed; //random(-1, 5);
    
    //************************    LET'S BOUNCEEEEEE **********************

    if (this.x > width) {
      this.x = width;
      this.xspeed *= -1;
    }
    if (this.x < 0) {
      this.x = 0;
      this.xspeed *= -1;
    }
    if (this.y > height) {
      this.y = height;
      this.yspeed *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.yspeed *= -1;
    }

    this.t += 1
    this.x += noise(this.t) * this.xspeed;
    this.y += noise(this.t * 70) * this.yspeed + random(5) * (this.yspeed / abs(this.yspeed));

    //this.x++;
    //this.y = this.y + random(-5, 2);


  }
  this.display = function() {

    fill(random(0, 0), random(70, 250), random(220, 255), random(95, 200));
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);

  }




}

var w = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(50, 50, 50);

  for (var i = 0; i < 100; i++) {
    noStroke;
    w.push(new Walker(0, 0, i * 20, random(2,15), random(6), random(2)));

  }

}


function draw() {
  background(0, random(3, 10));
  for (var i = 0; i < w.length; i++) {

    w[i].step();

    w[i].display();

  }
  //print(w[5].x);

}


function draw() {
  background(0, random(3, 10));
  for (var i = 0; i < w.length; i++) {

    w[i].step();
    w[i].display();

  }

}
