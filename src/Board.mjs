export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(this.height).fill().map(() => Array(this.width).fill('.'));
    console.log(this.board);
  }

  toString() {
    let str = this.board[0].join('') + '\n' + this.board[1].join('')+ '\n' + this.board[2].join('') + '\n';
    console.log(str);
    return str;
  }
}
