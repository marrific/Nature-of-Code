function tree(xI, yI, thetaI, branchWidth0I, totalBranchLengthI, nBranchDivisionsI,  percentBranchlessI, branchSizeFractionI, dThetaGrowMaxI, dThetaSplitMaxI, oddsOfBranchingI, colorI)
{
  this.x1 = xI;
  this.y1 = yI;
  this.x2 = xI;
  this.y2 = yI;
  this.theta = thetaI;
  this.branchWidth0 = branchWidth0I;
  this.branchWidth = this.branchWidth0;
  this.totalBranchLength = totalBranchLengthI;
  this.nBranchDivisions =nBranchDivisionsI;
  this.percentBranchless = percentBranchlessI;
  this.branchSizeFraction = branchSizeFractionI;
  this.dThetaGrowMax = dThetaGrowMaxI;
  this.dThetaSplitMax = dThetaSplitMaxI;
  this.oddsOfBranching = oddsOfBranchingI;
  this.myColor = colorI;

  this.lengthSoFar = 0;
  this.nextSectionLength = 0;

  
  this.draw = function(){
    if(this.branchWidth<.5) {   //stop growing if it's too thin to render
      this.lengthSoFar = this.totalBranchLength;
    }
    while(this.lengthSoFar < this.totalBranchLength) {
      this.branchWidth = this.branchWidth0*(1-this.lengthSoFar/this.totalBranchLength);
      //do I need to split?
      if(this.lengthSoFar/this.totalBranchLength > this.percentBranchless){ //if i can branch
        if(random(0,1)<this.oddsOfBranching){  //and i randomly choose to
          stroke(this.myColor);
            //make a new branch there!
            var newTree = new tree(this.x1, this.y1, this.theta + randomSign()*this.dThetaSplitMax, this.branchWidth,
                      this.totalBranchLength*this.branchSizeFraction, this.nBranchDivisions, 
                      this.percentBranchless, this.branchSizeFraction, 
                      this.dThetaGrowMax, this.dThetaSplitMax,
                      this.oddsOfBranching, this.myColor);
            newTree.draw();
        }
      }

      //change directions, grow forward 
      this.nextSectionLength = this.totalBranchLength/this.nBranchDivisions;
      this.lengthSoFar+=this.nextSectionLength;
      this.theta += randomSign()*random(0,this.dThetaGrowMax);
      this.x2 = this.x1+this.nextSectionLength*cos(this.theta);
      this.y2 = this.y1+this.nextSectionLength*sin(this.theta);
      //scale thickness by the distance it's traveled.
      strokeWeight(abs(this.branchWidth));
      stroke(this.myColor);
      line(this.x1,this.y1,this.x2,this.y2);
      if(addSnow){
        //initially, just a line on the upper half
        stroke(255);

        var dx =0;
        var dy =0;
        var overlapScaling = 1.2;
        if(this.theta <-PI/2){
          if(abs(PI+this.theta)<maxSnowTheta){
//            stroke(255,0,0);
            var snowThickness = constrain(abs(branchWidth)/2*(1-abs(theta+PI)/HALF_PI),0,abs(branchWidth)/2);
            if(snowThickness>0){
              strokeWeight(snowThickness);
              dx = (abs(branchWidth)-snowThickness)/2*cos(theta+PI/2)*overlapScaling;
              dy = (abs(branchWidth)-snowThickness)/2*sin(theta+PI/2)*overlapScaling;
              line(this.x1+dx-abs(this.branchWidth)*cos(this.theta)/4,
                   this.y1+dy-abs(this.branchWidth)*sin(this.theta)/4,
                   this.x2+dx, this.y2+dy);
            }
          }
        }
        if(this.theta >-PI/2){
          if(abs(this.theta)<maxSnowTheta){
//            stroke(0,255,0);
            var snowThickness = constrain(abs(this.branchWidth)/2*(1-abs(this.theta)/HALF_PI),0,abs(this.branchWidth)/2);
            if(snowThickness>0){
              strokeWeight(snowThickness);
              dx = (abs(this.branchWidth)-snowThickness)/2*cos(this.theta-PI/2)*overlapScaling;
              dy = (abs(this.branchWidth)-snowThickness)/2*sin(this.theta-PI/2)*overlapScaling;
              line(this.x1+dx-abs(this.branchWidth)*cos(this.theta)/4,y1+dy-abs(this.branchWidth)*sin(this.theta)/4,
                              this.x2+dx,this.y2+dy);
            }
          }
        }
      }
      this.x1 = this.x2;
      this.y1 = this.y2;
    }
  }
}