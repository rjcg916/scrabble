import { Square, SquareType } from './square.model';
import { row, col, coord } from './coord.model';
import { Tile } from './tile.model';
import { t, p, s, L } from '@angular/core/src/render3';
import { start } from 'repl';
import { assertDataInRangeInternal } from '@angular/core/src/render3/util';
import { Util } from './util';
import { Lexicon } from './lexicon.model';

export enum placement {
  horizontal, vertical, invalid
}

export class Move {
  private tiles;
  constructor(private startAt: coord, private letters: string, alignment: placement) {
    this.tiles = Util.wordToTiles(letters);
  }
}

export class Span {
  constructor(public start: coord, public end: coord) { }
}

export class Board {
  private board: Square[][];

  constructor() {
    this.board = [];

    // create squares
    for (let r: row = row._1; r <= row._15; r++) {
      this.board[r] = [];
      for (let c: col = col._A; c <= col._O; c++) {
        this.board[r][c] = new Square();
      }
    }

    // set square values

    // start
    this.board[row._8][col._H].setType(SquareType.start);

    // double letters
    this.doubleLetter(SquareType.dl);

    // triple letters
    this.tripleLetter(SquareType.tl);

    // double word
    this.doubleWord(SquareType.dw);

    // triple word
    this.tripleWord();


  }


  public squaresToWord(start: coord, end: coord): string {

    let aString: string = "";

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        // todo: handle missing tile
        let square = this.board[r][c];
        if (square.IsOccupied())
          aString = aString.concat(square.getTile().getLetter());
        else
          return "";
      }
    }

    return aString;

  }


  public findHorizontalRun(startAt: coord): Span {

    let startCol  = startAt.col;
    let leftCol    = startAt.col;
    let rightCol = startAt.col;

    // if at top, no run
    if (startCol > col._A) {
      leftCol = col._A;
      // check for run above
      for (let c = startCol - 1; c >= col._A; c--) {
        if (!this.board[startAt.row][c].IsOccupied()) {
          leftCol = c + 1;
          break;
        }
      }
    }
    // if at bottom, no run
    if (startCol < col._O) {
      rightCol = col._O;
      // check for run below
      for (let c = startCol + 1; c <= col._O; c++) {
        if (!this.board[startAt.row][c].IsOccupied()) {
          rightCol = c - 1;
          break;
        }
      }
    }

    if (leftCol == rightCol)
      return null;

    if ((rightCol != startCol ) && (leftCol != startCol))
      return new Span(new coord(startAt.row, leftCol), new coord(startAt.row, rightCol));

    if (leftCol != startCol)
      return new Span(new coord(startAt.row, leftCol), new coord(startAt.row, startAt.col));

    if (rightCol != startCol)
      return new Span(new coord(startAt.row, startAt.col), new coord(startAt.row, rightCol));

  }

  public findVerticalRun(startAt: coord): Span {

    let startRow  = startAt.row;
    let topRow    = startAt.row;
    let bottomRow = startAt.row;

    // if at top, no run
    if (startRow > row._1) {
      topRow = row._1;
      // check for run above
      for (let r = startRow - 1; r >= row._1; r--) {
        if (!this.board[r][startAt.col].IsOccupied()) {
          topRow = r + 1;
          break;
        }
      }
    }
    // if at bottom, no run
    if (startRow < row._15) {
      bottomRow = row._15;
      // check for run below
      for (let r = startRow + 1; r <= row._15; r++) {
        if (!this.board[r][startAt.col].IsOccupied()) {
          bottomRow = r - 1;
          break;
        }
      }
    }

    if (bottomRow == topRow)
      return null;

    if ((bottomRow != startRow ) && (topRow != startRow))
      return new Span(new coord(topRow, startAt.col), new coord(bottomRow, startAt.col));

    if (topRow != startRow)
      return new Span(new coord(topRow, startAt.col), new coord(startAt.row, startAt.col));

    if (bottomRow != startRow)
      return new Span(new coord(startAt.row, startAt.col), new coord(bottomRow, startAt.col));

  }


  public candidateWords(theMove: Move): Array<string> {
    // generate a list of words created by move

    return new Array<string>();
  }

  public allValidWords(words: Array<string>): boolean {
    let lexicon = new Lexicon();
    // for each candidate, check
    words.forEach(w => {
      if (!lexicon.validWord(w))
        return false;
    })
    return true;
  }

  //public squaresVacant(theMove : Move) : boolean {
  //  return true;
  //}
  public SquaresVacant?(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this.board[r][c].IsOccupied())
          return false;
      }
    }

    return true;
  }

  public GetPlacmentValue(start: coord, end: coord): number {

    let letterValue: number = 0;

    // letter based value - compute value of words based upon letters
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this.board[r][c];
        letterValue += (square.getLetterMultiplier() * square.getTile().getValue());
      }
    }


    // word based value : compute word-based multipler
    let wordMultiplier: number = 1;
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this.board[r][c];
        wordMultiplier *= square.getWordMultiplier();
      }
    }

    // apply wordMultipler to letterValue for final value
    return letterValue * wordMultiplier
  }

  public GetPlacementType(tiles: Array<Tile>, start: coord, end: coord): placement {

    let horizontal: boolean = start.row === end.row;
    let horizontalNumberOfTiles: number = end.col - start.col + 1;
    let vertical: boolean = start.col === end.col;
    let verticalNumberOfTiles: number = end.row - start.row + 1;
    let oneTile: boolean = horizontal && vertical;
    let numberOfTiles: number = tiles.length;

    if (horizontal && vertical && (!oneTile))
      return placement.invalid
    else {
      if (horizontal && (horizontalNumberOfTiles === numberOfTiles))
        return placement.horizontal
      else if (vertical && (verticalNumberOfTiles === numberOfTiles))
        return placement.vertical
      else
        return placement.invalid
    }

  }

  public PlaceTiles(start: coord, tiles: Array<Tile>, tilePlacement: placement): number {
    // return last index
    switch (+tilePlacement) {
      case placement.vertical: {
        let row = start.row - 1;
        tiles.forEach(t => {
          this.board[++row][start.col].place(t);
        })
        return row ;
        break;
      }
      case placement.horizontal: {
        let col = start.col - 1;
        tiles.forEach(t => {
          this.board[start.row][++col].place(t);
        })
        return col;
        break;
      }
      case placement.invalid: {
        return 0;
        break;
      }
    }
  }

  public GetOccupiedCount(): number {
    let count: number = 0;

    for (let r: row = row._1; r <= row._15; r++) {
      for (let c: col = col._A; c <= col._O; c++) {
        count = this.board[r][c].IsOccupied() ? count + 1 : count;
      }
    }

    return count;
  }


  private setSquareValue(locs: Array<coord>, t: SquareType) {
    locs.forEach(square => {
      this.board[square.row][square.col].setType(t)
    });
  }

  private tripleWord() {
    this.setSquareValue(
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
      , SquareType.tw
    )
  }

  private doubleWord(t: SquareType) {

    this.board[row._2][col._B].setType(t);
    this.board[row._2][col._N].setType(t);

    this.board[row._3][col._C].setType(t);
    this.board[row._3][col._M].setType(t);

    this.board[row._4][col._D].setType(t);
    this.board[row._4][col._L].setType(t);

    this.board[row._5][col._E].setType(t);
    this.board[row._5][col._K].setType(t);

    this.board[row._14][col._B].setType(t);
    this.board[row._14][col._N].setType(t);

    this.board[row._13][col._C].setType(t);
    this.board[row._13][col._M].setType(t);

    this.board[row._12][col._D].setType(t);
    this.board[row._12][col._L].setType(t);

    this.board[row._11][col._E].setType(t);
    this.board[row._11][col._K].setType(t);

  }

  private doubleLetter(t: SquareType) {

    this.board[row._1][col._D].setType(t);
    this.board[row._1][col._L].setType(t);

    this.board[row._3][col._G].setType(t);
    this.board[row._3][col._I].setType(t);

    this.board[row._4][col._A].setType(t);
    this.board[row._4][col._H].setType(t);
    this.board[row._4][col._O].setType(t);

    this.board[row._7][col._C].setType(t);
    this.board[row._7][col._G].setType(t);
    this.board[row._7][col._I].setType(t);
    this.board[row._7][col._M].setType(t);

    this.board[row._8][col._D].setType(t);
    this.board[row._8][col._L].setType(t);

    this.board[row._9][col._C].setType(t);
    this.board[row._9][col._G].setType(t);
    this.board[row._9][col._I].setType(t);
    this.board[row._9][col._M].setType(t);

    this.board[row._12][col._A].setType(t);
    this.board[row._12][col._H].setType(t);
    this.board[row._12][col._O].setType(t);

    this.board[row._13][col._G].setType(t);
    this.board[row._13][col._I].setType(t);

    this.board[row._15][col._D].setType(t);
    this.board[row._15][col._L].setType(t);

  }

  private tripleLetter(t: SquareType) {

    this.board[row._2][col._F].setType(t);
    this.board[row._2][col._J].setType(t);

    this.board[row._6][col._B].setType(t);
    this.board[row._6][col._F].setType(t);
    this.board[row._6][col._J].setType(t);
    this.board[row._6][col._N].setType(t);

    this.board[row._14][col._F].setType(t);
    this.board[row._14][col._J].setType(t);

    this.board[row._10][col._B].setType(t);
    this.board[row._10][col._F].setType(t);
    this.board[row._10][col._J].setType(t);
    this.board[row._10][col._N].setType(t);

  }

}
