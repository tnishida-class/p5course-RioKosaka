// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);

 if(keyIsDown(" ".charCodeAt(0))){count =(count+5)%cycle}



  count = (count + 1) % cycle;
  // BLANK[1]
  let size = count;
  if(count > 40 && count <60) {
     ellipse(width / 2, height / 2, 100);
  }
  else{
      ellipse(width / 2, height / 2, 10);
  }

}
