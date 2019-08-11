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
      out.FillWithTiles(
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
      let remaining = out.FillWithTiles(
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
      out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
    ])

      expect(out.getTileCount()).toEqual(4);

    })

    it('no tiles left in tile bag', () => {

      out = new Rack();
      let remaining = out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("A"),
         new Tile("B"),
    ])

    expect(remaining.length).toEqual(0);

    })


  })


  describe('create ', () => {


    it('and remove one', () => {

      out = new Rack();
      out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("C"),
         new Tile("D"),
         new Tile("E"),
         new Tile("F"),
         new Tile("G")
        ])

      expect(out.getTileCount()).toEqual(7);

      out.RemoveTiles( [new Tile("A")] );

      expect(out.getTileCount()).toEqual(6);


    })

    it('and remove one with dup letters', () => {

      out = new Rack();
      out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("C"),
         new Tile("D"),
         new Tile("E"),
         new Tile("F"),
         new Tile("A")
        ])

      expect(out.getTileCount()).toEqual(7);

      out.RemoveTiles( [new Tile("A")] );

      expect(out.getTileCount()).toEqual(6);


    })

    it('and remove two ', () => {

      out = new Rack();
      out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("C"),
         new Tile("D"),
         new Tile("B"),
         new Tile("F"),
         new Tile("A")
        ])

      expect(out.getTileCount()).toEqual(7);

      out.RemoveTiles( [new Tile("A"), new Tile("B")] );

      expect(out.getTileCount()).toEqual(5);


    })

    it('and remove two dups ', () => {

      out = new Rack();
      out.FillWithTiles(
        [new Tile("A"),
         new Tile("B"),
         new Tile("C"),
         new Tile("D"),
         new Tile("B"),
         new Tile("F"),
         new Tile("A")
        ])

      expect(out.getTileCount()).toEqual(7);

      out.RemoveTiles( [new Tile("A"), new Tile("A")] );

      expect(out.getTileCount()).toEqual(5);


    })

  })
})
