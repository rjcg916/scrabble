import {Lexicon} from './lexicon.model';

describe('Lexicon', () => {


  beforeEach(() => {

  })

  describe('check words', () => {



    it('find in lexicon', () => {

      let out = new Lexicon();

      let found = out.isWordValid("bob");

      expect(found).toEqual(true);

    })

    it('not found in lexicon', () => {

      let out = new Lexicon();

      let found = out.isWordValid("Fred");

      expect(found).toEqual(false);

    })

    })

})
