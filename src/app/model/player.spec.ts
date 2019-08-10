import {Player} from './player.model';
import {Tile} from './tile.model';

describe('Player', () => {
  let out: Player;

  beforeEach(() => {

  })

  describe('create', () => {

    it('with name ', () => {

      out = new Player("name");

      expect(out.name).toContain("name");

    })

    it('returns remaining tiles', () => {

      out = new Player();

      let remaining = out.DrawTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("A"),
        new Tile("B"),
        new Tile("A"),
        new Tile("B"),
        new Tile("B"),
        new Tile("A"),
        new Tile("B")
     ]);

      expect(remaining.length).toEqual(2);

    })

  })
})
