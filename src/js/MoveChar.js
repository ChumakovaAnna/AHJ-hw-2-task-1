import Char from "./Char";
// import GamePlay from "./GamePlay";

export default class MoveChar {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.indexCell = null;
  }
  
  getIndex() {
    return Math.floor(Math.random() * (this.gamePlay.getBorderSize() ** 2));
  }
  
  getNewIndex() {
    let index = this.getIndex();
      if (this.indexCell === index) {
        index = this.getIndex();
      }
    this.indexCell = index;
  }

  moveChar() {
    const idCell = `[data-id=cell_${this.indexCell}]`;
    const cell = document.querySelector(idCell);
    const char = new Char();
    char.creatChar();
    cell.insertAdjacentElement("beforeEnd", char.getChar());
  }
}