export class Board {
  width;
  height;
  board;
  row;
  col;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
    this.falling = false;
  }

  toString() {
    let str = this.board.map(row => row.join('')).join('\n') + '\n';
    return str;
  }

  drop() {
    this.col = Math.floor(this.width/2);
    this.row = 0;
    this.updateBoard();
  }

  tick() {
    this.row += 1;
    this.updateBoard();
  }

  updateBoard() {
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
    this.board[this.row][this.col] = 'X';
  }
}
