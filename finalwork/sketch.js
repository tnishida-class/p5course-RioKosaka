// 最終課題を制作しよう



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,235,205);
}

function draw() {
  background(255,235,205);
  if(mouseIsPressed){
  push();

  translate(mouseX, mouseY);
  rotate(frameCount / 5);
  drawParasol(6, 40);
  pop();
}

  else{
    push();
  translate(300, 300);
  drawParasol(6, 40);
  pop();
}
}

function drawParasol(n, r){

 for(i = 0; i < TWO_PI; i += 0.01){

    if(sin(i * n) >= 0.3){
     stroke(color(255,200,0));
    }
    else{
      stroke(color(255,100,0));
    }
    line(r * cos(i), r * sin(i), 0, 0);
    stroke(color(255,100,0));
    }
 ellipse(0, 0, 8);
 }
