import { Pipe, PipeTransform } from '@angular/core';
import { Trend } from './trend.model';

@Pipe({
  name: 'trendVolume',
  pure: false
})
export class TrendVolumePipe implements PipeTransform {

  transform(input: Trend[], volume) {
    var output: Trend[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].tweet_volume != null) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
