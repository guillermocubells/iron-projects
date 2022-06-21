class Birds {
  constructor() {
    this.height = 15;
    this.width = 15;
    this.top = random(0, 540 - this.height);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
  }
  preload() {
    for (let i = 0; i < 2; i++) {
      birdImg[i] = loadImage("./ice-assets/Articbird" + i + ".png");
      // console.log(birdImg[i])
    }
  }

  drawBird(i) {
    // push();
    // fill("blue");

    // image(this.image, this.left, this.top, this.width, this.height)
    // image(birdImg[i], this.left, this.top, this.width, this.height);

    rect(this.left, this.top, this.width, this.height);
    this.left -= this.speed;
    // pop();

    // Making the bird flying up crazy
    if (frameCount % 2 === 0) {
      this.top -= 9;
    } else {
      this.top += 7;
    }
  }
  resetTopAndLeft() {
    this.top;
    this.left;
  }
}
