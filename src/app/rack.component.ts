import {Component} from '@angular/core';
import {Rack, Slot} from './model/rack.model';
import {Tile} from './model/tile.model';

@Component({
  selector: "rack",
  templateUrl : "rack.component.html",
  styleUrls : ["rack.component.css"]
})
export class RackComponent {
  rack : Rack;
  selectedTile : Tile;
  constructor() {
    this.rack = new Rack();
    this.rack.AddTiles([new Tile("A", 1), new Tile("B", 1), new Tile("Z", 10)]);
  }

  public getSlots() : Array<Slot> {
   return this.rack.Slots;
  }

  public GetBackgroundStyle( slot : Slot) : string {
    if (slot.tile == null)
      return "bg-slot"
    switch (slot.tile) {
      default:
        return "bg-tile";
        break;
    }

  }

}
