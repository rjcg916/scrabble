import { Tile } from './tile.model';
import { Util } from './util';
import { Square } from './square.model';
import { SquareCount} from './coord.model'

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
    let newTiles = Util.wordToTiles("BOB");
    expect(tiles[0].getLetter()).toEqual(newTiles[0].getLetter());
  })

  it(' b o b as string', () => {
    let tiles = Array<Tile>(3);
    tiles[0] = new Tile("B", 1);
    tiles[1] = new Tile("O", 1);
    tiles[2] = new Tile("B", 1);
    expect(Util.tilesToWord(tiles)).toEqual("BOB");
  })


});
