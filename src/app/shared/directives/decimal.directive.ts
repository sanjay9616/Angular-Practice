import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDecimal]'
})
export class DecimalDirective {

  @Input() decimalDigits: number = 0;
  private regExp!: RegExp;

  constructor() { }

  @HostListener('input', ['$event.target'])
  onInputChange(input: HTMLInputElement) {
    console.log('input', input);
    this.regExp = new RegExp(`^-?\\d*\\.?\\d{0,${this.decimalDigits}}$`);
    let value = input.value;
    if(!this.regExp.test(value)) {
      value = value.replace(/[^0-9.-]/g, ''); // Remove invalid characters
      value = value.replace(/(?!^)-/g, ''); // Ensure only one leading negative sign
      value = value.replace(/(\..*?)\..*/g, '$1'); // Ensure only one decimal point
      value = value.replace(new RegExp(`(\\.\\d{${this.decimalDigits}}).*`), '$1'); // Limit to decimalDigits
      input.value = value;
    }
  }

}
