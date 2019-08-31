import { Square, SquareType } from './square.model';
import { SquareCount, row, col, coord, Span } from './coord.model';
import { Tile } from './tile.model';
import { Move} from './move.model';

export class Col {
  private _square: Square;
  constructor(private _row : row, private _col : col) {
    this._square = new Square();
  }
  get r() : string {
    return  row[this._row].substr(1);
  }

  get c() : string {
    return col[this._col].substr(1);
  }
  get square() {
    return this._square;
  }
}

export class Row {
  private _cols: Array<Col>;

  constructor(private _rowIndex: number) {
    this._cols = [];
    for (let c = col._A; c <= col._O; c++) {
      this._cols.push(new Col(this._rowIndex, c));
    }
  }

  get r() : number {
    return this._rowIndex;
  }
  get cols(): Array<Col> {
    return this._cols;
  }
}

export class Board {
  static lastRow = row._15;
  static lastCol = col._O;
  static rowCount = row._1 - row._15 + 1;
  static colCount = col._A - col._O + 1;

  private _rows: Array<Row> = [];
  constructor() {

    for (let r = row._1; r <= row._15; r++) {
      this._rows.push(new Row(r))
    }

    // set square values

    this.SetAllSquareValues();

  }

  get rows(): Array<Row> {
    return this._rows;
  }


  getCols(row: number) {
    this._rows[row].cols;
  }


  // true if all the squares within the specified
  // are vacant
  squaresVacant?(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this._rows[r].cols[c].square.isOccupied)
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

  // ToDo ? stringify a square
  // generate a potential word from a range of squares
  getWordFromSquares(start: coord, end: coord): string {

    let aString: string = "";

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        // todo: handle missing tile
        let square = this._rows[r].cols[c].square;
        if (square.isOccupied)
          aString = aString.concat(square.tile.letter);
        else
          return "";
      }
    }

    return aString;

  }

      // generate a list of words created by move
  candidateWords(theMove: Move): Array<string> {

    return new Array<string>();
  }



  // compute the value of a potential move defined by
  // the specified range
  getPlacmentValue(start: coord, end: coord): number {

    let letterValue: number = 0;

    // letter based value - compute value of words based upon letters
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this._rows[r].cols[c].square;
        letterValue += (square.LetterMultiplier * square.tile.value);
      }
    }


    // word based value : compute word-based multipler
    let wordMultiplier: number = 1;
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this._rows[r].cols[c].square;
        wordMultiplier *= square.WordMultiplier;
      }
    }

    // apply wordMultipler to letterValue for final value
    return letterValue * wordMultiplier
  }



  PlaceTilesVertical(start: coord, tiles: Array<Tile>): row {

    let currentRow: number = start.row;
    let maxRow: number = row._15;
    let currentTile = 0;

    do {
      this._rows[currentRow++].cols[start.col].square.tile = tiles[currentTile++];
    } while ((currentRow <= maxRow) && (currentTile < tiles.length))

    return currentRow - 1;
  }


  PlaceTilesHorizontal(start: coord, tiles: Array<Tile>): col {

    let currentCol: number = start.col;
    let maxCol: number = col._O;
    let currentTile = 0;

    do {
      this._rows[start.row].cols[currentCol++].square.tile = tiles[currentTile++];
    } while ((currentCol <= maxCol) && (currentTile < tiles.length))

    return currentCol - 1;

  }


  getOccupiedCount(): number {
    let count: number = 0;

    for (let r: row = row._1; r <= row._15; r++) {
      for (let c: col = col._A; c <= col._O; c++) {
        count = this._rows[r].cols[c].square.isOccupied ? count + 1 : count;
      }
    }

    return count;
  }

  private SetAllSquareValues() {

    // start
    this._rows[row._8].cols[col._H].square.type = SquareType.start;

    // triple letters
    this.SetSquareValues(SquareType.tl,
      [
        new coord(row._2, col._F),
        new coord(row._2, col._J),

        new coord(row._6, col._B),
        new coord(row._6, col._F),
        new coord(row._6, col._J),
        new coord(row._6, col._N),

        new coord(row._10, col._B),
        new coord(row._10, col._F),
        new coord(row._10, col._J),
        new coord(row._10, col._N),

        new coord(row._14, col._F),
        new coord(row._14, col._J),


      ]);

    // double letters
    this.SetSquareValues(SquareType.dl, [

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
      new coord(row._15, col._L),
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

        new coord(row._11, col._E),
        new coord(row._11, col._K),

        new coord(row._12, col._D),
        new coord(row._12, col._L),

        new coord(row._13, col._C),
        new coord(row._13, col._M),

        new coord(row._14, col._B),
        new coord(row._14, col._N)

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
