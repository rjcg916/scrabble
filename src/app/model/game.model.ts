import { Board } from './board.model';
import { coord, row, col } from './coord.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { TileBagService } from '../service/tile-bag.service';
import { placement } from './util.model';

export class Game {

  // game has board/squares, players/racks, lexicon, tilebag
  public board: Board;
  public players: Player[] = [];
  private lexicon: Lexicon;
  private tileBag: Tile[];
  private numberOfPlayers: number;
  private tileBagService = new TileBagService();
  private activePlayer: number = 0;
  private gameDone: boolean = false;

  constructor(public playerCount: number, public name?: string) {
    // fill tile bag
    this.tileBag = this.tileBagService.GetTiles();

    // for each player, draw tiles from bag and put in rack
    this.numberOfPlayers = playerCount;

    for (let i = 0; i < playerCount; i++) {
      this.players.push(new Player());
      this.tileBag = this.players[i].DrawTiles(this.tileBag);
    }


    // create board
    this.board = new Board();

    // initialize/choose lexicon
//    this.lexicon = new Lexicon();
  }


 // get board() : Board {
 //   return this._board;
 // }


  getName(): string {
    return this.name;
  }


  getTileBagCount() {
    return this.tileBag.length;
  }


  play() {


    // for  each player
    //  options: swap, pass, move
    //   move:
    //   check status
    //       game over



    let p = this.players[this.activePlayer];

    p.Move(this.board, new coord(row._8, col._H), "at", placement.horizontal);

   // this.players[this.activePlayer].PlaceTiles(m);

    }

  }
