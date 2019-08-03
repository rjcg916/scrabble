import { Rack } from './rack.model';
import { Tile } from './tile.model';

export class Player {
  private rack: Rack;
  constructor(public name: string) {
    this.rack = new Rack();
  }
  public GetTiles(availableTiles : Array<Tile>) {
      
  }
}