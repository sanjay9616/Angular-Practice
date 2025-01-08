import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      value = value.slice(0, limit)
      return value + '...';
    }
    return value;
  }

}
