import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trendVolume',
  pure: false
})
export class TrendVolumePipe implements PipeTransform {

  transform(input: any[], volume) {
    // var output: any[] = [];
    // for(var i = 0; i < input.length; i++) {
    //   if(input[i].tweet_volume != null) {
    //     output.push(input[i]);
    //   }
    // }
    // return null;
  }

}
