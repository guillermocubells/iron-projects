class Game {
  constructor() {
    this.player = new Player(545, 75, playerLife, playerDeath, playerWin);
    this.birds = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    birdImg = loadImage("./ice-assets/Articbird0.png");
    birdImg2 = loadImage("./ice-assets/Articbird1.png");
    birdImg3 = loadImage("./ice-assets/Articbird2.png");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    this.player.moveUp();
    this.player.moveDown();
    this.player.moveRight();
    this.player.moveLeft();

    // Creates a bird every half of a second
    if (frameCount % 30 === 0) {
      let randImg = random([birdImg, birdImg2, birdImg3]);
      this.birds.push(new Birds(randImg));
      //console.log(this.birds) //its pushing birds in the array and its removing them when they are of canvas
    }

    // Draws each of the birds in the array
    this.birds.forEach((bird) => {
      bird.drawBird();
      //   console.log(this.bird)

      // Removes every bird that is no longer visible in the canvas
      this.birds = this.birds.filter((bird) => {
        return bird.left >= -bird.width;
      });

      // Collision method that restarts the player in the position of the Canvas
      if (this.isColliding(this.player, bird)) {
        // console.log("iscolliding");
        // Restarting the position of the player to a set position
        this.player.resetToStartPosition();

        // Substracting lifes from an ice climber
        this.player.lifes--;

        // When the value is less than 1, its game over for the lad
        if (this.player.lifes < 1) {
          this.player.lifes = ["Climbing is over, start again"];
          // Now you can substract from a string a life, so this is how we trick it
        } else if ((this.player.lifes = "NaN")) {
          this.player.lifes = 1;
        }

        //Adding deaths to the iceclimber to see how many times it lost
        this.player.deaths++;
       
      }
    });
    // If the player reaches almost the floor it is reminded that it can start again and then a life is added back to the player
    if (this.player.top < 530) {
      this.player.lifes = 1;
    }

    // If the player reaches the top a new span appears, saying to the player that he has won the game after dying x amounts of times
    if (this.player.top < -50) {
      if (this.player.deaths <= 0) {
        this.player.won = ["Thats icy, you made it on your first go"];
      }
      if (this.player.deaths <= 1) {
        this.player.won =
          ["You made it brother, the death of "] +
          this.player.deaths +
          [" ice climber was not in vain"];
      }
      if (this.player.deaths > 1) {
        this.player.won =
          ["You made it brother, the death of "] +
          this.player.deaths +
          [" ice climbers was not in vain"];
      }
    }
  }

  isColliding(player, birds) {
    // Locating the position of the player botton vs the bird top
    // The player bottom has to be bigger than the top of the bird, otherwise they would be colliding
    const bottomOfPlayer = player.top + player.height;
    const topOfBird = birds.top + 25;
    const isBottomOfPlayerBiggerThenTopOfBird = bottomOfPlayer > topOfBird;

    // Locating the position of the player top vs the bird bottom.
    // The player top has to be smaller otherwise it would be colliding with the bottom of the bird
    const topOfPlayer = player.top;
    const bottomOfBird = birds.height + birds.top - 35;
    const isTopOfPlayerSmallerThanBottomOfBird = topOfPlayer <= bottomOfBird;

    // Locating the position of the player left vs the right of the bird
    // The player left has to be smaller or equal than the right of the bird
    const leftOfPlayer = player.left;
    const rightOfBird = birds.left + birds.width - 30;
    const isLeftOfPlayerSmallerThanRightOfBird = leftOfPlayer <= rightOfBird;

    // Locating the position of the player right and the bird left
    // The player right has to be bigger or equal than the left of the bird
    const rightOfPlayer = player.width + player.left;
    const leftOfBird = birds.left + 30;
    const isRightOfPlayerBiggerThanLeftOfBird = rightOfPlayer >= leftOfBird;

    // returns the constants in a boolean way
    return (
      isBottomOfPlayerBiggerThenTopOfBird &&
      isTopOfPlayerSmallerThanBottomOfBird &&
      isLeftOfPlayerSmallerThanRightOfBird &&
      isRightOfPlayerBiggerThanLeftOfBird
    );
  }
}
