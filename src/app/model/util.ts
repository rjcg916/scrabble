import { Tile } from './tile.model';

export class Util {
  public static wordToTiles(word: String): Tile[] {

    let tiles = new Array<Tile>();

    for (let i: number = 0; i < word.length; i++) {
      tiles.push(new Tile(word.substr(i,1), 1))
    }

    return tiles;
  }

  public static tilesToWord(tiles: Tile[]): string {

    let aString: string = "";
    tiles.forEach(t => aString = aString.concat(t.getLetter()));
    return aString;

  }
}
