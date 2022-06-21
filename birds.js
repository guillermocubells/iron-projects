class Birds {
  constructor(img) {
    this.height = 48.9;
    this.width = 54;
    this.top = random(0, 540 - this.height);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
    this.img = img;
  }

  preload() {
  
  }

  drawBird() {
    // let randImg = random(birdImg)
    // for (let i = 0; i < 2; i++) {
    //  image(birdImg[i], this.left, this.top, this.width, this.height);
    // }
    image(this.img, this.left, this.top, this.width, this.height);
    // rect(this.left, this.top, this.width, this.height);
    this.left -= this.speed;
  }

  // // Making the bird flying up crazy
  // if (frameCount % 2 === 0) {
  //   this.top -= 9;
  // } else {
  //   this.top += 7;
  // }

  resetTopAndLeft() {
    this.top;
    this.left;
  }
}
