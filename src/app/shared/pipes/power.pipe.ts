// power.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power }} 2 ^ 1 (1 is taken as default arg)
// {{ 3 | power: 2 }}

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    console.log('PowerPipe Transform called ', value, exponent);
    return Math.pow(value, exponent);
  }

}
