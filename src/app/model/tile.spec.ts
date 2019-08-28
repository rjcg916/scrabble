import {Tile} from './tile.model';

describe('Tile', () => {
  let out: Tile;

  beforeEach(() => {

  })

  describe('create', () => {

    it('a tile with specified letter', () => {

      out = new Tile("A", 1);

      expect(out.letter).toEqual("A");

    })

    it('a tile converted to upper case', () => {

      out = new Tile("z", 1);

      expect(out.letter).toEqual("Z");

    })

    it('a tile with default value', () => {

      out = new Tile("A");

      expect(out.value).toEqual(1);

    })

    it('a tile with specified value', () => {

      out = new Tile("A", 4);

      expect(out.value).toEqual(4);

    })
  })
})
