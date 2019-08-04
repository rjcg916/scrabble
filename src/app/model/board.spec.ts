import { Board, row, col } from './board.model';
import { Tile } from './tile.model';


describe('Board', () => {
  let out: Board;
  let tile : Tile;

  beforeEach(() => {

  })

  describe('add a tile', () => {

    it('count should be 1', () => {

      out = new Board();
      tile = new Tile("A", 1);

      out.placeTile(tile, row.r8, col.c8);

      expect(out.getTileCount()).toEqual(1);

    })


  })

})
