import {Tile} from './tile.model';

describe('Tile', () => {
  let component: Tile;

  beforeEach(() => {

  })

  describe('create', () => {

    it('should create a tile with letter A', () => {

      component = new Tile("A", 1);

      expect(component.display).toContain("A");

    })

    it('should create a tile with value 1', () => {

      component = new Tile("A", 1);

      expect(component.getValue).toEqual(1);

    })
  })
})
