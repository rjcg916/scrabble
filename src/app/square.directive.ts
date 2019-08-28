import { Directive, ElementRef, Attribute, Input, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Square } from './model/square.model';
import {Tile} from './model/tile.model';
import {Col} from './model/board.model';

@Directive({
  selector: "[square-attr]"
})
export class SquareDirective {

  constructor(private element: ElementRef) {

  }

 @Input("square-attr")
  bgClass: string;


  ngOnInit() {
    this.element.nativeElement.classList.add(this.bgClass || "bg-success", "text-white")
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["bgClass"];

    let classList = this.element.nativeElement.classList;

    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }

}
