import { Board } from './board.model';
import { placement, Move, VerticalMove, HorizontalMove } from './move.model';
import { coord, row, col } from './coord.model';
import { Tile } from './tile.model';


describe('Move', () => {
  let board: Board;

  let tile: Tile;

  beforeEach(() => {

  })

  describe('move', () => {


    it('should find run', () => {

      board = new Board();


      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start = new coord(row._8, col._H);
      board.PlaceTilesVertical(start, [tile1, tile2, tile3]);

      let move = new HorizontalMove(board, new coord(row._11, col._H), "abc");
      let span = move.findPerpendicularRun(new coord(row._11, col._H));

      expect(span.start.row).toEqual(row._8);
      expect(span.end.row).toEqual(row._11);
    })

    it('should not find run', () => {

      board = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start = new coord(row._8, col._H);
      board.PlaceTilesVertical(start, [tile1, tile2, tile3]);

      let move = new VerticalMove(board, new coord(row._12, col._H), "abc");
      let span = move.findPerpendicularRun(start);

      expect(span).toBeNull();

    })

    it('should find run on both sides', () => {

      board = new Board();
      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");

      let start1 = new coord(row._9, col._H);
      board.PlaceTilesVertical(start1, [tile1, tile2, tile3]);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._13, col._H);
      board.PlaceTilesVertical(start2, [tileA, tileB, tileC]);

      let move = new HorizontalMove(board, new coord(row._12 ,col._H), "abc");
      let span = move.findPerpendicularRun(new coord(row._12, col._H));

      expect(span.start.row).toEqual(row._9);
      expect(span.end.row).toEqual(row._15);
    })


    it('should find horizontal run on both sides', () => {

      board = new Board();

      let tile1 = new Tile("A");
      let tile2 = new Tile("T");
      let tile3 = new Tile("E");
      let start1 = new coord(row._9, col._C);
      board.PlaceTilesHorizontal(start1, [tile1, tile2, tile3]);

      let tileA = new Tile("A");
      let tileB = new Tile("T");
      let tileC = new Tile("E");
      let start2 = new coord(row._9, col._G);
      board.PlaceTilesHorizontal(start2, [tileA, tileB, tileC]);

      let move = new VerticalMove(board, new coord(row._9, col._F), "abc");
      let span1 = move.findPerpendicularRun(new coord(row._9, col._F));
      let span2 = move.findParallelRun()

      expect(span1.start.col).toEqual(col._C);
      expect(span1.end.col).toEqual(col._I);
    })

  })

})
