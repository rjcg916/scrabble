import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Player } from '../model/player.model';
import { PlayerComponent } from "./player.component";
import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Rack } from '../model/rack.model';

@Component({
  template: '<player [player]="player"></player>'
})
class TestComponent {
  constructor(public player: Player) { }
  @ViewChild(PlayerComponent)
  playerComponent: PlayerComponent;
}

describe('Rack', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: PlayerComponent;
  let debugElement: DebugElement;

  let mockPlayer = {
    rack: function (): Rack {
      return new Rack();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PlayerComponent],
      providers: [
        { provide: Rack, useValue: mockPlayer }
      ]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance.playerComponent;
      debugElement = fixture.debugElement.query(By.directive(PlayerComponent));
    });
  }));

  it('receives the player through an input property', () => {

    fixture.detectChanges();
    let rack = mockPlayer.rack;
    let componentRack = component.GetRack();
    expect(rack.length).toEqual(componentRack.GetSlots().length);
  })


})
