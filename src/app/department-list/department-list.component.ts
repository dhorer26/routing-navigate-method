import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent {
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Ruby'},
    {id: 5, name: 'Bootstrap'}
  ];

  constructor(private router: Router) { }
  onSelect(dept: { id: any; }) {
      console.log(dept);
      this.router.navigate(['/departments', dept.id]); // Router Service to navigate
  }
}
