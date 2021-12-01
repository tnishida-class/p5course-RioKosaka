function setup() {
  createCanvas(135,155);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178,100,162);
  triangle(12,120,116,120,116,10);
  fill(135,206,235);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
  fill(135,206,235);
  textSize(30);
  textFont("serif");
  text("日向坂",20,150)
}
