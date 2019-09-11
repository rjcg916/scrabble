import {Component} from '@angular/core';
import {Board} from './model/board.model';
import { Game } from './model/game.model';

@Component({
  selector: "app",
  templateUrl : 'game.component.html'
})
export class GameComponent {
  game : Game;
  constructor() {
    this.game = new Game(2);
  }

  get board() : Board {
   return this.game.board;
  }

  GetPlayer(p : number) {
    return this.game.players[p - 1];
  }
}



