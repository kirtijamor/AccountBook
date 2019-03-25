import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customers } from './customers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersBackendService {

  url = 'http://localhost:3500/customers';
  constructor(public httpClient: HttpClient) { }

  getCustomers(): Observable<Customers[]> {
    return this.httpClient.get<Customers[]>(this.url).pipe(share());
  }// getCustomers()

  createCustomer(customer: Customers) {
    return this.httpClient.post<Customers>(`${this.url}/` , customer).pipe(share());
  }// createCustomer()

  deleteCustomer(customer: Customers) {
    return this.httpClient.delete<Customers>(`${this.url}/${customer.id}`).pipe(share());
  }// deleteCustomer()
}
