let col = { r: 255, g: 0, b: 0 };
let rad = 50;

p.setup = function () {
  p.createCanvas(400, 400);
  p.noStroke();
};

p.draw = function () {
  p.background(col.r, col.g, col.b);
  p.circle(p.mouseX, p.mouseY, rad);
};

p.mousePressed = function () {
  col.r = p.random(255);
  col.g = p.random(255);
  col.b = p.random(255);
};

p.keyPressed = function () {
  if (p.key === "=") {
    rad += 10;
  } else if (p.key === "-") {
    rad -= 10;
  }
};
