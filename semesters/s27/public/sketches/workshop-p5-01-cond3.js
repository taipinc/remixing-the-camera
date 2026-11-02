let posX = 50;
let posY = 150;

let speedX = 3;
let speedY = 2;

p.setup = function () {
  p.createCanvas(400, 400);
};

p.draw = function () {
  p.background(220);
  posX += speedX; // Move the circle by adding the speed to posX
  posY += speedY; // Move the circle by adding the speed to posY
  if (posX > 375 || posX < 25) {
    speedX = -speedX;
  }
  if (posY > 375 || posY < 25) {
    speedY = -speedY;
  }
  p.fill(255, 0, 0);
  p.circle(posX, posY, 50);
};
