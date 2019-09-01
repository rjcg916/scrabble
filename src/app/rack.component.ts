import {Component} from '@angular/core';
import {Rack} from './model/rack.model';
import {Tile} from './model/tile.model';

@Component({
  selector: "rack",
  templateUrl : "rack.component.html"
})
export class RackComponent {
  rack : Rack;
  selectedTile : Tile;
  public capacity : number;
  constructor() {
    this.rack = new Rack();
    this.capacity = Rack.capacity;
  }



  public getTiles() : Array<Tile> {
 //   return [ new Tile("A", 1), new Tile("B", 1), new Tile("Z", 10)];
   return this.rack.Tiles;
  }
}
