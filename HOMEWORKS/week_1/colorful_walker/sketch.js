var walker;
var r;
var g;
var b;

function Walker() {
  
  
  this.x = width / 2;
  this.y = height / 2;

  this.render = function() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, 20, 20);

    if (mouseX < 200) {
      this.r = random(100, 255);
      this.g = 0;
      this.b = 0;
    }

    if ( mouseX >= 200 && mouseX < 400) {
      this.r = random(200, 255);
      this.g = random(200, 255);
      this.b = 0;
    } if ( mouseX >= 400 ){

      this.r = 0;
      this.g = random(200, 255);
      this.b = random(50, 100);



    }


  }
  this.checkMouse = function() {
    if (mouseX > width / 2) {
      fill(random(200, 255), 0, random(50, 100))
    }

  };

  this.step = function() {
    var choice = floor(random(4));
    if (choice == 0) {
      this.x = this.x + mouseX / 5;
    } else if (choice == 1) {
      this.x = this.x - mouseX / 5;
    } else if (choice == 2) {
      this.y = this.y + mouseY / 5;
    } else {
      this.y = this.y - mouseY / 5;
    }
    this.x = constrain(this.x, 1, width - 1);
    this.y = constrain(this.y, 1, height - 1);
  }
}







function setup() {
  
  

  createCanvas(window.innerWidth, window.innerHeight);
  walker = new Walker();
  background(33, 33, 33, 8);
};

function draw() {
  background(33, 33, 33, 8);
  walker.checkMouse();
  walker.step();
  walker.render();
};

function keyPressed() {
 walker.x = width/2;
 walker.y =height/2;
  }



