import {Component} from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'student-list-view',
  templateUrl: 'app/student-list.template.html'
})
export class StudentListComponent {
  students = Student.students;
}