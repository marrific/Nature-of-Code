/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/2925*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */

var addSnow;
var addBlur;
var maxSnowTheta;
var nTrees;
var trees = [];
var backgroundCol;
//color treeColor = color(0,255,0);

//initial tree properties.
var branchWidthInit;
var totalBranchLengthInit;
var nBranchDivisionsInit;
var percentBranchlessInit;
var branchSizeFractionInit;
var dThetaGrowMaxInit;
var dThetaSplitMaxInit; 
var oddsOfBranchingInit;


function setup(){
  
  addSnow = false;
  addBlur = false;
  maxSnowTheta = HALF_PI*4/5;

  nTrees = 2;
  backgroundCol = color(200);


  createCanvas(500, 500);
  smooth();
  background(backgroundCol);
  noFill();
  initializeTreeValues();
  newTrees();
}

function draw(){}

function initializeTreeValues(){
  branchWidthInit = 10;
  totalBranchLengthInit = 300;
  nBranchDivisionsInit = 30;
  percentBranchlessInit = .3;
  branchSizeFractionInit = .5;
  dThetaGrowMaxInit = PI/15;
  dThetaSplitMaxInit = PI/6; 
  oddsOfBranchingInit = .3;
}

function newTrees(){
/* tree(x, y, theta, branchWidth0,
       totalBranchLength, nBranchDivisions, 
       percentBranchless, branchSizeFraction, 
       dThetaGrowMax, dThetaSplitMax,
       oddsOfBranching, color)
*/

//  background(backgroundCol);
//  noFill();
  trees = [];
  for(var i=0; i<nTrees; i++) {
    trees.push(new tree(random(width), height, -HALF_PI, branchWidthInit,
                   totalBranchLengthInit, nBranchDivisionsInit, 
                   percentBranchlessInit, branchSizeFractionInit, 
                   dThetaGrowMaxInit, dThetaSplitMaxInit,
                   oddsOfBranchingInit, color(random(0,30))));
  }
                   
  for(var i=0; i<nTrees; i++) {
    trees[i].draw();
  }
    
  if(addBlur)
    filter(BLUR,1);
}



function blankScreen(){
  fill(backgroundCol);
  noStroke();
  rect(0,0,width,height);
}

function fadeScreen(){
  fill(backgroundCol,50);
  noStroke();
  rect(0,0,width,height);
}


function randomSign(){ //returns +1 or -1
  var num = random(-1,1);
  if(num==0)
    return -1;
  else
    return num/abs(num);
}

function mouseClicked(){
  fadeScreen();
  newTrees();
  for(var i=0; i<nTrees; i++) {
    trees[i].draw();
  }
}

function keyPressed(key) {
  if(key=='=' || key=='+'){
    nTrees++;
    newTrees();
  }
  if(key=='-' || key=='_'){
    if(nTrees>1)
    {
      nTrees--;
      newTrees();
    }
  }
  if(key=='s'){
    addSnow = !addSnow;
  }
  if(key==' '){
    blankScreen();
  }

  if(key=='b'){
    addBlur = !addBlur;
  }
  
  if(key=='1') {
    initializeTreeValues();
  }
  if(key=='2'){
    branchWidthInit = 10;
    totalBranchLengthInit = 300;
    nBranchDivisionsInit = 30;
    percentBranchlessInit = .3;
    branchSizeFractionInit = .5;
    dThetaGrowMaxInit = PI/15;
    dThetaSplitMaxInit = PI/6; 
    oddsOfBranchingInit = .1;
  }
}