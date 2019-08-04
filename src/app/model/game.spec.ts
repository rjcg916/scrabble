import {Game} from './game.model';



describe('Game', () => {
  let component: Game;

  beforeEach(() => {

  })

  describe('create', () => {

    it('with two players', () => {

      component = new Game(2);

      expect(component.playerCount).toEqual(2);

    })

    it('with three players', () => {

      component = new Game(3);

      expect(component.playerCount).toEqual(3);

    })

    it(' allocate tiles to 3 players', () => {

      component = new Game(3);

      expect(component.getTileBagCount()).toEqual(36 - 21);

    })

  })

})
