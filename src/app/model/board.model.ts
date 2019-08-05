import { Square, SquareType } from './square.model';
import { row, col, coord } from './coord.model';
import { Tile } from './tile.model';
import { t, p, s } from '@angular/core/src/render3';
import { start } from 'repl';

export enum placement {
  horizontal, vertical, invalid
}

export class Board {
  private board: Square[][];

  private tripleWord(t : SquareType) {

    this.board[row._1][col._A].setType(t);
    this.board[row._1][col._H].setType(t);
    this.board[row._1][col._O].setType(t);

    this.board[row._8][col._A].setType(t);
    this.board[row._8][col._O].setType(t);

    this.board[row._15][col._A].setType(t);
    this.board[row._15][col._H].setType(t);
    this.board[row._15][col._O].setType(t);

  }

  private doubleWord(t : SquareType) {

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

  private doubleLetter(t : SquareType){

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

  private tripleLetter(t : SquareType) {

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

  constructor() {
    this.board = [];

    // create squares
    for (let r: row = row._1; r <= row._15; r++) {
      this.board[r] = [];
      for (let c: col = col._A; c <= col._O; c++) {
        this.board[r][c] = new Square();
      }
    }

    // start
    this.board[row._8][col._H].setType(SquareType.start);

    // double letters
    this.doubleLetter(SquareType.dl);

    // triple letters
    this.tripleLetter(SquareType.tl);

    // double word
    this.doubleWord(SquareType.dw);

    // triple word
    this.tripleWord(SquareType.tw);


  }

  public SquaresVacant?(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this.board[r][c].IsOccupied())
          return false;
      }
    }

    return true;
  }

  public GetPlacmentValue(start: coord, end: coord) : number {

    let letterValue : number = 0;

    // letter based value - compute value of words based upon letters
    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        let square = this.board[r][c];
        letterValue += (square.getLetterMultiplier() * square.getTile().getValue());
      }
    }


    // word based value : compute word-based multipler
    let wordMultiplier : number = 1;
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

    switch (+tilePlacement) {
      case placement.vertical: {
        let row = start.row;
        tiles.forEach(t => {
          this.board[row++][start.col].place(t);
        })
        return row - 1;
        break;
      }
      case placement.horizontal: {
        let col = start.col;
        tiles.forEach(t => {
          this.board[start.row][col++].place(t);
        })
        return col - 1;
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

}
