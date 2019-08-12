import { Tile } from './tile.model';
import { Endpoints } from './coord.model';
import { Square } from './square.model';

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


    return new Endpoints(firstSquare, lastSquare)

  }
}
