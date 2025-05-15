import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: true,
})
export class FullNamePipe implements PipeTransform {
  transform(
    firstName: string,
    lastName: string,
    order: 'FL' | 'LF' = 'FL',
    caseStyle: 'normal' | 'upper' | 'lower' = 'normal'
  ): string {
    let fullName =
      order === 'FL' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`;

    switch (caseStyle) {
      case 'upper':
        return fullName.toUpperCase();
      case 'lower':
        return fullName.toLowerCase();
      default:
        return fullName;
    }
  }
}

@Pipe({
  name: 'customDate',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): any {

    // change format of date()
    const date = new Date();
    // const month = date.getMonth() + 1;
    // const day = date.getDay();
    // const year = date.getFullYear();
    // return `${month}-${day}-${year}`;

    const days = [
      'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY',
      'THURSDAY', 'FRIDAY', 'SATURDAY'
    ];
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
      'MAY', 'JUNE', 'JULY', 'AUGUST',
      'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName}, ${monthName}, ${day}, ${year}`;
  }

}

