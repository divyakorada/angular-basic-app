import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revstring'
})
export class RevstringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let rev = '';
    for(let i = (value.length-1); i>=0; i--) {
      rev += value[i];
    }
    return rev;
  }

}
