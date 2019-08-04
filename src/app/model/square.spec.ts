import {Square} from './square.model';
import { T } from '@angular/core/src/render3';
import { Tile } from './tile.model';

describe('Square', () => {
  let component: Square;

  beforeEach(() => {

  })

  describe('create', () => {

    it('empty square', () => {

      component = new Square();

      expect(component.IsOccupied()).toEqual(false);

    })

    it('occupied square', () => {

      component = new Square();

      component.place(new Tile("A", 1));

      expect(component.IsOccupied()).toEqual(true);

    })

  })
})
