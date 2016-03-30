function Box(_x, _y) {

  this.w = random(10, 20);
  this.h = random(10, 20);

  //body  creating
  var bd = new box2d.b2dBodyDef();
  bd.type = box2d.b2dBodyType.b2_dynamicBody;
  // box2d.b2dBodyType.b2_staticBody;   < -- for static body that doesn't move


  bd.position = scaleToWorld(_x, _y);


  //fixture  - shape of the body

  var fd = box2d.b2dFixtureDef();
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

  //in physics wolrd - everything from center


  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2; //elacity



  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);


  // add movement and rotation

  this.body.SetLinerVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 10)));
  this.body.SetAngularVelocity(random(-5, 5));



  // this.update = function() {
  //   this.y++;
  // }
  this.display = function() {
    //get updated values
    var pos = scaleToPixel(this.body.GetPosition());
    var a = this.body.GetAngleRadians();

    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(a);
    stroke(255);
    fill(255, 150);
    rect(0,0, this.w, this.h);
    pop();


  }

}