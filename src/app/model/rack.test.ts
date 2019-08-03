
import {Rack} from './rack.model';
import {Tile} from './tile.model';

import { T } from '@angular/core/src/render3';

describe('Rack', () => {
  let component: Rack;
  let tile : Tile;

  beforeEach(() => {

  })

  describe('create', () => {

    it('should start empty', () => {

      component = new Rack();

      expect(component.Display).toEqual("");

    })

    it('should be able to add tile', () => {


      component = new Rack();
      tile = new Tile("A", 1);
      component.AddTile(tile);

      expect(component.Display).toEqual("A");

    })
  })
})
