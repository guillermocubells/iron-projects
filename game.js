class Game {
  constructor() {
    this.player = new Player();
    // this.birds = new Birds([]);
    this.birds = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    birdImg = loadImage("./ice-assets/Articbird0.png");
    // --> Loading multiple images of an array maybe
    // for (let i = 0; i < 2; i++) {
    //     birdImg[i] = loadImage("./ice-assets/Articbird" + i + ".png");
    //   //   // console.log(birdImg[i])
    //   }
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    // this.birds.drawBird();
    if (frameCount % 30 === 0) {
      this.birds.push(new Birds(birdImg));
    }
    this.birds = this.birds.filter((bird) => {
      bird.drawBird();
      return bird.left >= -bird.width;
    });
  }

  isColliding(player, bird) {
    const bottomOfA = player.top + player.height;
    const topOfB = bird.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = player.top;
    const bottomOfB = bird.height + bird.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = player.left;
    const rightOfB = bird.left + bird.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = player.width + player.left;
    const leftOfB = bird.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
}
