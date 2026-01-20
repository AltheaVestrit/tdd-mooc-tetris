export class Board {
  width;
  height;
  board;
  row;
  col;
  falling = null;
  piece = 'X';

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  toString() {
    let str = this.board.map(row => row.join('')).join('\n') + '\n';
    return str;
  }

  drop(piece) {
    if (this.falling) {
      throw new Error("already falling");
    } else {
      this.piece = piece;
      this.falling = true;
      this.col = Math.floor(this.width/2);
      this.row = 0;
      this.board[this.row][this.col] = piece;
    }
  }

  tick() {
    if (this.row === this.height - 1 || !(this.board[this.row + 1][this.col] === '.')) {
      this.falling = false;
    } else {
      this.board[this.row][this.col] = '.';
      this.row += 1;
      this.board[this.row][this.col] = this.piece;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
