export class Board {
  width;
  height;
  board;
  row;
  col;
  falling = null;
  piece; // falling piece in array form
  size; // dimensions of falling piece (= always a square)

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  toString() {
    let str = this.board.map(row => row.join('')).join('\n') + '\n';
    return str;
  }

  #stringToShape(str) {
    let shape = str
    .replaceAll(" ","")
    .trim().split('\n')
    .map((row) => row.split(''));
    return shape;           
  }

  drop(piece) {
    if (this.falling) {
      throw new Error("already falling");
    } else {
      if (typeof piece === String) {
        this.piece = this.#stringToShape(piece);
      } else {
        this.piece = this.#stringToShape(piece.toString());
      }
      this.size = this.piece.length;
      this.falling = true;
      this.col = Math.floor(this.width/2 - this.size/2);
      this.row = 0;
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.piece[i][j] != ".") {
            this.board[i][j+this.col] = this.piece[i][j];
          }
        }
      }
    }
  }

  tick() {
    //TODO: Modify the check for a piece below the current falling piece
    if (this.row === this.height - 1 || !(this.board[this.row + 1][this.col] === '.')) {
      this.falling = false;
    } else {
      //TODO: fix code for moving piece one row down
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.piece[i][j] != ".") {
            this.board[this.row + i][this.col + j] === ".";
            this.board[this.row + 1 + i][this.col + j] === this.piece[i][j];}
        }
      }
      this.row += 1;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
