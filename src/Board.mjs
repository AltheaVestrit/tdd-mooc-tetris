export class Board {
  width;
  height;
  board;

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
    const mid = Math.floor(this.width/2);
    this.board[0][mid] = 'X';
  }
}
