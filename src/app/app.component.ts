import { Component } from '@angular/core';

import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'jedi-academy';

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Rafael Monteiro', isJedi: true, temple: 'RJC'},
    {name: 'Han Solo', isJedi: true, temple: 'Coruscant'}
  ]
}
