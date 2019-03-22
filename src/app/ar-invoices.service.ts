import { ArInvoicesBackendService } from './ar-invoices-backend.service';
import { ArInvoices } from './ar-invoices.model';
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
  private _arInvoices: BehaviorSubject<ArInvoices[]> = new BehaviorSubject([]);
  public readonly arInvoices$: Observable<ArInvoices[]> = this._arInvoices.asObservable();

  constructor(public arInvoicesBackendService: ArInvoicesBackendService) {
    this.loadArInvoices();
  }

  loadArInvoices() {
    this.arInvoicesBackendService.getArInvoices().subscribe(res => {
      // console.log(res);
      this._arInvoices.next(res);
    });

  }// loadArInvoices()

  getArInvoices() {
    return this._arInvoices.asObservable();
  }// getArInvoices()

  deleteArInovice(arInvoice: ArInvoices): Observable<ArInvoices[]> {
    const obs: Observable<any> = this.arInvoicesBackendService.deleteArInvoice(arInvoice);

    obs.subscribe(res => {
      // const invoices: ArInvoices[] = this._arInvoices.getValue();
      // const index = invoices.findIndex((deleted: ArInvoices) => deleted.id === arInvoice.id);
      // invoices.splice(index);
      this.loadArInvoices();
      this._arInvoices.next(this._arInvoices.getValue());
    });

    return obs;
  }// deleteArInvoice()

  addArInvoice(arInvoice: ArInvoices): Observable<ArInvoices> {
    const obs = this.arInvoicesBackendService.createArInvoice(arInvoice);

    obs.subscribe(res => {
      this.loadArInvoices();
      this._arInvoices.next(this._arInvoices.getValue());
    });

    return obs;
  }

}
