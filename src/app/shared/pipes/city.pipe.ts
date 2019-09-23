import { Pipe, PipeTransform } from '@angular/core';

type CityFormat = 'short' | 'long';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, format: CityFormat): string {
    let short, long;

    switch (value) {
      case 'Frankfurt':
        short = 'FRA';
        long = 'Airport Frankfurt International';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Flughafen Hamburg Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default:
        short = long = value;
    }

    if (format === 'short') {
      return short;
    } else {
      return long;
    }

  }

}
