import { Directive, ElementRef, Attribute, Input, SimpleChange } from '@angular/core';


@Directive({
  selector: "[square]"
})
export class SquareDirective {

  constructor(private element: ElementRef) { }

  @Input("square")
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
