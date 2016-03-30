/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/6707*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */

var points = [];
var md = false;

function setup(){
  createCanvas(800,600);
  background(255);
  smooth();
  //noStroke();

}

function draw(){
  if(md){
    for(var f=0; f<500; f+=1){
      //for(int g=0; g<height; g+=height/10){
      points.push(new Point(random(0,width),random(0,height)) );
      //}
    }
  }
  //fill(255,10);
  //rect(-1,1,width+1,height+1);
  //background(255);
  noiseDetail(8,0);
  //noiseSeed(1);
  for(var i=points.length-1; i>0; i--){
    points[i].update();
    if(points[i].finished){
      points.splice(i, 1);
    }
  } 
  
  //println(points.size());
}

function mousePressed(){
  md = true;
}
function mouseReleased(){
  md = false;
}
function keyPressed(){
  background(255);
  noiseSeed(round(random(1000)));
  for(var i=points.length-1; i>0; i--){
    //p.x = random(width);
    //p.y = random(height);
    points.splice(i, 1);
  }
  //saveFrame("perlin####.png");
}

function Point(x_, y_) 
{
  this.x = x_;
  this.y = y_;
  this.xv = 0;
  this.yv = 0;
  
  this.maxSpeed = 3000000;
  this.finished = false;

  this.update = function(){
    stroke(0,16);
    var r = random(1);
    this.xv = cos(noise(this.x*.01,this.y*.01)*TWO_PI);
    this.yv = -sin(noise(this.x*.01,this.y*.01)*TWO_PI);

    if(this.x>width){
      //this.x = 1;
      this.finished = true;
    }
    else if(this.x<0){
      //this.x = width-1;
      this.finished = true;
    }
    if(this.y>height){
      //this.y = 1;
      this.finished = true;
    }
    else if(this.y<0){
      //this.y = height-1;
      this.finished = true;
    } 

    if(this.xv>this.maxSpeed){
      this.xv = this.maxSpeed;
    }
    else if(this.xv<-this.maxSpeed){
      this.xv = -this.maxSpeed;
    }
    if(this.yv>this.maxSpeed){
      this.yv = this.maxSpeed;
    }
    else if(this.yv<-this.maxSpeed){
      this.yv = -this.maxSpeed;
    }

    this.x += this.xv;
    this.y += this.yv;

    line(this.x+this.xv, this.y+this.yv,this.x,this.y );
  }

}