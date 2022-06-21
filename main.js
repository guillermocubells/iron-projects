const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(200, 600);
}

function draw() {
  background("orange");
  game.play();
}

// Assigning the moving functionality to the player

function keyPressed() {
  if (keyCode === ARROW_DOWN) {
    game.player.moveDown();
  } else if (keyCode === ARROW_UP) {
    game.player.moveUp();
  } else if (keyCode === ARROW_LEFT) {
    game.player.moveLeft();
  } else if (keyCode === ARROW_RIGHT) {
    game.player.moveRight();
  }
}
