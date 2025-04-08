import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpure',
  pure: false
})
export class PureImpurePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.join();
  }

}
