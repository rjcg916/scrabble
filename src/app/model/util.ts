import { Tile } from './tile.model';
import { Endpoints, coord, Span, SquareCount, row, col } from './coord.model';
import { Square  } from './square.model';
import { Board } from './board.model';

export class Util {
  public static LettersToTiles(letters: String): Tile[] {

    let tiles = new Array<Tile>();

    for (let i: number = 0; i < letters.length; i++) {
      tiles.push(new Tile(letters.substr(i, 1)))
    }

    return tiles;
  }

  public static TilesToLetters(tiles: Tile[]): string {

    let aString: string = "";
    tiles.forEach(t => aString = aString.concat(t.getLetter()));
    return aString;

  }

  public static generateSecondaryRun(slice : Array<Square>, square : number) : Endpoints{
    return this.generateRun(slice, square, square)
  }

  public static generateRun(slice: Array<Square>, startSquare: number, endSquare: number): Endpoints {
    // number/input is index
    let firstSquare = startSquare;

    if (startSquare > 0) {
      firstSquare = 0;
      for (let l = startSquare - 1; l >= 0; l--) {
        if (!slice[l].isOccupied()) {
          firstSquare = l + 1;
          break;
        }
      }
    }

    let lastSquare = endSquare;

    if (endSquare < slice.length - 1) {
      lastSquare = slice.length - 1;
      for (let r = endSquare + 1; r <= slice.length -1; r++) {
        if (!slice[r].isOccupied()) {
          lastSquare = r - 1;
          break;
        }
      }
    }

    if ((firstSquare == startSquare) && (lastSquare == endSquare))
      return null;


    return {start: firstSquare, end: lastSquare}
  }
//  static getVerticalSlice(board : Board, col : col) : Array<Square>
//  {
//    let slice = new Array<Square>(SquareCount);
//
//    let col = start.col;
//
//    for (let r = row._1; r <= row._15; r++)
//      slice[r] = board[r][col];
//
//    return slice;
//  }


 // static findVerticalRun(board : Board, start: coord, end: coord): Span {
 //   let slice = new Array<Square>(SquareCount);
//
//    let col = start.col;
//
//    for (let r = row._1; r <= row._15; r++)
//      slice[r] = board[r][col];
//
//    let endpoints = Util.generateRun(slice, start.row, end.row);
//
//    if (endpoints == null)
 //     return null;
//
//    return {
//      start: { row: endpoints.start, col: col },
//      end: { row: endpoints.end, col: col }
//    };
//  }


//  static getHorizontalSlice(board: Board, row: row) : Array<Square>
//  {
//    let slice = new Array<Square>(SquareCount);
//
  //  let row = start.row;
//
//    for (let c = col._A; c <= col._O; c++)
//      slice[c] = board[row][c];
//
//    return slice;
//  }

 // static findHorizontalRun(board: Board, start: coord, end: coord): Span {
 //   let slice = new Array<Square>(SquareCount);
//
//    let row = start.row;
//
//    for (let c = col._A; c <= col._O; c++)
 //     slice[c] = board[row][c];
//
//    let endpoints = Util.generateRun(slice, start.col, end.col);
//
//    if (endpoints == null)
//      return null;
//
//    return {
//        start: { row: row, col: endpoints.start },
//      end: { row: row, col: endpoints.end }
//    };
//  
}
