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

let puntuation = 0;

function refreshScreen() {
  moveSnake();
  let result = isGameOver();
  if (result) {
    return;
  }

  clear();

  food();
  checkFoodCollected();
  snake();

  score();

  if (score % 10) {
    speed = speed * 1.3;
  }

  setTimeout(refreshScreen, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (xVelocity === 0 && yVelocity === 0) {
    return false;
  }

  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  } else if (headX < 0) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBodyParts.length; i++) {
    let part = snakeBodyParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }
  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";
    ctx.fillText("Game Over!", board.width / 7, board.height / 2);
  }
  return gameOver;
}

function score() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + puntuation, board.width - 50, 15);
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
}

function snake() {
  ctx.fillStyle = "green";

  for (let i = 0; i < snakeBodyParts.length; i++) {
    let part = snakeBodyParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeBodyParts.push(new SnakeBody(headX, headY));
  if (snakeBodyParts.length > tailLength) {
    snakeBodyParts.shift();
  }

  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
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
    puntuation++;
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
