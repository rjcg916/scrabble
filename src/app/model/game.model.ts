import { Board } from './board.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { Word } from './word.model';
import { TileService } from '../service/tile.service';

export class Game {
  private board: Board;
  private players: Player[];
  private lexicon: Lexicon = new Lexicon(Array<Word>());
  private tiles: Tile[] = new Array<Tile>();
  private numberOfPlayers: number;


  constructor(public name: string, public playerCount: number) {
    this.numberOfPlayers = playerCount;
    this.players = new Array<Player>(playerCount);
    this.board = new Board();
    this.tiles = TileService.GetTiles();
  }

  public getName(): string {
    return this.name;
  }

  public displayTiles(): string {
    let display: string = "";
    this.tiles.forEach(element => {
      display = display.concat(element.display());
    });

    return 'Tiles (' + this.tiles.length + ')  ' + display;
  }
}


