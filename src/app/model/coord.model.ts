export enum row {
  r1, r2, r3, r4, r5, r6, r7, r8,
  r9, r10, r11, r12, r13, r14, r15
}
export enum col {
  c1, c2, c3, c4, c5, c6, c7, c8,
  c9, c10, c11, c12, c13, c14, c15
}

export class coord {
  constructor(public row: row, public col: col) { }
}
