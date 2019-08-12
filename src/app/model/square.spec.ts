import {Square} from './square.model';

import { Tile } from './tile.model';

describe('Square', () => {
  let out: Square;

  beforeEach(() => {

  })

  describe('create', () => {

    it('empty square', () => {

      out = new Square();

      expect(out.isOccupied()).toEqual(false);

    })

    it('occupied square', () => {

      out = new Square();

      out.Place(new Tile("A"));

      expect(out.isOccupied()).toEqual(true);

    })

  })

  describe('constructor ', () => {


    it('occupied square', () => {

      out = new Square(new Tile("A"));

      expect(out.isOccupied()).toEqual(true);

    })

  })
})
