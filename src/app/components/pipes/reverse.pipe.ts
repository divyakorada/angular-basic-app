import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string) {
    let reverse = '';

    for(let i=(value.length - 1); i>=0; i--) {
      reverse += value[i]
    }
    return reverse;
  }
}

@Pipe({
  name: 'UppercaseFirst',
  standalone: true
})

export class UppercaseFirstPipe implements PipeTransform {
  transform(value: string) {
    if(!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

@Pipe({
  name: 'reversePure',
  standalone: true,
  pure: true // This is actually default
})
export class ReversePurePipe implements PipeTransform {
  transform(value: string): string {
    console.log('Pure Pipe Executed');
    return value?.split('').reverse().join('');
  }
}

@Pipe({
  name: 'reverseImpure',
  standalone: true,
  pure: false // Make it impure!
})
export class ReverseImpurePipe implements PipeTransform {
  transform(value: string): string {
    console.log('Impure Pipe Executed');
    return value?.split('').reverse().join('');
  }
}

@Pipe({
  name: 'pureExample',
  standalone: true,
  pure: true, // (default is true even if you don't write it)
})
export class PureExamplePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'impureExample',
  standalone: true,
  pure: false, // 👈 setting pure: false makes it an impure pipe
})
export class ImpureExamplePipe implements PipeTransform {
  transform(value: any[]): number {
    return value?.length;
  }
}

@Pipe({
  name: 'evenNumbers',
   standalone: true,
 // pure: false
})
export class EvenNumbersPipe implements PipeTransform {

  transform(values: number[]): number[] {
    console.log('Pure pipe called');
    return values.filter(num => num % 2 === 0);
  }

}
