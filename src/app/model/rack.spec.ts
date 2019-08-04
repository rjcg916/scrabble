import { Rack} from './rack.model';
import { Tile } from './tile.model';

describe('Rack', () => {
  let component: Rack;

  beforeEach(() => {

  })

  describe('create', () => {

    it('and leave empty', () => {

      component = new Rack();

      expect(component.getTileCount()).toBe(0);

    })

    it('and completely fill', () => {

      component = new Rack();
      component.Fill(
        [new Tile("A", 1),
         new Tile("B", 1),
         new Tile("A", 1),
         new Tile("B", 1),
         new Tile("A", 1),
         new Tile("B", 1),
         new Tile("B", 1),
         new Tile("A", 1),
         new Tile("B", 1)
        ])

      expect(component.getTileCount()).toEqual(Rack.capacity);

    })

    it('2 tiles left in TileBag', () => {

      component = new Rack();
      let remaining = component.Fill(
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
    it('and partially fill', () => {

      component = new Rack();
      component.Fill(
        [new Tile("A", 1),
         new Tile("B", 1),
         new Tile("A", 1),
         new Tile("B", 1),
    ])

      expect(component.getTileCount()).toEqual(4);

    })

    it('no tiles left in tile bag', () => {

      component = new Rack();
      let remaining = component.Fill(
        [new Tile("A", 1),
         new Tile("B", 1),
         new Tile("A", 1),
         new Tile("B", 1),
    ])

    expect(remaining.length).toEqual(0);

    })
    

  })
})
