import { Board } from './board.model';
import { placement} from './util.model';
import { coord, row, col } from './coord.model';
import { Tile } from './tile.model';


describe('Board', () => {
  let out: Board;
  let tile: Tile;

  beforeEach(() => {

  })

  describe('board dimensions', () => {
    it('count and last', () => {
      let out = new Board();
      expect(out.rows.length).toEqual(15);
      expect(out.rows[0].cols.length).toEqual(15);
    });
  });


   describe('add tiles', () => {

    it('single tile count', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._8, col._H);
      out.PlaceTilesHorizontal(start, [tile]);

      expect(out.getOccupiedCount()).toEqual(1);

    })

    it('multiple tile count', () => {

      out = new Board();
      tile = new Tile("A", 1);

      out.PlaceTilesHorizontal(new coord(row._8, col._H), [tile, tile, tile]);

      expect(out.getOccupiedCount()).toEqual(3);

    })



    it('place tiles horizontally', () => {

      out = new Board();
      tile = new Tile("A", 1);

      let index = out.PlaceTilesHorizontal(new coord(row._8, col._G), [tile, tile, tile]);
      expect(index).toEqual(col._I)
    })



    it('place tiles vertically', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._G);
      let index = out.PlaceTilesVertical(start, [tile, tile, tile]);
      expect(index).toEqual(row._9)
    })

    it('check placement value', () => {

      out = new Board();
      tile = new Tile("A", 1);
      let start = new coord(row._7, col._H);
      let end = new coord(row._9, col._H);
      let index = out.PlaceTilesVertical(start, [tile, tile, tile]);
      let value = out.getPlacmentValue(start, end);
      expect(value).toEqual(3);


    })

    it('non adjacent placement', () => {
      out = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start1 = new coord(row._9, col._H);
      out.PlaceTilesVertical(start1, [tile1, tile2, tile3]);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._13, col._H);
      out.PlaceTilesVertical(start2, [tileA, tileB, tileC]);

      let count = out.getOccupiedCount();
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

      out.PlaceTilesHorizontal(start1, [tile1, tile2]);

      let start2 = new coord(row._8, col._J);

      out.PlaceTilesHorizontal(start2, [tile3]);

      let word = out.getWordFromSquares(new coord(row._8, col._H), new coord(row._8, col._J))
      expect(word).toEqual("BOB");

    })

    it('word not found', () => {

      out = new Board();
      let tile1 = new Tile("B");
      let tile2 = new Tile("O");
      let tile3 = new Tile("B");

      let start1 = new coord(row._8, col._H);

      out.PlaceTilesHorizontal(start1, [tile1, tile2]);

      let start2 = new coord(row._8, col._K);

      out.PlaceTilesHorizontal(start2, [tile3]);


      let word = out.getWordFromSquares(new coord(row._8, col._H), new coord(row._8, col._J))
      expect(word).toEqual("");

    })


  })

})
