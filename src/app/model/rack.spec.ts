import { Rack} from './rack.model';
import { Tile } from './tile.model';

describe('Rack', () => {
  let out: Rack;

  beforeEach(() => {

  })

  describe('create', () => {

    it('and leave empty', () => {

      out = new Rack();

      expect(out.getTileCount()).toBe(0);

    })

    it('and completely fill', () => {

      out = new Rack();
      out.Fill(
        [new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B")
        ])

      expect(out.getTileCount()).toEqual(Rack.capacity);

    })

    it('2 tiles left in TileBag', () => {

      out = new Rack();
      let remaining = out.Fill(
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
    it('and partially fill', () => {

      out = new Rack();
      out.Fill(
        [new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
    ])

      expect(out.getTileCount()).toEqual(4);

    })

    it('no tiles left in tile bag', () => {

      out = new Rack();
      let remaining = out.Fill(
        [new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
    ])

    expect(remaining.length).toEqual(0);

    })


  })
})
