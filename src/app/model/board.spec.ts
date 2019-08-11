import { Board, placement } from './board.model';
import { coord, row, col } from './coord.model';
import { Tile } from './tile.model';
import { p } from '@angular/core/src/render3';
import { Util } from './util';


describe('Board', () => {
  let out: Board;
  let tile: Tile;

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

      out.PlaceTiles(new coord(row._8, col._H), [tile, tile, tile], placement.horizontal);

      expect(out.GetOccupiedCount()).toEqual(3);

    })

    it('horizontal placment', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let placementType: placement = out.GetPlacementType([tile, tile, tile], new coord(row._8, col._H), new coord(row._8, col._J));

      expect(placementType).toEqual(placement.horizontal);

    })

    it('place horizontal', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let index = out.PlaceTiles(new coord(row._8, col._G), [tile, tile, tile], placement.horizontal);
      expect(index).toEqual(col._I)
    })

    it('vertical placment', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._8, col._H);
      let end = new coord(row._10, col._H);
      let placementType: placement = out.GetPlacementType([tile, tile, tile], start, end);

      expect(placementType).toEqual(placement.vertical);

    })

    it('place vertical', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._G);
      let index = out.PlaceTiles(start, [tile, tile, tile], placement.vertical);
      expect(index).toEqual(row._9)
    })

    it('placement value of 3', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._H);
      let end = new coord(row._9, col._H);
      let index = out.PlaceTiles(start, [tile, tile, tile], placement.vertical);
      let value = out.GetPlacmentValue(start, end);
      expect(value).toEqual(3);


    })

    it('non adjacent placement', () => {
      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start1 = new coord(row._9, col._H);
      out.PlaceTiles(start1, [tile1, tile2, tile3], placement.vertical);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._13, col._H);
      out.PlaceTiles(start2, [tileA, tileB, tileC], placement.vertical);

      let count = out.GetOccupiedCount();
      expect(count).toEqual(6);

    })

  })

  describe('get word from board', () => {
    it('word is found', () => {

      out = new Board();
      let tile1 = new Tile("B");
      let tile2 = new Tile("O");
      let tile3 = new Tile("B");

      let start1 = new coord(row._8, col._H);

      out.PlaceTiles(start1, [tile1, tile2], placement.horizontal);

      let start2 = new coord(row._8, col._J);

      out.PlaceTiles(start2, [tile3], placement.horizontal);

      let word = out.squaresToWord(new coord(row._8, col._H), new coord(row._8, col._J))
      expect(word).toEqual("BOB");

    })

    it('word not found', () => {

      out = new Board();
      let tile1 = new Tile("B");
      let tile2 = new Tile("O");
      let tile3 = new Tile("B");

      let start1 = new coord(row._8, col._H);

      out.PlaceTiles(start1, [tile1, tile2], placement.horizontal);

      let start2 = new coord(row._8, col._K);

      out.PlaceTiles(start2, [tile3], placement.horizontal);


      let word = out.squaresToWord(new coord(row._8, col._H), new coord(row._8, col._J))
      expect(word).toEqual("");

    })

    it('should find run', () => {

      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start = new coord(row._8, col._H);
      out.PlaceTiles(start, [tile1, tile2, tile3], placement.vertical);

      let span = out.findVerticalRun(new coord(row._11, col._H));

      expect(span.start.row).toEqual(row._8);
      expect(span.end.row).toEqual(row._11);
    })

    it('should not find run', () => {

      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start = new coord(row._8, col._H);
      out.PlaceTiles(start, [tile1, tile2, tile3], placement.vertical);

      let span = out.findVerticalRun(new coord(row._12, col._H));

      expect(span).toBeNull();

    })

    it('should find run on both sides', () => {

      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start1 = new coord(row._9, col._H);
      out.PlaceTiles(start1, [tile1, tile2, tile3], placement.vertical);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._13, col._H);
      out.PlaceTiles(start2, [tileA, tileB, tileC], placement.vertical);

      let span = out.findVerticalRun(new coord(row._12, col._H));
      expect(span.start.row).toEqual(row._9);
      expect(span.end.row).toEqual(row._15);
    })

    it('should find horizontal run on both sides', () => {

      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start1 = new coord(row._9, col._C);
      out.PlaceTiles(start1, [tile1, tile2, tile3], placement.horizontal);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._9, col._G);
      out.PlaceTiles(start2, [tileA, tileB, tileC], placement.horizontal);

      let span = out.findHorizontalRun(new coord(row._9, col._F));
      expect(span.start.col).toEqual(col._C);
      expect(span.end.col).toEqual(col._I);
    })

  })

})
