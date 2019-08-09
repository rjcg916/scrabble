import { Game } from './game.model';



describe('Game', () => {
  let out: Game;

  beforeEach(() => {

  })

  describe(' word to tile', () => {
    it('bob is 3 tiles', () => {
      out = new Game(2);
      expect(out.wordToTiles("bob").length).toEqual(3);
    })

  }

  )

  describe('create', () => {

    it('with two players', () => {

      out = new Game(2);

      expect(out.playerCount).toEqual(2);

    })

    it('with three players', () => {

      out = new Game(3);

      expect(out.playerCount).toEqual(3);

    })

    it(' allocate tiles to 3 players', () => {

      out = new Game(3);

      expect(out.getTileBagCount()).toEqual(100 - 21);

    })

  })

})
