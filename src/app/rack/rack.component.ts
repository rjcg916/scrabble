import {Component, Input} from '@angular/core';
import {Rack, Slot} from '../model/rack.model';
import {Tile} from '../model/tile.model';

@Component({
  selector: "rack",
  templateUrl : "rack.component.html",
  styleUrls : ["rack.component.css"]
})
export class RackComponent {

  selectedTile : Tile;

  GetSlots() : Slot[] {
   return this.rack.GetSlots();
  }

  GetBackgroundStyle( slot : Slot) : string {
    if (slot.tile == null)
      return "bg-slot"
    switch (slot.tile) {
      default:
        return "bg-tile";
        break;
    }

  }

  @Input("rack")
  rack : Rack;

}
