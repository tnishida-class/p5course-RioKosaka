// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
  let x= i*5 +5;
  if(i>=5){stroke(255, 0, 0);}
  else  if(i<5){stroke(0, 0, 255);}
  ellipse(50,50, x);

}
}
