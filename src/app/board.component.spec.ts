import { Board, Row, Col } from './model/board.model';
//import { row, col } from './model/coord.model';
import {BoardComponent} from './board.component';


describe('boardv2 dimensions', () => {
  it('count and last', () => {
    let out = new BoardComponent();
    let rows: Array<Row> = out.rows;
    expect(rows.length).toEqual(15);
  });
});
