import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html'
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number;
  public departmentName: number;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    this.departmentName = parseInt(this.route.snapshot.paramMap.get('name'));
  }
}
