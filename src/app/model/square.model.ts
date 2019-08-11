import { Tile } from './tile.model';

export enum SquareType {
  reg, dl, tl, dw, tw, start
};

export class Square {
  private tile: Tile;
  private type: SquareType = SquareType.reg;
  private isFinal: boolean = false;

  constructor(tile : Tile = null)
  {
    this.tile = tile;
  }

  public place(tile: Tile) {
    this.tile = tile;
  }

  public IsOccupied() {
    return this.tile !== null;
  }

  public getTile() {
    return this.tile;
  }

  public setType(type : SquareType) {
    this.type = type;
  }

  public getLetterMultiplier() : number {
    if (this.type == SquareType.tl)
       return 3;
    else if (this.type == SquareType.dl)
       return 2;
    else
       return 1;
  }

  public getWordMultiplier() : number {
    if (this.type == SquareType.tw)
       return 3;
    else if (this.type == SquareType.dw)
       return 2;
    else
       return 1;
  }
}
