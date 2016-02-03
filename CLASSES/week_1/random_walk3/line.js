var Walker = function() {

    this.x = width/2;
    this.y = height/2;

  this.step = function() {
    //decide
    var xspeed = random(-1, 3);
    var yspeed = random(-1, 1);
    this.x += xspeed;
    this.y += yspeed;

    // var choice = random(1);

    // if (choice < .25) {
    //   this.y--;
    // } else if (choice < .5) {
    //   this.y++;
    // } else if ( choice < .95) {
    //   this.x++;
    // } else {
    //   this.x--;
    // }

  }
// 
  this.checkEdges = function() {
    // fill in check edges later
  }

  this.display = function() {
    fill(0);
    ellipse(this.x, this.y, 10, 10);
  }
}