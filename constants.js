let birdImg; 
let birdImg2;
let birdImg3;

const playerLife = document.querySelector(".playerLife span");
const playerDeath = document.querySelector(".playerDeath span");
const playerWin = document.querySelector(".playerWin span")


const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 600;
const PLAYER_MOVE = CANVAS_WIDTH / 10;
const GRAVITY = 0.2;
