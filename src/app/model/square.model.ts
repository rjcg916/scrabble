import {Tile} from './tile.model';

export enum SquareType {
  reg, dl, tl, dw, tw
};

export class Square {
  private contains? : Tile;
  private type: SquareType = SquareType.reg;
  constructor( ) {}
  place( tile : Tile) {
     this.contains = tile;
  }
}
