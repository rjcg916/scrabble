import {Square, SquareType} from './square.model';

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

      let aTile = new Tile("c");

      out.tile = aTile;

      expect(out.isOccupied()).toEqual(true);

    })

    it('default type', () => {

      out = new Square();

      expect(out.type).toEqual(SquareType.reg);

    })


    it('explicitly set type', () => {

      out = new Square();
      out.type = SquareType.tl;

      expect(out.type).toEqual(SquareType.tl);

    })


    it('explicit letter multiplier', () => {

      out = new Square();
      out.type = SquareType.tl;

      expect(out.LetterMultiplier).toEqual(3);

    })
    it('implicit letter multiplier', () => {

      out = new Square();

      expect(out.LetterMultiplier).toEqual(1);

    })

    it('explicit  word multiplier', () => {

      out = new Square();
      out.type = SquareType.dw;

      expect(out.WordMultiplier).toEqual(2);

    })

    it('implicit word multiplier', () => {

      out = new Square();

      expect(out.WordMultiplier).toEqual(1);

    })

  })

})
