import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string | null = null;
  @HostBinding('style.color') color: string | null = null;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightblue'; // Change background color
    this.color = 'white';              // Change text color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;       // Reset background color
    this.color = null;                 // Reset text color
  }

}
