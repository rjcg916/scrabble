import {Square, SquareType} from './square.model';
import {Tile} from './tile.model';

enum row {
  r1, r2, r3, r4, r5, r6, r7, r8,
  r9, r10, r11, r12, r13, r14, r15
}
enum col {
  c1, c2, c3, c4, c5, c6, c7, c8,
  c9, c10, c11, c12, c13, c14, c15
}

export class Board {
  private board: Square[][];
  constructor() {
    this.board = [];

    for (let r: row = 0; r < 15; r++) {
        this.board[r] = [];
        for (let c: col = 0; c < 10; c++) {
            this.board[r][c] = new Square();
        }
    }

  }

  public placeTile( tile : Tile, row : row, col : col) {
      this.board[row][col].place(tile)        
  }
}
