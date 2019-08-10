import { Board, placement } from './board.model';
import { coord, row, col} from './coord.model';
import { Tile } from './tile.model';
import { p } from '@angular/core/src/render3';
import { Util } from './util';


describe('Board', () => {
  let out: Board;
  let tile : Tile;

  beforeEach(() => {

  })



  describe('add tiles', () => {

    it('count should be 1', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._8, col._H);
      out.PlaceTiles(start, [tile], placement.horizontal);

      expect(out.GetOccupiedCount()).toEqual(1);

    })

    it('count should be 3', () => {

      out = new Board();
      tile = new Tile("A", 1);

      out.PlaceTiles( new coord( row._8, col._H), [tile, tile, tile], placement.horizontal);

      expect(out.GetOccupiedCount()).toEqual(3);

    })

    it('horizontal placment', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let placementType : placement = out.GetPlacementType([tile, tile, tile], new coord( row._8, col._H), new coord (row._8, col._J));

      expect(placementType).toEqual(placement.horizontal);

    })

    it('place horizontal', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let index =   out.PlaceTiles( new coord( row._8, col._G), [tile, tile, tile], placement.horizontal);
      expect(index).toEqual(col._I)
    })

    it('vertical placment', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._8, col._H);
      let end = new coord(row._10, col._H);
      let placementType : placement = out.GetPlacementType([tile, tile, tile], start, end);

      expect(placementType).toEqual(placement.vertical);

    })

    it('place vertical', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._G);
      let index =   out.PlaceTiles(start, [tile, tile, tile], placement.vertical);
      expect(index).toEqual(row._9)
    })

    it('placement value of 3', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._H);
      let end = new coord(row._9, col._H);
      let index =  out.PlaceTiles(start, [tile, tile, tile], placement.vertical);
      let value = out.GetPlacmentValue(start, end);
      expect(value).toEqual(3);


    })

  })

})
