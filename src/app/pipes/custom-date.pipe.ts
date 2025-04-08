import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): any {

    // change format of date()
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

}

