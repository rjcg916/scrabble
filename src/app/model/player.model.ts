import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Board, row, col, orientation } from './board.model';

export class Player {
  private rack: Rack;
  constructor(public name?: string) {
    this.rack = new Rack();
  }
  public DrawTiles(availableTiles : Array<Tile>) : Array<Tile> {
    return this.rack.Fill(availableTiles);
  }

  public PlaceTiles(r : row, c: col, tiles: Array<Tile>,  placement : orientation) {
    //place tiles

  }
}
