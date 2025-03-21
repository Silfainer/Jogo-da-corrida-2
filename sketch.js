function setup() {
    createCanvas(750, 600);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("Cyan");
    } else {
      background("Black");
    }
  
    textSize(75);
    text("🇪🇸", xJogador1, 100);
    text("🐍", xJogador2, 300);
    rect(350, 0, 10, 675);
    if (xJogador1 > 350) {
      text("Espanha venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Cobra venceu!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(79);
    }
    if (key == "d") {
      xJogador2 += random(80);
    }
  }
  