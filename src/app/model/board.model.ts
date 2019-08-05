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

  constructor() {
    this.board = [];

    for (let r: row = row.r1; r <= row.r15; r++) {
      this.board[r] = [];
      for (let c: col = col.c1; c <= col.c15; c++) {
        this.board[r][c] = new Square();
      }
    }
  }

  public AreSquaresVacant(start: coord, end: coord): boolean {

    for (let r: row = start.row; r <= end.row; r++) {
      for (let c: col = start.col; c <= end.col; c++) {
        if (this.board[r][c].IsOccupied())
          return false;
      }
    }

    return true;
  }

  public PlacmentValue(start: coord, end: coord) : number {

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

  public PlacementType(tiles: Array<Tile>, start: coord, end: coord): placement {

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

  public getOccupiedCount(): number {
    let count: number = 0;

    for (let r: row = row.r1; r <= row.r15; r++) {
      for (let c: col = col.c1; c <= col.c15; c++) {
        count = this.board[r][c].IsOccupied() ? count + 1 : count;
      }
    }

    return count;
  }

}
