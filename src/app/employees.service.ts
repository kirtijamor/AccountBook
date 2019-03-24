import { EmployeesBackendService } from './employees-backend.service';
import { Employees } from './employees';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

// tslint:disable-next-line: variable-name
  private _employees: BehaviorSubject<Employees[]> = new BehaviorSubject([]);
  public readonly employees$: Observable<Employees[]> = this._employees.asObservable();

  constructor(public employeesBackendService: EmployeesBackendService) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesBackendService.getEmployees().subscribe(res => {
      console.log(res);
      this._employees.next(res);
    });
  }// loadEmployees()

  getEmployees(): Observable<Employees[]> {
    return this.employees$;
  }// getEmployees()

  deleteEmployee(employee: Employees): Observable<Employees[]> {
    const obs: Observable<any> = this.employeesBackendService.deleteEmployee(employee);
    obs.subscribe(res => {
      this.loadEmployees();
      this._employees.next(this._employees.getValue());
    });
    return obs;
  }
}
