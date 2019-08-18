import { Square, SquareType } from './square.model';

export class Col {
  public square: Square;
  constructor(public rowIndex, public colIndex) {
  }
}

export class Row {
  private cols: Array<Col>;

  constructor(public rowIndex: number) {
    this.cols = [];
    for (let c = 0; c < 15; c++) {
      this.cols.push(new Col(this.rowIndex, c));
    }
  }

  public getCols(): Array<Col> {
    return this.cols;
  }
}

export class Board {
  private rows: Array<Row> = [];
  constructor() {
    for (let r = 0; r < 15; r++) {
      this.rows.push(new Row(r))
    }
  }
  getRows() : Array<Row>{
    return this.rows;
  }
}
