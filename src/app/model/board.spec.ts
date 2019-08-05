import { Board, placement } from './board.model';
import { coord, row, col} from './coord.model';
import { Tile } from './tile.model';
import { p } from '@angular/core/src/render3';


describe('Board', () => {
  let out: Board;
  let tile : Tile;

  beforeEach(() => {

  })

  describe('add tiles', () => {

    it('count should be 1', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row.r8, col.c8);
      out.PlaceTiles(start, [tile], placement.horizontal);

      expect(out.getOccupiedCount()).toEqual(1);

    })

    it('count should be 3', () => {

      out = new Board();
      tile = new Tile("A", 1);

      out.PlaceTiles( new coord( row.r8, col.c8), [tile, tile, tile], placement.horizontal);

      expect(out.getOccupiedCount()).toEqual(3);

    })

    it('horizontal placment', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let placementType : placement = out.PlacementType([tile, tile, tile], new coord( row.r8, col.c8), new coord (row.r8, col.c10));

      expect(placementType).toEqual(placement.horizontal);

    })

    it('place horizontal', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let index =   out.PlaceTiles( new coord( row.r8, col.c7), [tile, tile, tile], placement.horizontal);
      expect(index).toEqual(col.c9)
    })

    it('vertical placment', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row.r8, col.c8);
      let end = new coord(row.r10, col.c8);
      let placementType : placement = out.PlacementType([tile, tile, tile], start, end);

      expect(placementType).toEqual(placement.vertical);

    })

    it('place vertical', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row.r7, col.c8);
      let index =   out.PlaceTiles(start, [tile, tile, tile], placement.vertical);
      expect(index).toEqual(row.r9)
    })


  })

})
