import { Component } from '@angular/core'
import { Board, Row, Col } from './model/boardv2.model';
import { row, col } from './model/coord.model';
import { Square } from './model/square.model';

@Component({
  selector: "board",
  templateUrl: "board.component.html"
})

export class BoardComponent {

  private board : Board;
  constructor() {
    this.board = new Board();
  }

  public getRows() : Array<Row> {
    return this.board.getRows();
  }
}

