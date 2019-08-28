import { Square, SquareType } from './square.model';
import { SquareCount, row, col, coord, Span } from './coord.model';
import { Tile } from './tile.model';
import { Lexicon } from './lexicon.model';
import { Move, placement } from './move.model';

export class Col {
  public square: Square;
  constructor(public rowIndex, public colIndex) {
  }
}

export class Row {
  private _cols: Array<Col>;

  constructor(public rowIndex: number) {
    this._cols = [];
    for (let c = 0; c < 15; c++) {
      this._cols.push(new Col(this.rowIndex, c));
    }
  }

  get cols(): Array<Col> {
    return this._cols;
  }
}

export class Board {
  private _rows: Array<Row> = [];
  constructor() {
    for (let r = 0; r < 15; r++) {
      this._rows.push(new Row(r))
    }
  }
  get rows() : Array<Row>{
    return this._rows;
  }

  squaresVacant?(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this._rows[r].cols[c].square.isOccupied())
          return false;
      }
    }

    return true;
  }

 // return all the squares in a specified row
 getHorizontalSlice(row: row): Array<Square> {
  let slice = new Array<Square>(SquareCount);

  for (let c = col._A; c <= col._O; c++)
    slice[c] = this._rows[row].cols[c].square;

  return slice;
}

// return all the squares in a specified column

getVerticalSlice(col: col): Array<Square> {
  let slice = new Array<Square>(SquareCount);

  for (let r = row._1; r <= row._15; r++)
    slice[r] = this._rows[r].cols[col].square;

  return slice;
}

}
