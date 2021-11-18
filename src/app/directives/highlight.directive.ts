import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'red';

  constructor(public elementRef:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.bg = 'yellow';
    this.elementRef.nativeElement.innerHTML='DEDANS';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bg = 'red';
    this.elementRef.nativeElement.innerHTML='DEHORS';
  }

}
