import {Tile} from '../model/tile.model';

class Frequency {
  constructor(public letter: string, public frequency: number) {
  }
}

export class TileService {

  private static letterValues: Array<string> =
    [
      "",
      "AEILNORSTU",
      "DG",
      "BCMP",
      "FHWYV",
      "K",
      "",
      "",
      "JX",
      "",
      "QZ"
    ];

  private static letterFrequencies: Array<Frequency> =
    [new Frequency("A", 9),
     new Frequency("Y", 2),
     new Frequency("Z", 1),
     new Frequency("", 2)];
     //TODO - add all letter

    private static getValue(letter: string): number {
    // letters are placed in value "buckets"
    // index of array is value

    const values = TileService.letterValues;

    for (let i: number = 0; i < values.length; i++) {
      if (values[i].indexOf(letter) > -1) {
        return i;
      }
    }

    return 0;

  }


  public static GetTiles(): Array<Tile> {

    let tiles: Array<Tile>;
    const frequencies = TileService.letterFrequencies;

    for (let l: number = 0; l < frequencies.length; l++) {

      const frequency: number = frequencies[l].frequency;
      const name: string = frequencies[l].letter;
      const value: number = TileService.getValue(name);

      for (let c: number = 0; c < frequency; c++) {
        tiles.push(new Tile(name, value));
      }

    }

    return tiles;
  }

}

