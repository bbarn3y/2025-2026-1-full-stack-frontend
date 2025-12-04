import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
  standalone: false
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string, separator: string = ',', ...args: unknown[]): string {
    if (value) {
      const splitValue = value.split(' ');
      if (splitValue.length === 2) {
        return `${splitValue[1]}${separator} ${splitValue[0]}`;
      }
    }
    return value;
  }

}
