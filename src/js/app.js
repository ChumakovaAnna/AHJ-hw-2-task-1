import GamePlay from "./GamePlay";
// import Char from "./Char";
import MoveChar from "./MoveChar";

console.log("it works!");

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector(".container"));
gamePlay.drawUi();

const moveChar = new MoveChar(gamePlay);
console.log(moveChar.getIndex());
