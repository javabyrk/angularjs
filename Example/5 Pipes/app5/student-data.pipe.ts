import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './student';

@Pipe({name: 'studentData'})
export class StudentDataPipe implements PipeTransform {
  transform(student: Student, separator: any = ' | ') : string {
    if (student && student.pocketMoney && student.jeeScore) {
      return `Pocket Money: ${student.pocketMoney} ${separator} Jee Score:${student.jeeScore}`;
    }
    return '(no student data)';
  }
}