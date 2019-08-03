export class Tile {
  private value : number = 0;

  // value of letter is index of string array
  private static pointValues: Array<string> =
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

  constructor(private letter: string) {

    let numPointValues: number = Tile.pointValues.length;
    for (let i: number = 0; i < numPointValues; i++) {
      if (Tile.pointValues[i].indexOf(letter) > -1) {
        this.value = i;
        break;
      }
    }

  }
  display(): string {
    return 'Letter:' + '' + this.getLetter() + ' ' + '(value:' + this.getValue() + ')'
  }

  getLetter(): string {
    return this.letter;
  }
  getValue(): number {
    return this.value;
  }
}
