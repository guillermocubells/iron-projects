class Player {
  // Positioning the player in the canvas and creating a floor
  // Asigning it the top and left values that will be passed in the game
  constructor(top, left, span1, span2, span3) {
    this.top = top;
    this.left = left;
    this.width = 50;
    this.height = 60;
    this.floor = 540;
    this.lifes = 1;
    this.deaths = 0;
    this.won = "";
    this.span1 = span1;
    this.span2 = span2;
    this.span3 = span3;
  }
  // Preloading the image of the player
  preload() {
    this.img = loadImage("./ice-assets/Ice Climber.png");
  }
  // Drawing the player in the given position
  drawPlayer() {
    push();
    this.span1.innerText = this.lifes;
    this.span2.innerText = this.deaths;
    this.span3.innerText = this.won;
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

  hasReachedTheGround() {
    return this.top >= this.floor;
  }

  resetToStartPosition() {
    // if (this.hasReachedTheGround()) {
    //   this.top = this.floor;
    //   this.velocity = 0;
    //   this.left = 75;
    // }
    this.top = 545;
    this.left = 75;
  }
}
