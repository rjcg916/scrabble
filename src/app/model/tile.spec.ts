import {Tile} from './tile.model';

describe('Tile', () => {
  let out: Tile;

  beforeEach(() => {

  })

  describe('create', () => {

    it('a tile with letter A', () => {

      out = new Tile("A", 1);

      expect(out.getLetter()).toEqual("A");

    })

    it('a tile with value 1', () => {

      out = new Tile("A", 1);

      expect(out.getValue()).toEqual(1);

    })
  })
})
