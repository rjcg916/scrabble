import { Board, placement } from './board.model';
import { coord, row, col } from './coord.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { TileBagService } from '../service/tile-bag.service';

export class Game {

  // game has board/squares, players/racks, lexicon, tilebag
  private board: Board;
  private players: Player[];
  private lexicon: Lexicon = new Lexicon();
  private tileBag: Tile[] = new Array<Tile>();
  private numberOfPlayers: number;
  private tileBagService = new TileBagService();
  private activePlayer: number = 0;
  private gameDone: boolean = false;

  constructor(public playerCount: number, public name?: string) {
    // fill tile bag
    this.tileBag = this.tileBagService.GetTiles();

    // for each player, draw tiles from bag and put in rack
    this.numberOfPlayers = playerCount;
    this.players = new Array<Player>(playerCount);
    for (let i: number = 0; i < playerCount; i++) {
      let p = this.players[i];
      p = new Player();
      this.tileBag = p.DrawTiles(this.tileBag);
    }

    // create board
    this.board = new Board();

    // initialize/choose lexicon
  }

  public wordToTiles(word : String) : Tile[] {
    let tiles = new Array<Tile>();

    for (let c : number = 0; c < word.length; c++) {
      tiles.push( new Tile( word.charAt[c], 1))
    }

    return tiles;
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


