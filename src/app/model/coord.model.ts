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
}
