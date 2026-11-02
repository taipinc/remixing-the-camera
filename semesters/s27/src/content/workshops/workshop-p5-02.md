# Workshop: Getting Complicated with p5.js

## Interactivity & Media in p5.js

[p5.js editor](https://editor.p5js.org/) — [p5.js reference](https://p5js.org/reference/)

---

## Mouse & Keyboard Events

We've already discussed the `setup()` and `draw()` functions, that will always be included whenever you're starting a new p5.js sketch. `setup()` runs once at the beginning, and `draw()` runs continuously in a loop. 

But there are also other built-in functions that you can use if needed, called event functions. These are functions that p5.js will automatically execute when a specific event occurs, such as a mouse click or a key press. They allow you to create interactive sketches that respond to user input.

- `mousePressed()` — runs once on mouse click
- `mouseReleased()` — runs once on mouse release
- `mouseDragged()` — runs continuously while mouse is pressed continuosly and moves
- `keyPressed()` — runs once on keypress
- `mouseX`, `mouseY` — current mouse position, always available

```js
let col = { r: 255, g: 0, b: 0 };
let diameter = 50;

function setup() {
  createCanvas(400, 400);
};

function draw() {
  background(col.r, col.g, col.b);
  circle(mouseX, mouseY, diameter); // Circle follows the mouse
};

function mousePressed() {
  // Change the color of the background when the mouse is pressed
  col.r = random(255);
  col.g = random(255);
  col.b = random(255);
};

function keyPressed() {
  // Increase or decrease size of the cicrcle with = and - keys
  if (key === '=') {
    diameter += 10;
  } else if (key === '-') {
    diameter -= 10;
}
```
Click on the canvas the see the colors changing.
Click the `=` and `-` keys to change the size of the circle.

<sketch src="workshop-p5-02-events01.js"></sketch>

Notice I've been using the `random()` function that we haven't discussed yet. It assign a random value between `0` and `255` (in this case) to each color channel, creating a random color every time the mouse is pressed.

---

## Objects

In the previous sketch, I've used an object to store multiple values within a single variable. The 'col' variable is an object that contains three properties: `r`, `g`, and `b`, which represent the red, green, and blue color channels.

This is a powerful way to organize related data together, and we'll use it extensively when working with machine learning in ml5.js.

```js
let col = { r: 255, g: 0, b: 0 }; // An object representing a color, three different values stored together
fill(col.r, col.g, col.b); // Use the object's properties to set the fill color
```

I can then access these values using `col.r`, `col.g`, and `col.b`. This is much cleaner than having three separate variables for each color channel, and it allows us to easily pass around complex data as a single unit.

---

## Arrays

Arrays are a powerful way to store information about multiple similar items. They are ordered lists of values, and you can access each item by its index number (starting from 0). When working with machine learning models, we often get back arrays of results — for example, an array of detected faces, or an array of keypoints from pose detection.

A simple array can be a list of words:

```js
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // prints 'apple'
console.log(fruits[1]); // prints 'banana'
```

I can also store arrays of objects:

```js
let dots = [
  { x: 100, y: 100 }, 
  { x: 200, y: 300 }, 
  { x: 350, y: 150 }
]; // create a series of dots with x and y coordinates
circle(dots[0].x, dots[0].y, 50); // access item by index
```

---

## For Loops

If I have an array of items, I often want to 'loop' through it and working with each item. For example, in my `dots` array, I want to draw a circle for each of these dots. I can do this with a `for` loop, which is a way to repeat a block of code a certain number of times.

```js
for (let dot of dots) {
  circle(dot.x, dot.y, 50); // draw every dot in the array
}
```

For a more complex example:

```js
let dots = [
  { x: 100, y: 100, size: 50 }, 
  { x: 200, y: 300, size: 30 }, 
  { x: 350, y: 150, size: 70 },
  { x: 50, y: 250, size: 20 },
  { x: 300, y: 50, size: 40 },
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let dot of dots) {
    fill(dot.size * 3); // size determines the shade of gray
    circle(dot.x, dot.y, dot.size); // draw every dot in the array with its own size
  }
}

function mousePressed() {
  // Randomize new positions and sized when mouse pressed
  for (let dot of dots) {
    dot.x = random(width);
    dot.y = random(height);
    dot.size = random(10, 80);
  }
}
```

<sketch src="workshop-p5-02-array.js"></sketch>
