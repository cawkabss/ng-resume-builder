import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPageBlockTitle]'
})
export class PageBlockTitleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style = `
    display: flex;
    text-transform: uppercase;
    align-items: center;
    margin-bottom: 45px;`;
  }

}
