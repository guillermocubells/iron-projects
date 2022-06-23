class Birds {
  constructor(img) {
    this.height = 48;
    this.width = 54;
    this.top = random(0, 540 - this.height);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
    this.img = img;
  }

  preload() {}

  drawBird() {
    push();
    for (let i = 0; i < 2; i++) {
      let randImg;
      image(birdImg[i], this.left, this.top, this.width, this.height);
      randImg++;
      // let randImg = random(birdImg[i])
    }
    // image(this.img, this.left, this.top, this.width, this.height);
    // rect(this.left, this.top, this.width, this.height);
    this.left -= this.speed;
    pop();

    // Making the bird fly down
    if (frameCount % 2 === 0) {
      this.top -= 2;
    } else {
      this.top += 1;
    }
  }
}
