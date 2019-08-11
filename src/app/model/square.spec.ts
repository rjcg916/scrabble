import {Square} from './square.model';

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

      out.place(new Tile("A"));

      expect(out.IsOccupied()).toEqual(true);

    })

  })

  describe('constructor ', () => {


    it('occupied square', () => {

      out = new Square(new Tile("A"));

      expect(out.IsOccupied()).toEqual(true);

    })

  })
})
