import { Board, placement } from './board.model';
import { coord, row, col } from './coord.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { Word } from './word.model';
import { TileBagService } from '../service/tile-bag.service';

export class Game {

  private board: Board;
  private players: Player[];
  private lexicon: Lexicon = new Lexicon(Array<Word>());
  private tileBag: Tile[] = new Array<Tile>();
  private numberOfPlayers: number;
  private tileBagService = new TileBagService();
  private activePlayer: number = 0;
  private gameDone: boolean = false;

  constructor(public playerCount: number, public name?: string) {

    this.tileBag = this.tileBagService.GetTiles();

    this.numberOfPlayers = playerCount;
    this.players = new Array<Player>(playerCount);
    for (let i: number = 0; i < playerCount; i++) {
      let p = this.players[i];
      p = new Player();
      this.tileBag = p.DrawTiles(this.tileBag);
    }

    this.board = new Board();
  }


  public getName(): string {
    return this.name;
  }


  public getTileBagCount() {
    return this.tileBag.length;
  }


  public play() {

    while (!this.gameDone) {

      let tiles = Array<Tile>();
      tiles.push(new Tile("A", 1));
      tiles.push(new Tile("T", 3));

    //  this.players[this.activePlayer].PlaceTiles(new coord(row.r8, col.c8), tiles, placement.horizontal);
    //  this.board.PlaceTiles(new coord(row.r8, col.c8), tiles, placement.horizontal);
      this.gameDone = true;
    }

  }

}


