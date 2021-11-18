import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.borderColor') border = 'red';
  @HostBinding('style.color') color = 'green';

  constructor() { }

  private randomColor(): string {
    return "#" + ((1<<24)*Math.random() | 0).toString(16)
  }

  @HostListener('keyup') onKeyUp(){
    this.border = this.randomColor();
    this.color = this.randomColor();
    //this.elementRef.nativeElement.innerHTML='DEDANS';
  }

}
