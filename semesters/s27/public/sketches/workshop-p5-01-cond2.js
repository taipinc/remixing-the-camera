let posX = 50;
let posY = 150;
let speed = 3;

p.setup = function () {
  p.createCanvas(400, 400);
};

p.draw = function () {
  p.background(220);
  posX += speed; // Move the circle by adding the speed to posX
  if (posX > 375 || posX < 25) {
    speed = -speed;
  }
  p.fill(255, 0, 0);
  p.circle(posX, posY, 50);
};
