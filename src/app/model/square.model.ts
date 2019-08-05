import { Tile } from './tile.model';
import { T } from '@angular/core/src/render3';

export enum SquareType {
  reg, dl, tl, dw, tw, start
};

export class Square {
  private contains: Tile = null;
  private type: SquareType = SquareType.reg;
  private isFinal: boolean = false;
  constructor() { }

  public place(tile: Tile) {
    this.contains = tile;
  }

  public IsOccupied() {
    return this.contains !== null;
  }

  public getTile() {
    return this.contains;
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
