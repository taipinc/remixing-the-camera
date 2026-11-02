let posX = 50;
let posY = 150;

p.setup = function () {
  p.createCanvas(400, 400);
};

p.draw = function () {
  p.background(220);
  posX += 1;
  p.fill(255, 0, 0);
  p.circle(posX, posY, 50);
};
