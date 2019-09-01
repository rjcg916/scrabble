import { Tile } from './tile.model';
import { detectWTF } from '@angular/core/src/profile/wtf_impl';

export enum SquareType {
  reg, dl, tl, dw, tw, start
};

export class Square {
  private _type: SquareType = SquareType.reg;
  private _isFinal: boolean = false;

  constructor(private _tile : Tile = null)
  {
    this._tile = _tile;
  }

  set tile(_tile: Tile)  {
    this._tile = _tile;
  }

  get tile() : Tile {
    return this._tile;
  }

  set type(type : SquareType) {
    this._type = type;
  }

  get type() : SquareType {
    return this._type;
  }

  get isOccupied() : boolean {
    return this._tile !== null;
  }

  get LetterMultiplier() : number {
    if (this._type == SquareType.tl)
       return 3;
    else if (this._type == SquareType.dl)
       return 2;
    else
       return 1;
  }

  get WordMultiplier() : number {
    if (this._type == SquareType.tw)
       return 3;
    else if (this._type == SquareType.dw)
       return 2;
    else
       return 1;
  }


}
