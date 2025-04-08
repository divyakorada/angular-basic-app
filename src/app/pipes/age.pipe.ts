import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log('value::::', value);
    let currentYear = new Date().getFullYear();
    let userBirthYear = new Date(value).getFullYear();
    let calculateAge = currentYear - userBirthYear;
    console.log('calculateAge::::', calculateAge);
    return calculateAge;

  }

/*   export class CustomDatePipe implements PipeTransform {
    transform(value: any, city: string): any {
      return `city Name ${city}`;
    }

  } */

}
