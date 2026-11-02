p.setup = function () {
  p.createCanvas(400, 400);
};

p.draw = function () {
  p.background(220);

  let posX = 100;
  let posY = 150;

  // Draw a circle at (posX, posY)
  p.fill(255, 0, 0);
  p.circle(200, 200, 50);
};
