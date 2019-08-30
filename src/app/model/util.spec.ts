import { Tile } from './tile.model';
import { Util } from './util.model';
import { Square } from './square.model';
import { SquareCount, coord, row, col} from './coord.model'
import { placement} from './move.model';

describe('run ', () => {

  it('letter in middle ', () => {

    let slice = new Array<Square>(SquareCount); // index 0..14

    for (let s = 0; s <= 6; s++)
      slice[s] = new Square();

    slice[7] = new Square(new Tile("A")); //8th square

    slice[9] = new Square(new Tile("B")); // 10th square

    for (let s = 10; s <= 14; s++)
      slice[s] = new Square();

    let endpoints = Util.generateSecondaryRun(slice, 8) // 9th square

    expect(endpoints.start).toEqual(7);
    expect(endpoints.end).toEqual(9);
  })

  it('word in middle ', () => {

    let slice = new Array<Square>(SquareCount); // index 0..14

    for (let s = 0; s <= 6; s++)
      slice[s] = new Square();

    slice[7] = new Square(new Tile("A"));

    slice[10] = new Square(new Tile("B"));

    for (let s = 11; s <= 14; s++)
      slice[s] = new Square();

    let endpoints = Util.generateRun(slice, 8, 9)

    expect(endpoints.start).toEqual(7);
    expect(endpoints.end).toEqual(10);
  })

});

describe(' word & tile', () => {
  beforeEach(() => {

  })
  it('bob is 3 tiles', () => {
    let tiles = Array<Tile>(3);
    tiles[0] = new Tile("B", 1);
    tiles[1] = new Tile("O", 1);
    tiles[2] = new Tile("B", 1);
    let newTiles = Util.LettersToTiles("BOB");
    expect(tiles[0].letter).toEqual(newTiles[0].letter);
  })

  it(' b o b as string', () => {
    let tiles = Array<Tile>(3);
    tiles[0] = new Tile("B", 1);
    tiles[1] = new Tile("O", 1);
    tiles[2] = new Tile("B", 1);
    expect(Util.TilesToLetters(tiles)).toEqual("BOB");
  })

  it('horizontal placment', () => {

   // out = new Board();
   let tile = new Tile("A", 1);

    let placementType: placement = Util.getPlacementType([tile, tile, tile], new coord(row._8, col._H), new coord(row._8, col._J));

    expect(placementType).toEqual(placement.horizontal);

  })

  it('vertical placment', () => {

    let tile = new Tile("A", 1);
    let start = new coord(row._8, col._H);
    let end = new coord(row._10, col._H);
    let placementType: placement = Util.getPlacementType([tile, tile, tile], start, end);

    expect(placementType).toEqual(placement.vertical);

  })
});
