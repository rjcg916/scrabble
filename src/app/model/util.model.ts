import { Tile } from './tile.model';
import { Endpoints, coord, Span, SquareCount, row, col } from './coord.model';
import { Square  } from './square.model';
import { Board } from './board.model';
import { placement} from './move.model';

export class Util {
  public static LettersToTiles(letters: String): Tile[] {

    let tiles = new Array<Tile>();

    for (let i: number = 0; i < letters.length; i++) {
      tiles.push(new Tile(letters.substr(i, 1)))
    }

    return tiles;
  }

  static TilesToLetters(tiles: Tile[]): string {

    let aString: string = "";
    tiles.forEach(t => aString = aString.concat(t.letter));
    return aString;

  }

  static generateSecondaryRun(slice : Array<Square>, square : number) : Endpoints{
    return this.generateRun(slice, square, square)
  }

  static generateRun(slice: Array<Square>, startSquare: number, endSquare: number): Endpoints {
    // number/input is index
    let firstSquare = startSquare;

    if (startSquare > 0) {
      firstSquare = 0;
      for (let l = startSquare - 1; l >= 0; l--) {
        if (!slice[l].isOccupied) {
          firstSquare = l + 1;
          break;
        }
      }
    }

    let lastSquare = endSquare;

    if (endSquare < slice.length - 1) {
      lastSquare = slice.length - 1;
      for (let r = endSquare + 1; r <= slice.length -1; r++) {
        if (!slice[r].isOccupied) {
          lastSquare = r - 1;
          break;
        }
      }
    }

    if ((firstSquare == startSquare) && (lastSquare == endSquare))
      return null;


    return {start: firstSquare, end: lastSquare}
  }

  static getPlacementType(tiles: Array<Tile>, start: coord, end: coord): placement {

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

}
