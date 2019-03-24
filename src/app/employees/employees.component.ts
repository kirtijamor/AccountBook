import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { EmployeesService } from './../employees.service';
import { Employees } from './../employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employees[] = [];
  constructor(public employeeService: EmployeesService) { }

  displayedColumns = ['id', 'employeeName', 'accountNo', 'delete'];
// tslint:disable-next-line: no-use-before-declare
  dataSource: any = new EmployeesDataSource(this.employeeService);

  getEmployees() {
    this.employeeService.employees$.subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  } // getEmployees()

  deleteEmployee(employee: Employees) {
    console.log(employee);
    this.employeeService.deleteEmployee(employee).subscribe(data => {
      this.employees = data;
    });
  }

  ngOnInit() {
    this.getEmployees();
  }
}

export class EmployeesDataSource extends DataSource<any> {
  constructor(public employeeService: EmployeesService) {
    super();
  }
  connect(): Observable<Employees[]> {
    return this.employeeService.getEmployees();
  }
  disconnect() {}
}
