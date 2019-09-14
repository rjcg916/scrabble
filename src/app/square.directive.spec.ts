import { SquareDirective } from './square.directive';
import { ElementRef, asNativeElements } from '@angular/core';

describe('SquareDirective', () => {
  it('should create an instance', () => {
    const directive = new SquareDirective( new ElementRef('<div></div>') );
    expect(directive).toBeTruthy();
  });
});
