var bubble1 = [];
var bubble2 = [];
var mic;
var muis;
let cnv;
let s;
let tijd = 0;

function setup() {
  cnv = createCanvas(400, 500);
  let newCanvasX = (windowWidth - 400)/2;
  let newCanvasY = (windowHeight - 600)/2;
  cnv.position(newCanvasX, newCanvasY);
  
  for (var i = 0; i < 5; i++){
  bubble1[i] = new Bubble1();
    bubble2[i] = new Bubble2();
  }
    s = int(random(999));
    colorMode(HSB);
    background(40, 10, 100);
    textSize(20);
    fill(0, 0, 0, 0.4);
    text('NYLON # '+s, 270, 46);
    //text(s, 360, 46);
    
}

function draw() {
  noFill();
  stroke(10, 0, 0, 0.1)
  beginShape();
  
  for(var i =0; i < 5; i++){
  bubble1[i].move();
    bubble2[i].move();
  bubble1[i].show();
    bubble2[i].show();
  }
  endShape(CLOSE);
  tijd += 1;
  
  if(tijd == 377){
    noLoop();
  }
}

function doubleClicked(){
  saveCanvas('NYLON #'+s, 'png');
}
