import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Board, Move, placement } from './board.model';
import { coord, row, col } from './coord.model'

export class Player {
  private rack: Rack;
  constructor(public name?: string) {
    this.rack = new Rack();
  }
  public DrawTiles(availableTiles: Array<Tile>): Array<Tile> {
    return this.rack.Fill(availableTiles);
  }

  public PlaceTiles(move : Move) {
    //place tiles

  }
}
