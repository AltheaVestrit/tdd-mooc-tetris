export class Board {
  width;
  height;
  board;
  row;
  col;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  toString() {
    let str = this.board.map(row => row.join('')).join('\n') + '\n';
    return str;
  }

  drop() {
    this.col = Math.floor(this.width/2);
    this.row = 0;
    this.draw();
  }

  tick() {
    this.draw();
  }

  updateBoard() {
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
    this.board[this.row][this.col] = 'X';
  }
}
