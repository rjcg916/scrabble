import { Board } from './board.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { Word } from './word.model';

class Frequency {
  constructor(public letter: string, public frequency: number) {
  }
}

export class Game {
  private board: Board;
  private players: Player[];
  private lexicon: Lexicon = new Lexicon(Array<Word>());
  private tiles: Tile[] = new Array<Tile>();
  private numberOfPlayers: number;

  static letterFrequency: Array<Frequency> =
    [new Frequency("A", 9),
     new Frequency("Y", 2),
     new Frequency("Z", 1),
     new Frequency("", 2)];

    private InitializeTiles(): void {

    let numLetters: number = Game.letterFrequency.length;
    for (let l: number = 0; l < numLetters; l++) {
      let frequency: number = Game.letterFrequency[l].frequency;
      let letterName: string = Game.letterFrequency[l].letter;
      for (let c: number = 0; c < frequency; c++) {
        this.tiles.push(new Tile(letterName));
      }
    }
  }

  constructor(public name: string, public playerCount: number) {
    this.numberOfPlayers = playerCount;
    this.players = new Array<Player>(playerCount);
    this.board = new Board();
    this.InitializeTiles();
  }
  public getName(): string {
    return this.name;
  }

  public displayTiles(): string {
    let display : string = "";
    this.tiles.forEach(element  => {
        display = display.concat(element.display());
     });

     return 'Tiles (' + this.tiles.length + ')  '  + display;
  }
}


