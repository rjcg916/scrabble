import { Board, row, col } from './board.model';
import { Tile } from './tile.model';


describe('Board', () => {
  let component: Board;
  let tile : Tile;

  beforeEach(() => {

  })

  describe('add a tile', () => {

    it('count should be 1', () => {

      component = new Board();
      tile = new Tile("A", 1);

      component.placeTile(tile, row.r8, col.c8);

      expect(component.getTileCount()).toEqual(1);

    })


  })

})
