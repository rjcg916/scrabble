import { Rack } from './rack.model';
import { Tile } from './tile.model';
import { Move } from './board.model';


export class Player {
  private rack: Rack;
  constructor(public name?: string) {
    this.rack = new Rack();
  }
  public DrawTiles(availableTiles: Array<Tile>): Array<Tile> {
    return this.rack.FillWithTiles(availableTiles);
  }

  public PlaceTiles(move : Move) {
    //place tiles

  }
}
