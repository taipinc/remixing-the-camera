p.setup = function() {
  p.createCanvas(400, 300);
};

p.draw = function() {
  p.background(220);

  let posX = 100;
  let posY = 150;

  // Draw a circle at (posX, posY)
  p.fill(50, 100, 200);
  p.noStroke();
  p.ellipse(posX, posY, 80, 80);

  // Draw a second circle using the mouse position
  p.fill(200, 80, 80);
  p.ellipse(p.mouseX, p.mouseY, 60, 60);

  // Label
  p.fill(0);
  p.noStroke();
  p.textSize(14);
  p.text('posX: ' + posX + ', posY: ' + posY, 10, 20);
  p.text('mouseX: ' + p.mouseX + ', mouseY: ' + p.mouseY, 10, 40);
};
