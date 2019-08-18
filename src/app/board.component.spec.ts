import { Board, Row, Col } from './model/boardv2.model';
//import { row, col } from './model/coord.model';
import {BoardComponent} from './board.component';


describe('boardv2 dimensions', () => {
  it('count and last', () => {
    let out = new BoardComponent();
    let rows: Array<Row> = out.getRows();
    expect(rows.length).toEqual(15);
  });
});
