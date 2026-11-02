# Workshop: Introduction to p5.js

[p5.js](https://p5js.org/) is a friendly tool for learning to code and make art. p5.js prioritizes accessibility, inclusivity, community, and joy. It makes sketching with code as intuitive as sketching in a notebook. p5.js supports audio-visual, interactive, and experimental works for the web.

**Links:**
- [p5.js editor](https://editor.p5js.org/): This is where we will write and run our p5.js code.
- [p5.js website](https://p5js.org/): The main website with tutorials, examples, and documentation.
- [p5.js reference](https://p5js.org/reference/): The official reference for all p5.js functions and features.
- [p5.js examples](https://p5js.org/examples/): A collection of example sketches to learn from.

### Getting Started

1. Open the [p5.js editor](https://editor.p5js.org/).
2. In order to save your work and share it with others, create a free account by clicking on the "Sign Up" button in the top right corner.
3. Once you are logged in, click on "New Sketch" to create a new project.

---

When working with p5.js, we will be using JavaScript, which is a programming language that allows us to create interactive and dynamic content on the web. If you are new to programming, don't worry! We will go through the basics together.

Most of our lines of code will consists of a command followed by some parameters. 
For example: 
- The command `createCanvas(400, 400);` creates a canvas of 400 pixels by 400 pixels. 
- The command `fill(255, 0, 0);` sets the fill color to red (using RGB values).
- The command `circle(200, 200, 50);` draws a circle at (200, 200) with a diameter of 50 pixels.


```javascript
function setup() {
  createCanvas(400, 400); // This creates a canvas of 400 pixels by 400 pixels
}
function draw() {
  background(220); // This sets the background color to a light gray
  fill(255, 0, 0); // This sets the fill color to red
  circle(200, 200, 50); // This draws a circle at (200, 200) with a diameter of 50 pixels
}
```

<sketch src="workshop-p5-01-01.js"></sketch>

All commands available in p5.js are listed in the [p5.js reference](https://p5js.org/reference/). You can click on any command to see more details about how it works and what parameters it takes.

---

## Basic Concepts in Programming

We've been discussing a few concepts in computer programming, such as variables, functions, and conditions. In p5.js, we will use these concepts to create visual and interactive sketches.

### Functions
Functions are reusable blocks of code that perform a specific task. In p5.js, there are two main functions that you will use in every sketch: `setup()` and `draw()`.

- `setup()`: This function runs once when the program starts. It is used to set up the initial environment properties such as screen size and background color, and to load media such as images and fonts as the program starts.
- `draw()`: This function continuously executes the lines of code contained inside its block until the program is stopped. It is used to create animations and interactive elements.
- Other built-in functions can be used, such as `mousePressed()`, which is called whenever the mouse is pressed. We will explore those next week.
- You can also create your own functions to organize your code and make it more reusable. More to come on that in the next workshop.

### Variables
Variables can be thought of as containers or "place holders" for storing a value. In p5.js, you can create a variable using the `let` keyword. For example:

```javascript
let posX = 100; // This creates a variable named 'posX' and assigns it the value of 100
let posY = 150; // This creates a variable named 'posY' and assigns it the value of 150
```
Notice that in my code, I'm using ```// comments``` at the end of each line, to explain what each line of code does. Comments are ignored by the computer and are only there for us to understand the code better.

We can incorporate these variables into our `draw()` function to make the circle's position animated:

```javascript
let posX = 50; // Initial position of the circle on the x-axis
let posY = 150;
function setup() {
  createCanvas(400, 400);
}
functions draw() {
  background(220);
  posX = posX + 1; // Increment posX by 1 to move the circle to the right
  fill(255, 0, 0);
  circle(posX, posY, 50); // Draw the circle at the position defined by posX and posY
}
```
<sketch src="workshop-p5-01-var1.js"></sketch>
(You may want to hit that "Replay" button to see the animation again)

### Conditions
Conditions allow our "app" to take different actions based on different circumstances. In p5.js, we can use `if` statements to create conditions. In theory this works like this:

```javascript
if (this) {
  than that
}
```

This is not a practical computer code, but it shows the structure of an `if` statement. The computer will check if the condition inside the parentheses is true, and if it is, it will execute the code inside the curly braces.

For example, we can check if a certain value is bigger than another value:

```javascript
if (posX > 375) {
  // Do something if posX is greater than 200
}
```

We can use this condition to reset the position of the circle when it goes off the canvas:

```javascript
let posX = 50;
let posY = 150;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  posX = posX + 1; // Move the circle to the right
  if (posX > 400) { // Check if the circle has moved off the canvas
    posX = 0; // Reset posX to 0 to start from the left again
  }
  fill(255, 0, 0);
  circle(posX, posY, 50);
}
```
<sketch src="workshop-p5-01-cond1.js"></sketch>

If we use a ```speed``` variable to control the speed of the circle, we can also use a condition to change the direction so that the circle bounces back and forth.

I can also "chain" multiple conditions together using ```OR``` and ```AND``` operators. The ```OR``` operator is represented by two vertical bars ```||```, and the ```AND``` operator is represented by two ampersands ```&&```. For example, we can check if the circle has moved off the canvas on either side:

```javascript
  if (posX > 375 || posX < 25) { // Check if the circle has moved off the canvas
    speed = -speed; // Reverse the direction of the speed
  }
```

In full, it would look like this:

```javascript
let posX = 50;
let posY = 150;
let speed = 3; // This variable controls the speed of the circle
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  posX = posX + speed; // Move the circle by adding the speed to pos
  if (posX > 375 || posX < 25) { // Check if the circle has moved off the canvas
    speed = -speed; // Reverse the direction of the speed
  }
  fill(255, 0, 0);
  circle(posX, posY, 50);
}
```
<sketch src="workshop-p5-01-cond2.js"></sketch>

---

Adding some movement to the Y position of the circle, we can complete our bouncing ball effect:

```javascript
let posX = 50;
let posY = 150;
let speedX = 3; // Speed in the x direction
let speedY = 2; // Speed in the y direction

function setup() {
  createCanvas(400, 400);
}

fundtion draw() {
  background(220);
  posX = posX + speedX; // Move the circle in the x direction
  posY = posY + speedY; // Move the circle in the y direction
  
  // Check if the circle has moved off the canvas in the x direction
  if (posX > 375 || posX < 25) {
    speedX = -speedX; // Reverse the direction of the speed in the x direction
  }
  
  // Check if the circle has moved off the canvas in the y direction
  if (posY > 375 || posY < 25) {
    speedY = -speedY; // Reverse the direction of the speed in the y direction
  }
  
  fill(255, 0, 0);
  circle(posX, posY, 50);
}
```
<sketch src="workshop-p5-01-cond3.js"></sketch>
