class Birds {
  constructor(img) {
    this.height = 48;
    this.width = 54;
    this.top = random(0, 545 - this.height);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(4, 7);
    this.img = img;
  }

  preload() {}

  drawBird() {
    push();
    image(
      this.img,
      this.left,
      this.top,
      this.img.width / 15,
      this.img.height / 15
    );
    // rect(this.left, this.top, this.width, this.height);
    this.left -= this.speed;
    pop();

    // Making the bird fly up
    if (frameCount % 2 === 0) {
      this.top -= 2;
    } else {
      this.top += 2;
    }
  }
}
