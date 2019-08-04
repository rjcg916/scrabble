import {Tile} from './tile.model';
import { T } from '@angular/core/src/render3';

export enum SquareType {
  reg, dl, tl, dw, tw
};

export class Square {
  private contains : Tile = null;
  private type: SquareType = SquareType.reg;
  constructor( ) {}

  public place( tile : Tile) {
     this.contains = tile;
  }

  public IsOccupied() {
    return this.contains !== null;
  }
}
