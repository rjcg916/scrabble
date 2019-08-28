import { Component } from '@angular/core'
import { Board, Row} from './model/board.model';
import { coord } from './model/coord.model';
import {Square} from './model/square.model';

@Component({
  selector: "board",
  templateUrl: "board.component.html"
})

export class BoardComponent {

  private _board : Board;
  selectedCell : coord;
  constructor() {
    this._board = new Board();
  }

  get rows() : Array<Row> {
    return this._board.rows;
  }

  public GetSquare(rowIndex : number, colIndex : number) : Square {
     let rows = this.rows;
     let row = rows[rowIndex];
     let cols = row.cols;
     let col = cols[colIndex];
     return col.square;

  }

}

