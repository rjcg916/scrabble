import {Game} from '../../src/models/game.model';

let aGame : Game = new Game("my test game", 2);

console.log(aGame.getName());
console.log(aGame.displayTiles());

