import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPageBlock]',
})
export class PageBlockDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style = `
    display: block;
    padding-bottom: 55px;
    margin-bottom: 55px;
    border-bottom: dashed 1px #C5CAE9;`;
  }
}
