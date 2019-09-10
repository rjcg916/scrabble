import { Rack } from './rack.model';
import { Tile } from './tile.model';

describe('Rack', () => {
  let out: Rack;

  beforeEach(() => {

  })

  describe('create', () => {

    it('initially empty', () => {

      out = new Rack();

      expect(out.TileCount).toBe(0);

    })

    it('check slots', () => {
      out = new Rack();
      expect(out.slots.length).toEqual(7);
    })
    
    it('fill to capacity', () => {

      out = new Rack();
      out.AddTiles(
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

      expect(out.TileCount).toEqual(Rack.capacity);

    })
  });
  it('unused tiles still available', () => {

    out = new Rack();
    let remaining = out.AddTiles(
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

  it('partially filled with all available tiles', () => {

    out = new Rack();
    out.AddTiles(
      [new Tile("A"),
      new Tile("B"),
      new Tile("A"),
      new Tile("B"),
      ])

    expect(out.TileCount).toEqual(4);

  })

  it('all tiles consumed', () => {

    out = new Rack();
    let remaining = out.AddTiles(
      [new Tile("A"),
      new Tile("B"),
      new Tile("A"),
      new Tile("B"),
      ])

    expect(remaining.length).toEqual(0);

  })




  describe('add and remove tiles ', () => {


    it('remove one', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("G")
        ])

      expect(out.TileCount).toEqual(7);

      out.RemoveTiles([new Tile("A")]);

      expect(out.TileCount).toEqual(6);


    })

    it('remove one with dup letters', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("A")
        ])

      expect(out.TileCount).toEqual(7);

      out.RemoveTiles([new Tile("A")]);

      expect(out.TileCount).toEqual(6);


    })

    it('remove two ', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("B"),
        new Tile("F"),
        new Tile("A")
        ])

      expect(out.TileCount).toEqual(7);

      out.RemoveTiles([new Tile("A"), new Tile("B")]);

      expect(out.TileCount).toEqual(5);


    })

    it('remove two dups ', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("B"),
        new Tile("F"),
        new Tile("A")
        ])

      expect(out.TileCount).toEqual(7);

      out.RemoveTiles([new Tile("A"), new Tile("A")]);

      expect(out.TileCount).toEqual(5);

    })

  })

  describe('specific tiles', () => {


    it('test for tiles just added', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("G")
        ])

      expect(out.TileCount).toEqual(7);

      let found = out.allTilesInRack(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("G")
        ]);

      expect(found).toBe(true);

    })

    it('test for non-existent ', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("G")
        ])

      expect(out.TileCount).toEqual(7);

      let found = out.allTilesInRack(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("X"),
        new Tile("F"),
        new Tile("G")
        ]);

      expect(found).toBe(false);

    })

    it('test for non-existent dup ', () => {

      out = new Rack();
      out.AddTiles(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("E"),
        new Tile("F"),
        new Tile("G")
        ])

      expect(out.TileCount).toEqual(7);

      let found = out.allTilesInRack(
        [new Tile("A"),
        new Tile("B"),
        new Tile("C"),
        new Tile("D"),
        new Tile("A"),
        new Tile("F"),
        new Tile("G")
        ]);

      expect(found).toBe(false);

    })
  })
})
