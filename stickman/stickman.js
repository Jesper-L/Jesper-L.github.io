function setup() {
    createCanvas(800, 800);
  }
  function setup(){
    createCanvas(400, 400);
    background(265);
  }
  
  function draw(){
    translate(100, 50);
    line(0, 25, 0, 60);
    ellipse(0, 15, 20, 20);
    
    push();
    translate(0, 30);
    rotate(radians(60));
    line(0, 0, 30, 0);
    rotate(radians(60));
    line(0, 0, 30, 0);
    pop();
  
    translate(0, 60);
    rotate(radians(70));
    line(0, 0, 40, 0);
    rotate(radians(40));
    line(0, 0, 40, 0);
  }