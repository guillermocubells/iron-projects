class Player {
  // Positioning the player in the canvas and creating a floor
  // Asigning it the top and left values that will be passed in the game
  constructor(top, left, span) {
    this.top = top;
    this.left = left;
    this.width = 50;
    this.height = 60;
    // this.velocity = 0;
    this.floor = 600;
    this.lifes = 1;
    this.deaths = 0;
    this.span = span;
  }
  // Preloading the image of the player
  preload() {
    this.img = loadImage("./ice-assets/Ice Climber.png");
  }
  // Drawing the player in the given position
  drawPlayer() {
    push();
    this.span.innerText = this.lifes;
    image(this.img, this.left, this.top, this.width, this.height);
    pop();
  }

  // Moving up the player

  moveUp() {
    if (this.top > -this.height) {
      this.top -= 10;
    }
  }

  // Moving down the player
  moveDown() {
    if (this.top <= CANVAS_HEIGHT - this.height) {
      this.top += 10;
    }
  }

  // Moving left the player
  moveLeft() {
    if (this.left > 0) {
      this.left -= 10;
    }
  }

  // Moving right the player (the -90 is to correct some image problems)
  moveRight() {
    if (this.left < CANVAS_WIDTH - this.width - 90) {
      this.left += 10;
    }
  }

  resetToStartPosition() {
    this.top = 545;
    this.left = 75;
  }
}
