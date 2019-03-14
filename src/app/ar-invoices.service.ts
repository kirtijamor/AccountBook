import { ArInvoicesBackendService } from './ar-invoices-backend.service';
import { ArInvoice } from './ar-invoices.model';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
@Injectable({
  providedIn: 'root'
})
export class ArInvoicesService {

  public arInvoices: ArInvoice[] = [];
  url = 'http://localhost:3200';

  // tslint:disable-next-line:variable-name
  private _arInvoices: BehaviorSubject<ArInvoice[]> = new BehaviorSubject([]);
  public readonly arInvoices$: Observable<ArInvoice[]> = this._arInvoices.asObservable();

  constructor(public arInvoicesBackendService: ArInvoicesBackendService) {
    this.loadArInvoices();
  }

  loadArInvoices() {
    this.arInvoicesBackendService.getArInvoice().subscribe(res => {
      console.log(res);
      this._arInvoices.next(res);
    });

  }// loadArInvoices()

  getArInvoices() {
    return this._arInvoices.asObservable();
  }


}
