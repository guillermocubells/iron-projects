class Birds {
  constructor() {
    this.height = 20;
    this.width = 20;
    this.top = random(0, 540 - this.height);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
    this.image = img;
  }
  // preload() {
  //   img = loadImage("/ice-assets/Articbird.png");
  // }

  drawBird() {
    // image(img, this.left, this.top, this.width, this.height);
    rect(this.left, this.top, this.width,this.height)
    this.left -= this.speed;
    if (frameCount % 2 === 0) {
      this.top -= 5;
    } else {
      this.top += 5;
    }
  }
}
