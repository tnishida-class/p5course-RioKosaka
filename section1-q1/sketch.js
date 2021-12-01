// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);
 // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

// BLANK[1]
//青円
  fill(14, 47, 146);
  noStroke();
  strokeCap(ROUND);
  arc(300, 100,150, 150,2 * Math.PI,false);
//白円
  fill(255);
  arc(292, 94, 143, 143,2 * Math.PI,false);
//緑円
  fill(22, 131, 46);
  arc(290, 93, 130, 130,2 * Math.PI,false);
//白円
  fill(255);
  arc(287, 102, 122, 122,2 * Math.PI,false);
//文字
  fill(77);
  textSize(32);
  textFont("serif");
  text("KOBE",241,93);
  fill(77);
  textSize(13);
  textFont("serif");
  text("UNIVERSITY",260,116);
  //色情報
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
