import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {

  @Input() maxLength: number = 0;

  constructor() { }

  ngOnInit() { }

  @HostListener('input', ['$event.target'])
  onInputChange(input: HTMLInputElement) {
    if (input.value.length > this.maxLength) input.value = input.value.slice(0, this.maxLength)
  }
}
