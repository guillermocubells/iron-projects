class Player {
  // Positioning the player in the canvas and creating a floor
  constructor() {
    this.left = 75;
    this.top = 545;
    this.width = 50;
    this.height = 60;
    this.velocity = 0;
    this.floor = 600;
  }
  // Preloading the image of the player
  preload() {
    this.img = loadImage("./ice-assets/Ice Climber.png");
  }
  // Drawing the player in the given position
  drawPlayer() {
    image(this.img, this.left, this.top, this.width, this.height);
  }

  // Moving up the player

  moveUp() {
    if (this.top > 0) {
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
}
