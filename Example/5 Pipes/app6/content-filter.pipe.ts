import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './student';

@Pipe({name: 'contentFilter', pure: false})
export class ContentFilterPipe implements PipeTransform {
  transform(value: Student[], searchFor: string) : Student[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLowerCase();
    return value.filter(student => student.name.toLowerCase().indexOf(searchFor) >= 0);
  }
}
