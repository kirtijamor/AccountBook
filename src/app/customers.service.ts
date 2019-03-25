import { Observable, BehaviorSubject } from 'rxjs';
import { CustomersBackendService } from './customers-backend.service';
import { Customers } from './customers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers: Customers[] = [];
// tslint:disable-next-line: variable-name
  private _customers: BehaviorSubject<Customers[]> = new BehaviorSubject([]);
  public readonly customers$: Observable<Customers[]> = this._customers.asObservable();

  constructor(public customersBackendService: CustomersBackendService) {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customersBackendService.getCustomers().subscribe(res => {
      // console.log(res);
      this._customers.next(res);
    });
  }// loadCustomers()

  getCustomers(): Observable<Customers[]> {
    return this._customers.asObservable();
  }// getCustomers()

  addCustomer(customer: Customers): Observable<Customers> {
    const obs: Observable<Customers> = this.customersBackendService.createCustomer(customer);
    obs.subscribe(res => {
      this.loadCustomers();
      this._customers.next(this._customers.getValue());
    });
    return obs;
  }

  deleteCustomer(customer: Customers): Observable<Customers[]> {
    const obs: Observable<any> = this.customersBackendService.deleteCustomer(customer);
    obs.subscribe(res => {
      this.loadCustomers();
      this._customers.next(this._customers.getValue());
    });
    return obs;
  }
}
