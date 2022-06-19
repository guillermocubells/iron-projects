class Game {
  constructor() {
    this.player = new Player();
    this.rocks = [];
    // this.bird = new Birds();
    this.birds = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    // this.bird.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    // this.birds.drawBird();
    if (frameCount % 40 === 0) {
      this.birds.push(new Birds());
    }
    this.birds = this.birds.filter((bird) => {
      bird.drawBird();
      return bird.left >= -bird.width;
    });
  }
}
