
export class Tile {

  constructor(private letter: string, private value: number = 1) {
    this.letter = letter.toUpperCase();
  }

  public getLetter(): string {
    return this.letter;
  }
  public getValue(): number {
    return this.value;
  }
}
