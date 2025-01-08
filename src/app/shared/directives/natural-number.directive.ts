import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNaturalNumber]'
})
export class NaturalNumberDirective {

  private regex: RegExp = /^[0-9]*$/;

  constructor() { }

  @HostListener('input', ['$event.target'])
  onInputChange(input: HTMLInputElement) {
    let value = input.value;
    if (!this.regex.test(value)) {
      value = value.replace(/[^0-9]/g, '');
      input.value = value
    }
    if(value.length == 1 && value[0] == '0') {
      value = '';
      input.value = value;
    }
  }

}
