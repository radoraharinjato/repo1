import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2btc'
})
export class Usd2btcPipe implements PipeTransform {

  transform(amount: number): number {
    return amount*60290;
  }

}
