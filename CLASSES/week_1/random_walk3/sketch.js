var w;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  w = new Walker();
}


function draw() {
  w.step();
  w.display();
  
}