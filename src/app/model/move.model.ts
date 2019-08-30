import { Util } from './util.model';
import { coord, Span } from './coord.model';
import { Board } from './board.model';

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
  protected startCoord: coord;
  protected endCoord: coord;
  constructor(protected board: Board, private start: coord, private letters: string) {
    this.tiles = Util.LettersToTiles(letters);
    this.length = letters.length;
  }
}

export class HorizontalMove extends Move implements IMove {
  constructor(board: Board, start: coord, letters: string) {
    super(board, start, letters);
    this.startCoord = start;
    this.endCoord = new coord(this.startCoord.row, this.startCoord.col + this.length);
  }

  getEndCoord() : coord
  { return this.endCoord}

  // public EndForMove(count: number, orientation: placement): coord {
  //   let end: coord;
  //   if (orientation == placement.horizontal) {
  //     end = new coord(this.row, this.col + count);
  //   } else if (orientation == placement.vertical) {
  //     end = new coord(this.row + count, this.col)
  //   }
  //   return end;
  // }

  findParallelRun(): Span {
    //  return Util.findHorizontalRun(this.board, this.startCoord, this.endCoord);

    let slice = this.board.getHorizontalSlice(this.startCoord.row);

    let endpoints = Util.generateRun(slice, this.startCoord.col, this.endCoord.col);

    if (endpoints == null)
      return null;

    let startCoord = new coord(this.startCoord.row, endpoints.start);
    let endCoord = new coord(this.startCoord.row, endpoints.end);

    return {
    //  start: { row: this.startCoord.row, col: endpoints.start },
      start : startCoord,
//      end: { row: this.startCoord.row, col: endpoints.end }
      end: endCoord
    };

  }

  findPerpendicularRun(aSquare: coord): Span {

    let slice = this.board.getVerticalSlice(aSquare.col);

    let endpoints = Util.generateRun(slice, aSquare.row, aSquare.row);

    if (endpoints == null)
      return null;

    let startCoord = new coord(endpoints.start, aSquare.col);
    let endCoord = new coord(endpoints.end, aSquare.col);

    return {
//      start: { row: endpoints.start, col: aSquare.col },
 //     end: { row: endpoints.end, col: aSquare.col }
     start: startCoord,
     end: endCoord
    };

    //   return Util.findVerticalRun(this.board, aSquare, aSquare);


  }
  findAllPerpendicularRuns(): Array<Span> {
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
  constructor(board: Board, start: coord, letters: string) {
    super(board, start, letters);
    this.startCoord = start;
    this.endCoord = new coord(this.startCoord.row + this.length, this.startCoord.col);
  }
  getEndCoord() : coord
  { return this.endCoord}

  // public EndForMove(count: number, orientation: placement): coord {
  //   let end: coord;
  //   if (orientation == placement.horizontal) {
  //     end = new coord(this.row, this.col + count);
  //   } else if (orientation == placement.vertical) {
  //     end = new coord(this.row + count, this.col)
  //   }
  //   return end;
  // }
  findParallelRun(): Span {

    // return Util.findVerticalRun(this.board, this.startCoord, this.endCoord);

    let slice = this.board.getVerticalSlice(this.startCoord.col);

    let endpoints = Util.generateRun(slice, this.startCoord.row, this.endCoord.row);

    if (endpoints == null)
      return null;

    return {
      start: new coord(endpoints.start, this.startCoord.col), // { row: endpoints.start, col: this.startCoord.col },
      end:  new coord(endpoints.end, this.startCoord.col)  //{ row: endpoints.end, col: this.startCoord.col }
    };
    // replace
  }

  findPerpendicularRun(aSquare: coord): Span {

    let slice = this.board.getHorizontalSlice(aSquare.row);

    let endpoints = Util.generateRun(slice, aSquare.col, aSquare.col);

    if (endpoints == null)
      return null;

    return {
      start: new coord(aSquare.row, endpoints.start),//{ row: aSquare.row, col: endpoints.start },
      end: new coord(aSquare.row, endpoints.end) //{ row: aSquare.row, col: endpoints.end }
    };

    //   return Util.findHorizontalRun(this.board, aSquare, aSquare);
  }

  findAllPerpendicularRuns(): Array<Span> {
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
