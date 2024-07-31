let symmetry=7;
let angle=360/symmetry

function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
  background(0, 110, 110);
}
function draw(){
  translate(width/2,height/2);
  if (mouseX >0 && mouseX <width && mouseY>0 && mouseY<width){
   
    let lineStartX=mouseX-width/2
    let lineStartY=mouseY-height/2
    let lineEndX=pmouseX-width/2
    let lineEndY=pmouseY-height/2
    
    if(mouseIsPressed===true){
      for(let i=0;i<symmetry;i++){
      rotate(angle);
      stroke(255);
      strokeWeight(4);       
      line(lineStartX,lineStartY,lineEndX,lineEndY);
      
    push()
        scale(1,-1);
        line(lineStartX,lineStartY,lineEndX,lineEndY);
        pop()
  }
    }
  }
}