import {Tile} from './tile.model';

describe('Tile', () => {
  let component: Tile;

  beforeEach(() => {

  })

  describe('create', () => {

    it('a tile with letter A', () => {

      component = new Tile("A", 1);

      expect(component.getLetter()).toEqual("A");

    })

    it('a tile with value 1', () => {

      component = new Tile("A", 1);

      expect(component.getValue()).toEqual(1);

    })
  })
})
