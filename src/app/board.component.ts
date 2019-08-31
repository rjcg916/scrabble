import { Component } from '@angular/core'
import { Board, Row} from './model/board.model';
import { coord } from './model/coord.model';
import {Square, SquareType} from './model/square.model';

@Component({
  selector: "board",
  templateUrl: "board.component.html",
  styleUrls : ["board.component.css"]
})

export class BoardComponent {

  private _board : Board;
  selectedCell : coord;
  constructor() {
    this._board = new Board();
  }

  GetBackground( squareType : SquareType) : string {
    if (squareType == null)
      squareType = SquareType.reg;
    switch (squareType) {
      case SquareType.start:
        return "bg-start";
      case SquareType.dl:
        return "bg-dl";
        break;
      case SquareType.tl:
        return "bg-tl";
        break;
      case SquareType.dw:
        return "bg-dw";
        break;
      case SquareType.tw:
          return "bg-tw";
          break;
      default:
        return "bg-square";
        break;
    }

  }

  get rows() : Array<Row> {
    return this._board.rows;
  }

   GetClasses() {

   }

   GetSquare(rowIndex : number, colIndex : number) : Square {
     let rows = this.rows;
     let row = rows[rowIndex];
     let cols = row.cols;
     let col = cols[colIndex];
     return col.square;

  }

}

