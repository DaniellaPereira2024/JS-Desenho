let cor;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  background ("white");
  cor = color ( random (0,255),random (0,255),random (0,255));
}
  x=200
  y=200

function draw() {
  
  fill(cor);
  circle(x,y,100);

  if(mouseX < x) {
    x = x-1;
  }
  
   if(mouseX > x) {
    x = x+1;
  }
  
  
   if(mouseY < y) {
    y = y-1;
  }
  
   if(mouseY > y) {
    y = y+1;
  }
 
  
}
