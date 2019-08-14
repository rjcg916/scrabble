import { Util } from './util';
import { coord, col, row, SquareCount, Span } from './coord.model';
import { Board } from './board.model';
import { Square } from './square.model';

export enum placement {
  horizontal, vertical, invalid
}

interface IMove {
  findParallelRun(): Span
  findPerpendicularRun(coord): Span;
  findAllPerpendicularRuns(): Array<Span>;
}

export abstract class Move {
  protected tiles;
  protected length: number;
  constructor(protected board: Board, private start: coord, private letters: string) {
    this.tiles = Util.LettersToTiles(letters);
    this.length = letters.length;
  }
}

export class HorizontalMove extends Move implements IMove {
  private startCoord: coord;
  private endCoord: coord;
  constructor(board: Board, start: coord, letters: string) {
    super(board, start, letters);
    this.startCoord = start;
    this.endCoord = new coord(this.startCoord.row, this.startCoord.col + this.length);
  }

  public findParallelRun(): Span {
    return Util.findHorizontalRun(this.board, this.startCoord, this.endCoord);

    // replace
  }

  public findPerpendicularRun(aSquare: coord): Span {

    let slice = Util.getVerticalSlice(this.board, aSquare);

    let endpoints = Util.generateRun(slice, aSquare.row, aSquare.row);

    if (endpoints == null)
      return null;

    return {
      start: { row: endpoints.start, col: aSquare.col },
      end: { row: endpoints.end, col: aSquare.col }
    };

 //   return Util.findVerticalRun(this.board, aSquare, aSquare);


  }
  public findAllPerpendicularRuns(): Array<Span> {
    let runs = new Array<Span>();
    // test all squares in move row
    for (let c = this.startCoord.col; c <= this.endCoord.col; c++) {
      let run = this.findPerpendicularRun(new coord(this.startCoord.row, c));
      if (run != null)
        runs.concat(run);
    }
    return runs;
  }
}

export class VerticalMove extends Move implements IMove {
  private startCoord: coord;
  private endCoord: coord;
  constructor(board: Board, start: coord, letters: string) {
    super(board, start, letters);
    this.startCoord = start;
    this.endCoord = new coord(this.startCoord.row + this.length, this.startCoord.col);
  }
  public findParallelRun(): Span {

    return Util.findVerticalRun(this.board, this.startCoord, this.endCoord);

    // replace
  }

  public findPerpendicularRun(aSquare: coord): Span {

      let slice = Util.getHorizontalSlice(this.board, aSquare);
      let endpoints = Util.generateRun(slice, aSquare.col, aSquare.col);

      if (endpoints == null)
        return null;

      return {
        start: { row : aSquare.row, col: endpoints.start },
        end: { row: aSquare.row, col: endpoints.end }
      };

      //   return Util.findHorizontalRun(this.board, aSquare, aSquare);
  }

  public findAllPerpendicularRuns(): Array<Span> {
    let runs = new Array<Span>();
    // test all squares in move column +1/-1
    for (let r = this.startCoord.row; r <= this.endCoord.row; r++) {
      let run = this.findPerpendicularRun(new coord(r, this.startCoord.col));
      if (run != null)
        runs.concat(run);
    }
    return runs;
  }

}
