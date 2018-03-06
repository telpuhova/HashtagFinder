import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volume',
  pure: false
})
export class VolumePipe implements PipeTransform {

  transform(input: String[]) {
    let output: String[] = [];
    return null;
  }

}
