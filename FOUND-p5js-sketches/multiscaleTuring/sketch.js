/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/31195*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */

var n, levels;
var grid = [];
var diffusionLeft = [];
var diffusionRight = [];
var blurBuffer = [];
var variation = [];
var bestVariation = [];
var bestLevel = [];
var direction = [];
var stepSizes = [];
var radii = [];

var buffer;

function setup() {
  createCanvas(640, 360);

  // relates to the complexity (how many blur levels)
  var base = random(1.5, 2.4); // should be between 1.3 and 3
  
  // these values affect how fast the image changes
  var stepScale = random(0.006, 0.011);
  var stepOffset =  random(0.007, 0.012);

  // allocate space
  n = width * height;
  levels = floor(log(width) / log(base));
  
  // IS THIS NECESSARY? INIT
  for (var i = 0; i < n; i++) {
    grid.push(0);
    diffusionLeft.push(0);
    diffusionRight.push(0);
    blurBuffer.push(0);
    variation.push(0);
    bestVariation.push(0);
    bestLevel.push(0);
    direction.push(0);
  }
  
  
  
  
  buffer = createImage(width, height, RGB);

  // determines the shape of the patterns
  for (var i = 0; i < levels; i++) {
    var radius = floor(pow(base, i));
    radii.push(radius);
    stepSizes.push(log(radius) * stepScale + stepOffset);
  }

  // initialize the grid with noise
  for (var i = 0; i < n; i++) {
    grid.push(random(-1, +1));
  }
}

function step() {
  var activator = grid;
  var inhibitor = diffusionRight;

  for (var level = 0; level < levels - 1; level++) {
    // blur activator into inhibitor
    var radius = radii[level];    
    blur(activator, inhibitor, blurBuffer, width, height, radius);

    // absdiff between activator and inhibitor
    for (var i = 0; i < n; i++) {
      variation[i] = activator[i] - inhibitor[i];
      if (variation[i] < 0) {
        variation[i] = -variation[i];
      }
    }

    if (level == 0) {
      // save bestLevel and bestVariation
      for (var i = 0; i < n; i++) {
        bestVariation[i] = variation[i];
        bestLevel[i] = level;
        direction[i] = activator[i] > inhibitor[i];
      }
      activator = diffusionRight;
      inhibitor = diffusionLeft;
    } 
    else {
      // check/save bestLevel and bestVariation
      for (var i = 0; i < n; i++) {
        if (variation[i] < bestVariation[i]) {
          bestVariation[i] = variation[i];
          bestLevel[i] = level;
          direction[i] = activator[i] > inhibitor[i];
        }
      }
      var swap = activator;
      activator = inhibitor;
      inhibitor = swap;
    }
  }

  // update grid from bestLevel
  var smallest = 99999999;
  var largest = -99999999;
  
  for (var i = 0; i < n; i++) {
    var curStep = stepSizes[bestLevel[i]];
    if (direction[i]) {
      grid[i] += curStep;
    } 
    else {
      grid[i] -= curStep;
    }
    smallest = min(smallest, grid[i]);
    largest = max(largest, grid[i]);
  }

  // normalize to [-1, +1]
  var range = (largest - smallest) / 2;
  for (var i = 0; i < n; i++) {
    grid[i] = ((grid[i] - smallest) / range) - 1;
  }
}

function drawBuffer(grid) {
  println("buf");
  buffer.loadPixels();
  var pixels = buffer.pixels;
  for (var i = 0; i < n; i++) {
    pixels[i] = color(128 + 128 * grid[i]);
  }
  buffer.updatePixels();
  image(buffer, 0, 0);
}

function draw() {
  step();
  drawBuffer(grid);
}

function mousePressed() {
  setup();
}