class Background {
  constructor() {
    this.top = 0;
  }

  preload() {
    this.img = loadImage("./ice-assets/Ice image copy.png");
  }

  drawBackground() {
    image(this.img, 0,this.top, CANVAS_WIDTH, 600);
    image(this.img, 0, this.top - CANVAS_HEIGHT, CANVAS_WIDTH, 600);
    this.top += 0.1;

    if (this.top >= CANVAS_HEIGHT) {
      this.top = 0;
    }
  }
}
