import { ArInvoicesBackendService } from './ar-invoices-backend.service';
import { ArInvoice } from './ar-invoices.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
@Injectable({
  providedIn: 'root'
})
export class ArInvoicesService {

  // public arInvoices: ArInvoice[] = [];
  url = 'http://localhost:3200';

  // tslint:disable-next-line:variable-name
  private _arInvoices: BehaviorSubject<ArInvoice[]> = new BehaviorSubject([]);
  public readonly arInvoices$: Observable<ArInvoice[]> = this._arInvoices.asObservable();

  constructor(public arInvoicesBackendService: ArInvoicesBackendService) {
    this.loadArInvoices();
  }

  loadArInvoices() {
    this.arInvoicesBackendService.getArInvoice().subscribe(res => {
      // console.log(res);
      this._arInvoices.next(res);
    });

  }// loadArInvoices()

  getArInvoices() {
    return this._arInvoices.asObservable();
  }// getArInvoices()

  deleteArInovices(arInvoice: ArInvoice): Observable<ArInvoice[]> {
    const obs: Observable<any> = this.arInvoicesBackendService.deleteArInvoice(arInvoice);

    obs.subscribe(res => {
      console.log(res , 'res');

      const invoices: ArInvoice[] = this._arInvoices.getValue();
      console.log(invoices , 'invoices');

      const index = invoices.findIndex((deleted: ArInvoice) => deleted.id === arInvoice.id);
      console.log(index, 'index');
      invoices.splice(index);
      this._arInvoices.next(invoices);
      console.log(obs, 'obs');
    });

    return obs;
  }
}
