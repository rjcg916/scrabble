
export class Tile {

  constructor(private _letter: string, private _value: number = 1) {
    this._letter = _letter.toUpperCase();
  }

  get letter(): string {
    return this._letter;
  }

  get value(): number {
    return this._value;
  }
}
