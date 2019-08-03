
export class Tile {

  constructor(private letter : string, private value : number) {
  }

  public display(): string {
    return 'Letter:' + '' + this.letter + ' ' + '(value:' + this.value + ')'
  }

  public getLetter() : string {
    return this.letter;
  }
  public getValue() : number {
    return this.value;
  }
}
