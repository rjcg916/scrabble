import {Component, Input} from '@angular/core';
import {Player} from './model/player.model';
import {Rack} from './model/rack.model';

@Component({
  selector: "player",
  templateUrl : "player.component.html"
})
export class PlayerComponent {
  @Input("player")
  _player : Player;

  get rack() : Rack {
    return this._player.rack;
  }
}
