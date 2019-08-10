import { Board, placement, Move } from './board.model';
import { coord, row, col } from './coord.model';
import { Player } from './player.model';
import { Lexicon } from './lexicon.model';
import { Tile } from './tile.model';
import { TileBagService } from '../service/tile-bag.service';

export class Game {

  // game has board/squares, players/racks, lexicon, tilebag
  private board: Board;
  private players: Player[];
  private lexicon: Lexicon;
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
    this.lexicon = new Lexicon();
  }



  public getName(): string {
    return this.name;
  }


  public getTileBagCount() {
    return this.tileBag.length;
  }


  public play() {


    // for  each player
    //  options: swap, pass, move
    //   move: select tiles & placement
    //         validate placement - empty squares, valid words, score
    //         confirm placement
    //         draw tiles
    //   check status
    //       game over


    let m = new Move(new coord(row._8, col._H), "at", placement.horizontal);
   // this.players[this.activePlayer].PlaceTiles(m);

    }

  }


