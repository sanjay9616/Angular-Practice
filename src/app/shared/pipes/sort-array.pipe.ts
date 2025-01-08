import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(arr: Array<any>, property: string, order: string = 'asc'): Array<any> {
    if(!arr) return [];
    arr.sort((a, b) => order === 'asc' ? (a[property] < b[property] ? -1 : 1) : (a[property] < b[property] ? 1 : -1));
    return arr
  }

}
