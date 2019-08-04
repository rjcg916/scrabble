import { Board, row, col, orientation } from './board.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { Word } from './word.model';
import { TileBagService } from '../service/tile-bag.service';

export class Game {
  private board: Board;
  private players: Player[];
  private lexicon: Lexicon = new Lexicon(Array<Word>());
  private tiles: Tile[] = new Array<Tile>();
  private numberOfPlayers: number;
  private tileBagService = new TileBagService();
  private activePlayer : number = 0;
  private gameDone : boolean = false;
  constructor(public playerCount: number, public name?: string) {

    this.tiles = this.tileBagService.GetTiles();

    this.numberOfPlayers = playerCount;
    this.players = new Array<Player>(playerCount);
    for (let i: number = 0; i < playerCount; i++) {
     this.players[i] = new Player();
    }
    this.players.forEach( p => this.tiles = p.DrawTiles(this.tiles));

    this.board = new Board();
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

  public getTileBagCount() {
    return this.tiles.length;
  }


  public play() {

    while (!this.gameDone) {
      let tiles = Array<Tile>();

      this.players[this.activePlayer].PlaceTiles(row.r8, col.c8, tiles, orientation.horizontal);

      this.gameDone = true;
    }

  }

}


