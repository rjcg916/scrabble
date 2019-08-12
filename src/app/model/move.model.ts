import { Util } from './util';
import { coord, col, row, SquareCount, Span } from './coord.model';
import { Board } from './board.model';
import { Square } from './square.model';

export enum placement {
  horizontal, vertical, invalid
}


export class Move {

  private tiles;

  constructor(private board: Board, private start: coord, private letters: string) {
    this.tiles = Util.LettersToTiles(letters);
  }

  protected findVerticalRun(start: coord, end: coord): Span {
    let slice = new Array<Square>(SquareCount);

    let col = start.col;

    for (let r = row._1; r <= row._15; r++)
      slice[r] = this.board[r][col];

    let endpoints = Util.generateRun(slice, start.row, end.row);

    if (endpoints == null)
      return null;

    return {
      start: { row: endpoints.start, col: col },
      end: { row: endpoints.end, col: col }
    };
  }

  protected findHorizontalRun(start: coord, end: coord): Span {
    let slice = new Array<Square>(SquareCount);

    let row = start.row;

    for (let c = col._A; c <= col._O; c++)
      slice[c] = this.board[row][c];

    let endpoints = Util.generateRun(slice, start.col, end.col);

    if (endpoints == null)
      return null;

    return {
      start: { row: row, col: endpoints.start },
      end: { row: row, col: endpoints.end }
    };
  }


}

export class HorizontalMove extends Move {

  public findSecondaryRun(start: coord): Span {
    return this.findVerticalRun(start, start);
  }

  public findRun(start: coord, end: coord): Span {
    return this.findHorizontalRun(start, end);
  }

}

export class VerticalMove extends Move {

  public findSecondaryRun(start: coord): Span {
    return this.findHorizontalRun(start, start);
  }
  public findRun(start: coord, end: coord): Span {
    return this.findVerticalRun(start, end);
  }

}
