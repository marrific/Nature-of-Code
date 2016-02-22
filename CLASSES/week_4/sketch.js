var ps;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ps = new ParticleSystem(createVector(width/2, 50));
}


function draw() {
  background(0);
  ps.addParticle();
  ps.run();

}