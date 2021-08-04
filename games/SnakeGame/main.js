const board = document.getElementById("game-board");
const ctx = board.getContext("2d");

class SnakeBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 4;

let tileCount = 20;
let tileSize = board.width / tileCount - 2;
let headX = 10;
let headY = 10;
const snakeBodyParts = [];
let tailLength = 2;

let foodX = Math.floor(Math.random() * tileCount);
let foodY = Math.floor(Math.random() * tileCount);

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

function refreshScreen() {
  clear();
  moveSnake();

  food();
  checkFoodCollected();
  snake();

  score();

  setTimeout(refreshScreen, 1000 / speed);
}

function score() {
  ctx.fillStyle = "white";
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
}

function snake() {
  ctx.fillStyle = "green";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

  for (let i = 0; i < snakeBodyParts.length; i++) {
    let part = snakeBodyParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeBodyParts.push(new SnakeBody(headX, headY));
  if (snakeBodyParts.length > tailLength) {
    snakeBodyParts.shift();
  }
}

function moveSnake() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function food() {
  ctx.fillStyle = "red";
  ctx.fillRect(foodX * tileCount, foodY * tileCount, tileSize, tileSize);
}

function checkFoodCollected() {
  if (foodX === headX && foodY === headY) {
    foodX = Math.floor(Math.random() * tileCount);
    foodY = Math.floor(Math.random() * tileCount);
    tailLength++;
  }
}

document.body.addEventListener("keydown", moveCommands);

function moveCommands(e) {
  const arrow = e.keyCode;

  if (arrow == 38) {
    //move up
    if (yVelocity == 1) return; //prevent going down while we are going up
    yVelocity = -1;
    xVelocity = 0;
  } else if (arrow == 40) {
    // move down
    if (yVelocity == -1) return; //prevent going up while we are going down
    yVelocity = 1;
    xVelocity = 0;
  } else if (arrow == 37) {
    // move left
    if (xVelocity == 1) return; //prevent going right while we are going left
    yVelocity = 0;
    xVelocity = -1;
  } else if (arrow == 39) {
    // move down
    if (xVelocity == -1) return; //prevent going left while we are going right
    yVelocity = 0;
    xVelocity = 1;
  }
}

refreshScreen();
