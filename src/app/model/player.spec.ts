import {Player} from './player.model';
import {Tile} from './tile.model';

describe('Player', () => {
  let component: Player;

  beforeEach(() => {

  })

  describe('create', () => {

    it('with name fred', () => {

      component = new Player("fred");

      expect(component.name).toContain("fred");

    })

    it('returns remaining tiles', () => {

      component = new Player();

      let remaining = component.DrawTiles(
        [new Tile("A", 1),
        new Tile("B", 1),
        new Tile("A", 1),
        new Tile("B", 1),
        new Tile("A", 1),
        new Tile("B", 1),
        new Tile("B", 1),
        new Tile("A", 1),
        new Tile("B", 1)
     ]);

      expect(remaining.length).toEqual(2);

    })

  })
})
