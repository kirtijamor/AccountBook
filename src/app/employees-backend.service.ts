import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesBackendService {

  url = 'http://localhost:3400/employees';
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(this.url).pipe(share());
  }

  deleteEmployee(employee: Employees) {
    return this.httpClient.delete<Employees>(`${this.url}/${employee.id}`).pipe(share());
  }
}
