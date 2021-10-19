// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill((i+j) % 2 == 0 ? 255 :77);

    console.log(i, j);
    rect(i * 20, j * 20, 20, 20);


    if((i+j) % 2 == 1 && j<=2){fill(255, 0, 0);}
    else  if((i+j) % 2 == 1 && j>=5){fill(0);}
    ellipse(i*20+10,j*20+10,18)


      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
