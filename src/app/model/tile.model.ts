
export class Tile {

  constructor(private letter: string, private value: number) {
  }

  public getLetter(): string {
    return this.letter;
  }
  public getValue(): number {
    return this.value;
  }
}
