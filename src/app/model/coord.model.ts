import { networkInterfaces } from "os";
import {placement} from './move.model';

export const SquareCount = 15;

export enum row {
  _1, _2, _3, _4, _5, _6, _7, _8,
  _9, _10, _11, _12, _13, _14, _15
}
export enum col {
  _A, _B, _C, _D, _E, _F, _G, _H,
  _I, _J, _K, _L, _M, _N, _O
}

export class coord {

  constructor(public row: row, public col: col) { }

 // public EndForMove(count: number, orientation: placement): coord {
 //   let end: coord;
 //   if (orientation == placement.horizontal) {
 //     end = new coord(this.row, this.col + count);
 //   } else if (orientation == placement.vertical) {
 //     end = new coord(this.row + count, this.col)
 //   }
 //   return end;
 // }
}

export interface Span {
  start : coord;
  end: coord;
}

export interface Endpoints {
  start: number;
  end : number;
}

