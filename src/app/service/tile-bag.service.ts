import {Tile} from '../model/tile.model';

class Frequency {
  constructor(public letter: string, public frequency: number) {
  }
}

export class TileBagService {

  private letterValues: Array<string> =
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

  private letterFrequencies: Array<Frequency> =
    [new Frequency("A", 9),
     new Frequency("B", 2),
     new Frequency("C", 2),
     new Frequency("D", 4),
     new Frequency("E", 12),
     new Frequency("F", 2),
     // TODO - add all leters
     new Frequency("Y", 2),
     new Frequency("Z", 1),
     new Frequency("", 2)];

    private  getValue(letter: string): number {
    // letters are placed in value "buckets"
    // index of array is value

    const values = this.letterValues;

    for (let i: number = 0; i < values.length; i++) {
      if (values[i].indexOf(letter) > -1) {
        return i;
      }
    }

    return 0;

  }


  public GetTiles(): Array<Tile> {

    let tiles : Array<Tile> = new Array<Tile>();
    const frequencies =this.letterFrequencies;

    for (let l: number = 0; l < frequencies.length; l++) {

      const frequency: number = frequencies[l].frequency;
      const name: string = frequencies[l].letter;
      const value: number = this.getValue(name);

      for (let c: number = 0; c < frequency; c++) {
        tiles.push(new Tile(name, value));
      }

    }

    return tiles;
  }

}

