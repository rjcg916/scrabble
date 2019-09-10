import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Rack} from './model/rack.model';
import { RackComponent } from "./rack.component";
import {Component, ViewChild, DebugElement} from '@angular/core';

@Component({
 template: '<rack [rack]="rack"></rack>'
})
class TestComponent {
  constructor(public rack : Rack) {}
  @ViewChild(RackComponent)
  rackComponent : RackComponent;
}

describe('Rack', () => {
  let fixture : ComponentFixture<RackComponent>;
  let component : RackComponent;
  let debugElement : DebugElement;
  

  beforeEach(() => {

  })

  describe('create', () => {

    it('fill to capacity', () => {

      out = new RackComponent();

//      expect(out.TileCount).toEqual(Rack.capacity);

    })

  });


})
