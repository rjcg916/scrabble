import { Tile } from './tile.model';
import { p } from '@angular/core/src/render3';
import { Util } from './util';


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
