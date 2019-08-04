import {Square} from './square.model';
import { T } from '@angular/core/src/render3';
import { Tile } from './tile.model';

describe('Square', () => {
  let out: Square;

  beforeEach(() => {

  })

  describe('create', () => {

    it('empty square', () => {

      out = new Square();

      expect(out.IsOccupied()).toEqual(false);

    })

    it('occupied square', () => {

      out = new Square();

      out.place(new Tile("A", 1));

      expect(out.IsOccupied()).toEqual(true);

    })

  })
})
