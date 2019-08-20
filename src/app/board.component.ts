import { Component } from '@angular/core'
import { Board, Row, Col } from './model/boardv2.model';
import { row, col } from './model/coord.model';
import { Square } from './model/square.model';
import { s } from '@angular/core/src/render3';

@Component({
  selector: "board",
  templateUrl: "board.component.html"
})

export class BoardComponent {

  private board : Board;
  message : string;
  constructor() {
    this.board = new Board();
  }

  public getRows() : Array<Row> {
    return this.board.getRows();
  }
}

