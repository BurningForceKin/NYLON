  var start = 0;
   var inc = 0.01;
  var offs = 10;

class Bubble1 {
  constructor(){
    this.x = random(0, 400);
    this.y = random(0, 500);
    
    
  }
  

 move() {

   this.x = this.x + (cos(start+10) * offs);
   this.y = this.y + (sin(start) * offs);
   //  if(this.y > 500){
   //  this.y = 0;
   //  this.x = random(0,400);
   // }
   // if(this.y < 0){
   //   this.y = random(0,500);
   // }
  start += inc;
 }
  show(){

    curveVertex(this.x, this.y);
    
  }
  
  
  
}
