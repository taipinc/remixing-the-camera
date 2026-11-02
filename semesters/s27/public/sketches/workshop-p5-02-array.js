let dots = [
  { x: 100, y: 100, size: 50 },
  { x: 200, y: 300, size: 30 },
  { x: 350, y: 150, size: 70 },
  { x: 50, y: 250, size: 20 },
  { x: 300, y: 50, size: 40 },
];

p.setup = function () {
  p.createCanvas(400, 400);
};

p.draw = function () {
  p.background(220);
  for (let dot of dots) {
    p.fill(dot.size * 3); // size determines the shade of gray
    p.circle(dot.x, dot.y, dot.size); // draw every dot in the array with its own size
  }
};

p.mousePressed = function () {
  // Check if the mouse is inside any of the dots
  for (let dot of dots) {
    dot.x = p.random(p.width);
    dot.y = p.random(p.height);
    dot.size = p.random(10, 80);
  }
};
