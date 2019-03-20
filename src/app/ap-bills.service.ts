import { ApBillsBackendService } from './ap-bills-backend.service';
import { ApBills } from './ap-bills.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApBillsService {

  // tslint:disable-next-line:variable-name
  private _apBills: BehaviorSubject<ApBills[]> = new BehaviorSubject([]);
  public readonly apBills$: Observable<ApBills[]> = this._apBills.asObservable();

  constructor(public apBillsBackendService: ApBillsBackendService) {
    this.loadApBills();
  }

  loadApBills() {
    this.apBillsBackendService.getApBills().subscribe(res => {
      this._apBills.next(res);
    });

  }// loadArInvoices()


  getApBills(): Observable<ApBills[]> {
    return this._apBills.asObservable();
  }// getApBills()

  addApBill(apBill: ApBills): Observable<ApBills> {
    const obs: Observable<ApBills> = this.apBillsBackendService.createApBill(apBill);
    obs.subscribe(res => {
      this.loadApBills();
      this._apBills.next(this._apBills.getValue());
    });

    return obs;
  }// addApBill()

  deleteApBill(apBill: ApBills): Observable<ApBills[]> {
    const obs: Observable<any> = this.apBillsBackendService.deleteApBill(apBill);
    obs.subscribe(res => {
      this.loadApBills();
      this._apBills.next(this._apBills.getValue());
    });

    return obs;
  }// deleteApBill()
}
