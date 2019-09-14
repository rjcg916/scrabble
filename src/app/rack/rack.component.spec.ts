import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import { Rack, Slot} from '../model/rack.model';
import { RackComponent } from "./rack.component";
import {Component, ViewChild, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
 template: '<rack [rack]="rack"></rack>'
})
class TestComponent {
  constructor(public rack : Rack) {}
  @ViewChild(RackComponent)
  rackComponent : RackComponent;
}

describe('Rack', () => {
  let fixture : ComponentFixture<TestComponent>;
  let component : RackComponent;
  let debugElement : DebugElement;

  let mockRack = {
    GetSlots: function () : Slot[]  {
      return [
         new Slot(),
         new Slot(),
         new Slot(),
         new Slot(),
         new Slot(),
         new Slot(),
         new Slot()
      ]
    }
  }

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations : [RackComponent, TestComponent],
      providers : [
        {provide: Rack, useValue: mockRack}
      ]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance.rackComponent;
      debugElement = fixture.debugElement.query(By.directive(RackComponent));
    });
  }));

  it('receives the rack through an input property', () => {

    fixture.detectChanges();

    let slots = mockRack.GetSlots();
    let componentSlots = component.GetSlots();

    expect(slots.length).toEqual(componentSlots.length);
  })


})
