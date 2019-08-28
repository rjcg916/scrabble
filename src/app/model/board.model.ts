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

    // set square values

    this.SetAllSquareValues();

  }

  get rows(): Array<Row> {
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

  private SetAllSquareValues() {

    // start
    this._rows[row._8].cols[col._H].square.type = SquareType.start;

    // double letters
    this.SetSquareValues(SquareType.dl,
      [
        new coord(row._1, col._D),
        new coord(row._1, col._L),
        new coord(row._3, col._G),
        new coord(row._3, col._I),
        new coord(row._4, col._A),
        new coord(row._4, col._H),
        new coord(row._4, col._O),
        new coord(row._7, col._C),
        new coord(row._7, col._G),
        new coord(row._7, col._I),
        new coord(row._7, col._M),
        new coord(row._8, col._D),
        new coord(row._8, col._L),
        new coord(row._9, col._C),
        new coord(row._9, col._G),
        new coord(row._9, col._I),
        new coord(row._9, col._M),
        new coord(row._12, col._A),
        new coord(row._12, col._H),
        new coord(row._12, col._O),
        new coord(row._13, col._G),
        new coord(row._13, col._I),
        new coord(row._15, col._D),
        new coord(row._15, col._L)
      ]);

    // triple letters
    this.SetSquareValues(SquareType.tl, [

      new coord(row._2, col._F),
      new coord(row._2, col._J),
      new coord(row._6, col._B),
      new coord(row._6, col._F),
      new coord(row._6, col._J),
      new coord(row._6, col._N),
      new coord(row._14, col._F),
      new coord(row._14, col._J),
      new coord(row._10, col._B),
      new coord(row._10, col._F),
      new coord(row._10, col._J),
      new coord(row._10, col._N)
    ]);

    // double word
    this.SetSquareValues(SquareType.dw,
      [
        new coord(row._2, col._B),
        new coord(row._2, col._N),
        new coord(row._3, col._C),
        new coord(row._3, col._M),
        new coord(row._4, col._D),
        new coord(row._4, col._L),
        new coord(row._5, col._E),
        new coord(row._5, col._K),
        new coord(row._14, col._B),
        new coord(row._14, col._N),
        new coord(row._13, col._C),
        new coord(row._13, col._M),
        new coord(row._12, col._D),
        new coord(row._12, col._L),
        new coord(row._11, col._E),
        new coord(row._11, col._K)
      ]);

    // triple word
    this.SetSquareValues(
      SquareType.tw,
      [
        new coord(row._1, col._A),
        new coord(row._1, col._H),
        new coord(row._1, col._O),

        new coord(row._8, col._A),
        new coord(row._8, col._O),

        new coord(row._15, col._A),
        new coord(row._15, col._H),
        new coord(row._15, col._O)
      ]
    );

  }

  private SetSquareValues(t: SquareType, locs: Array<coord>) {
    locs.forEach(square => {
      this._rows[square.row].cols[square.col].square.type = t;
    });
  }


}
